import Link from "next/link";
import { Suspense } from "react";
import { requestPasswordReset } from "@/app/auth/actions";

function RecoveryMessage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <RecoveryMessageContent searchParams={searchParams} />
    </Suspense>
  );
}

async function RecoveryMessageContent({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const params = await searchParams;

  if (params.error) {
    return (
      <div className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
        {params.error}
      </div>
    );
  }

  if (params.message) {
    return (
      <div className="mb-5 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
        {params.message}
      </div>
    );
  }

  return null;
}

export default function RecuperarPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-white to-purple-100 px-4">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Recuperar contraseña
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Ingresa tu correo y recibirás un enlace para cambiar tu contraseña.
          </p>
        </div>

        <RecoveryMessage searchParams={searchParams} />

        <form action={requestPasswordReset} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="correo@ejemplo.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Enviar enlace
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          <Link
            href="/login"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            Volver al inicio de sesión
          </Link>
        </p>
      </section>
    </main>
  );
}
