import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-violet-600">Dashboard</p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">Bienvenido</h1>

          <p className="mt-2 text-gray-500">
            Has iniciado sesión correctamente.
          </p>

          {user && (
            <div className="mt-8 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Usuario autenticado</p>

              <p className="mt-1 font-medium text-gray-900">
                {user.user_metadata?.nombre ?? "Usuario"}
              </p>

              <p className="mt-1 text-sm text-gray-600">{user.email}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
