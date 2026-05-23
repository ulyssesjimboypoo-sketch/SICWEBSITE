import { Eye, Target, MapPin, Phone, Mail } from 'lucide-react'

function AboutSection() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            <div>
              <div className="w-16 h-1 bg-red-800 mb-6"></div>

              <h2 className="text-6xl font-bold text-red-900 mb-8">
                About Us
              </h2>

              <p className="text-2xl text-gray-700 leading-[50px] mb-10">
                San Ildefonso College is a Diocesan Catholic Institution
                that strives for excellence in instruction, research,
                and extension dedicated to forming God-loving individuals
                and future leaders.
              </p>

              <button className="bg-red-900 hover:bg-red-800 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition">
                Read More
              </button>
            </div>

            <div className="grid gap-8">

              {/* Vision */}
              <div className="border rounded-3xl p-10 shadow-sm hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-900 p-5 rounded-full text-white">
                    <Eye size={35} />
                  </div>

                  <h3 className="text-4xl font-bold text-red-900">
                    Vision
                  </h3>
                </div>

                <p className="text-xl text-gray-700 leading-10">
                  San Ildefonso College envisions itself as a faith community
                  to be globally competitive, academically excellent,
                  certified and accredited.
                </p>
              </div>

              {/* Mission */}
              <div className="border rounded-3xl p-10 shadow-sm hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-900 p-5 rounded-full text-white">
                    <Target size={35} />
                  </div>

                  <h3 className="text-4xl font-bold text-red-900">
                    Mission
                  </h3>
                </div>

                <p className="text-xl text-gray-700 leading-10">
                  San Ildefonso College commits to excellence in instruction,
                  research, and extension while strengthening communities
                  and forming Filipino professional leaders.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default AboutSection