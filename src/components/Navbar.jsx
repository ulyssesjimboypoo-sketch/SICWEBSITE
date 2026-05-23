import { Menu } from 'lucide-react'


function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-4">

<img
  src="/logo.png"
  alt="SIC Logo"
  style={{
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "9999px"
  }}
/>

  <div>
    <h1 className="text-2xl font-bold text-red-900">
      San Ildefonso College
    </h1>

    <p className="text-sm italic text-gray-600">
      Deus Super Omnia
    </p>
  </div>

</div>

        <ul className="hidden lg:flex gap-10 text-xl font-medium text-gray-800">
          <li><a href="#home" className="hover:text-red-900">Home</a></li>
          <li><a href="#about" className="hover:text-red-900">About</a></li>
          <li><a href="#values" className="hover:text-red-900">Values</a></li>
          <li><a href="#programs" className="hover:text-red-900">Programs</a></li>
          <li><a href="#admissions" className="hover:text-red-900">Admissions</a></li>
          <li><a href="#contact" className="hover:text-red-900">Contact</a></li>
        </ul>

        <button className="hidden lg:block bg-red-900 hover:bg-red-800 text-white px-8 py-4 rounded-2xl text-xl font-semibold transition">
          Apply Now
        </button>

        <button className="lg:hidden">
          <Menu size={32} />
        </button>

      </div>
    </nav>
  )
}

export default Navbar
