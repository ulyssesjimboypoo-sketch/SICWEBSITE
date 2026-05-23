function Footer() {
  return (
    <footer className="bg-red-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* School Info */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              San Ildefonso College
            </h2>

            <p className="text-xl text-red-100 italic mb-8">
              Deus Super Omnia
            </p>

            <p className="text-lg text-gray-300 leading-9">
              A Diocesan Catholic Institution committed to
              excellence in education, leadership, and
              faith-centered formation.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-3xl font-bold mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-5 text-lg text-gray-300">

              <a href="#home" className="hover:text-white transition">
                Home
              </a>

              <a href="#about" className="hover:text-white transition">
                About Us
              </a>

              <a href="#programs" className="hover:text-white transition">
                Programs
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 text-lg text-gray-300">

              <p>
                M.H. Del Pilar St.,
                Brgy. Plaza Aldea,
                Tanay, Rizal, Philippines
              </p>

              <p>
                (02) 8654-4692
              </p>

              <p>
                hrmd@sictanay.edu.ph
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-red-800 mt-20 pt-8 text-center">

          <p className="text-gray-400 text-lg">
            © 2026 San Ildefonso College. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer