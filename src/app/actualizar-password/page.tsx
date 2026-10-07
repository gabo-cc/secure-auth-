import { updatePassword } from "@/app/auth/actions";

export default function ActualizarPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-white to-purple-100 px-4">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Nueva contraseña</h1>

          <p className="mt-2 text-sm text-gray-500">
            Ingresa una nueva contraseña para tu cuenta.
          </p>
        </div>

        <form action={updatePassword} className="space-y-5">
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Nueva contraseña
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Actualizar contraseña
          </button>
        </form>
      </section>
    </main>
  );
}
