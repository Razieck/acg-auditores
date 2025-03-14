export function Newsletter() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Recibe las últimas noticias y actualizaciones directamente en tu correo electrónico.
          </p>
          <form className="flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="px-4 py-2 w-full sm:w-96 mb-2 sm:mb-0 sm:mr-2 border border-gray-300 rounded"
            />
            <button type="submit" className="bg-[#FF6B35] text-white px-6 py-2 rounded hover:bg-[#e55a2a]">
              Suscribirse
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-2">No compartiremos tu correo electrónico con nadie más.</p>
        </div>
      </div>
    </section>
  )
}

