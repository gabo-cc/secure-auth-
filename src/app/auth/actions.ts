"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signUp(formData: FormData) {
  const nombre = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!nombre || !email || !password) {
    redirect("/registro?error=Todos los campos son obligatorios");
  }

  if (password.length < 6) {
    redirect("/registro?error=La contraseña debe tener al menos 6 caracteres");
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nombre,
      },
    },
  });

  if (error) {
    redirect(`/registro?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/login?message=Cuenta creada correctamente");
}

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    redirect("/login?error=Todos los campos son obligatorios");
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect("/login?error=Correo o contraseña incorrectos");
  }

  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");
}

export async function requestPasswordReset(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    redirect("/recuperar-password?error=El correo es obligatorio");
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/actualizar-password`,
  });

  if (error) {
    redirect(`/recuperar-password?error=${encodeURIComponent(error.message)}`);
  }

  redirect(
    "/recuperar-password?message=Revisa tu correo para continuar con la recuperación",
  );
}

export async function updatePassword(formData: FormData) {
  const password = formData.get("password") as string;

  if (!password || password.length < 6) {
    redirect(
      "/actualizar-password?error=La contraseña debe tener al menos 6 caracteres",
    );
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    redirect(`/actualizar-password?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/login?message=Contraseña actualizada correctamente");
}
