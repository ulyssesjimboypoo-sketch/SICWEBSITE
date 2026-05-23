function Footer() {
  return (
    <footer className="bg-red-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              San Ildefonso College
            </h2>

            <p className="text-red-200 italic mb-6">
              Deus Super Omnia
            </p>

            <p className="text-gray-300 leading-8">
              A Catholic Institution committed to
              excellence and leadership.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-300">

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#programs">Programs</a>

            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-300">

              <p>Tanay, Rizal</p>
              <p>(02) 8654-4692</p>
              <p>hrmd@sictanay.edu.ph</p>

            </div>
          </div>

        </div>

        <div className="border-t border-red-800 mt-14 pt-6 text-center text-gray-400">
          © 2026 San Ildefonso College
        </div>

      </div>
    </footer>
  )
}

export default Footer