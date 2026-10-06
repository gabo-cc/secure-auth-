export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-purple-100 flex items-center justify-center px-4">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Bienvenido</h1>

          <p className="mt-2 text-sm text-gray-500">
            Inicia sesión para continuar
          </p>
        </div>

        <form className="space-y-5">
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
              placeholder="correo@ejemplo.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          <div className="flex items-center justify-end">
            <a
              href="/recuperar-password"
              className="text-sm font-medium text-violet-600 hover:text-violet-700"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          ¿No tienes una cuenta?{" "}
          <a
            href="/registro"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            Crear cuenta
          </a>
        </p>
      </section>
    </main>
  );
}
