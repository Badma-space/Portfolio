import Image from "next/image";

export default function Home() {
  return (
    // Full-page scroller with snap
    <main className="h-dvh bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#0f172a] text-white">
      <div className="h-full overflow-y-auto snap-y snap-mandatory scroll-smooth">

        {/* ============== HERO ============== */}
        <section className="snap-start min-h-dvh flex items-center justify-center px-6">
          <div className="max-w-5xl w-full bg-[#0f172a]/70 backdrop-blur rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between p-10 gap-10 border border-white/5">
            
            {/* Left - Text */}
            <div className="flex-1 animate-fadeIn mobile-init">
              <h1 className="text-5xl font-extrabold leading-tight">
                Hi, I’m <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Badma Shree</span>
              </h1>
              <h2 className="mt-3 text-2xl text-gray-300 font-semibold">
                Full‑Stack Developer
              </h2>
              <p className="mt-5 max-w-md text-gray-400">
                I’m passionate about building scalable, user-focused web applications. I combine clean code with modern design principles to create seamless digital experiences.
                I design, develop, and deliver web apps that make an impact.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-[1.03] transition-transform shadow-lg"
                >
                  Let’s connect
                </a>
                <a
                  href="#skills"
                  className="px-6 py-3 rounded-full font-medium border border-white/15 hover:bg-white/5 transition"
                >
                  View skills
                </a>
              </div>
            </div>

            {/* Right - Profile with glowing ring */}
            <div className="flex-1 flex justify-center animate-slideUp mobile-init">
              <div className="relative w-64 h-64 rounded-full p-[6px]">
                {/* animated glow ring */}
                <div className="absolute inset-0 rounded-full glow-ring" aria-hidden />
                <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                  <Image
                    src="/Profile.jpg"  // put your image in /public/profile.jpg
                    alt="Badma Shree"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* scroll hint */}
          <a href="#skills" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60 hover:text-white/90">
            swipe / scroll for more ↓
          </a>
        </section>

        {/* ============== SKILLS ============== */}
        <section id="skills" className="snap-start min-h-dvh flex items-center justify-center px-6">
          <div className="max-w-5xl w-full bg-[#0f172a]/70 backdrop-blur rounded-3xl shadow-2xl p-10 border border-white/5">
            <h3 className="text-3xl font-bold animate-fadeIn mobile-init">Skills</h3>
            <p className="mt-2 text-gray-400 animate-fadeIn mobile-init">A quick look at the tools I use most.</p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 perspective-1000">
              {[
                { src: "/Html.jpg", label: "HTML" },
                { src: "/Css.jpg", label: "CSS" },
                { src: "/Javascript.jpg", label: "JavaScript" },
                { src: "/react.jpg", label: "React" },
                { src: "/Node.jpg", label: "Node.js" },
                { src: "/Django.jpg", label: "Django" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-4 shadow hover:shadow-xl transition
                             transform-gpu hover:-rotate-y-6 hover:rotate-x-3 hover:scale-[1.04] animate-fadeIn mobile-init"
                  title={item.label}
                >
                  <div className="aspect-square rounded-xl flex items-center justify-center bg-black/20">
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={72}
                      height={72}
                      className="opacity-90 group-hover:opacity-100 transition"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== CONTACT ============== */}
        <section id="contact" className="snap-start min-h-dvh flex items-center justify-center px-6">
          <div className="max-w-3xl w-full bg-[#0f172a]/70 backdrop-blur rounded-3xl shadow-2xl p-10 text-center border border-white/5 animate-fadeIn mobile-init">
            <h3 className="text-3xl font-bold">Contact</h3>
            <p className="mt-2 text-gray-400">I’m open to opportunities and collaborations.</p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/badma-shree-2418aa251"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10"
              >
                🔗 LinkedIn
              </a>
              <a
                href="https://github.com/Badma-space"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10"
              >
                🖥️ GitHub
              </a>
              <a href="mailto:badmashree17@gmail.com" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">
                📧 badmashree17@gmail.com
              </a>
              <a href="tel:+919025642103" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">
                📱 +91 9025642103
              </a>
            </div>

            <a href="#" className="block mt-10 text-xs text-white/60 hover:text-white/90">
              back to top ↑
            </a>
          </div>
        </section>

      </div>
    </main>    
  );
}
