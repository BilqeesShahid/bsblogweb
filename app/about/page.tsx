import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 ">
        <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/dev.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
              <p className="text-gray-600 text-lg mb-4">
                Hello&#33; I&#39;m Bilqees Shahid, a passionate software developer and tech enthusiast.
                 I created this blog to share my experiences, tips,
                  and tutorials on various programming languages and technologies.
                   I believe that learning should be a continuous journey,
                    and I&#39;m here to help others on their path to mastering the art of coding.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you&#39;re just starting out or looking to sharpen your skills,
                 you&#39;ll find a variety of resources and insights here.
                  Let&#39;s explore the world of programming together&#33;
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">My Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600">
              From curious beginner to seasoned developer, here&#39;s how Bilqees navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="dev1.png" alt="bilqees as a beginner" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600">
                  My coding journey began at GIAIC when I stumbled upon my first programming language Typescript.
                   What started as a simple curiosity quickly turned into a passion,
                    as I spent countless hours experimenting with code, building small projects,
                     and learning the fundamentals of software development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/dev2.jpg" alt="bilqees learning new skills" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">Diving Deeper</h3>
                <p className="mt-4 text-gray-600">
                  After mastering the basics, My thirst for knowledge grew.
                   I began exploring more complex topics such as data structures,
                    algorithms, and web development.
                    Exploring through chatGpt, Google and coding Seminars.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/dev3.jpg" alt="About pic" className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600">
                  With several Months of experience under Our best faculty members,
                  I  began tackling more significant challenges.
                   From contributing to open-source projects to developing my own applications
                   , I continued to push my limits, always looking for opportunities to learn and grow.
                    my journey is not without its setbacks, 
                    but each obstacle was a stepping stone to becoming the skilled developer I am today.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/dev4.jpg" alt="Bilqees mentoring others" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">Giving Back</h3>
                <p className="mt-4 text-gray-600">
                  Today, I am not only a proficient coder but also a mentor to others. 
                  I regularly contributes to the programming community by writing tutorials,
                   giving talks, and helping new coders find their footing in the world of software
                    development. For me, coding is more than just a profession, it&#39;s a lifelong journey of learning and sharing knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
