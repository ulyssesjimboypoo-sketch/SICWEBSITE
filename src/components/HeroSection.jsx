function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

       <div className="relative z-10 px-8 md:px-20 lg:px-32 text-white max-w-4xl">

  <br /><br /><br /><br /><br /><br /><br /><h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
    San Ildefonso College
  </h1><br />

  <p className="text-3xl md:text-5xl italic text-gray-200 mb-8">
    Deus Super Omnia
  </p><br /><br />

  <p className="text-xl md:text-3xl leading-[45px] md:leading-[60px] text-gray-200 max-w-3xl mb-12">
    A Catholic Institution committed to excellence
    in education, leadership, and holistic formation
    for future generations.
  </p>

  <div className="flex flex-wrap gap-8 mt-8">

    <button className="bg-red-900 px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-red-800 transition duration-300 shadow-lg">
      Learn More
    </button>

    <button className="border-2 border-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white hover:text-black transition duration-300">
      Explore Programs
    </button>

  </div>

</div>
      </section>
    </>
  );
}

export default HeroSection;