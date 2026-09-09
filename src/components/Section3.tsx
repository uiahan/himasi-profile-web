import React, { forwardRef, useState, useRef } from "react";

interface SectionProps {
  isActive: boolean;
  isLeaving: boolean;
  onScroll: () => void;
}

const Section3 = forwardRef<HTMLElement, SectionProps>(
  ({ isActive, isLeaving, onScroll }, ref) => {
    // State Interaktif Parallax Mouse
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 });
    };

    return (
      <section
        ref={ref}
        id="sec-3"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`persona-section relative bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden select-none ${
          isActive ? "active" : ""
        } ${isLeaving ? "leaving" : ""}`}
        style={{ backgroundImage: 'url("img/background.jpg")' }}
      >
        {/* Overlay Solid High-Contrast (Tanpa Titik-Titik) */}
        <div className="absolute inset-0 bg-persona-dark/95 pointer-events-none z-0"></div>

        {/* Dynamic Scanline Effect (Tanpa Titik-Titik) */}
        <div className="absolute inset-0 bg-scanline pointer-events-none z-0 opacity-40"></div>

        {/* Decorative Kinetic Cutout Strips */}
        <div className="kinetic-strip strip-1 absolute -top-10 -left-10 w-[120%] h-32 bg-persona/40 transform -rotate-6 pointer-events-none z-0"></div>
        <div className="kinetic-strip strip-2 absolute -bottom-10 -right-10 w-[120%] h-40 bg-persona-light/20 transform -rotate-3 pointer-events-none z-0"></div>

        <div
          ref={containerRef}
          className="section-content relative z-10 overflow-y-auto h-full w-full block"
          onScroll={onScroll}
        >
          {/* Modifikasi: ganti min-h-screen & flex justify-center dengan padding bottom yang lega */}
          <div className="max-w-6xl w-full mx-auto z-10 pt-10 sm:pt-16 pb-20 sm:pb-36 px-4 sm:px-6 flex flex-col justify-start lg:justify-center">
            {/* HEADER SECTION - Kinetic Ribbon & Skewed Text */}
            <div className="space-y-4 mb-8 sm:mb-12 text-center lg:text-left">
              <div className="p-elem inline-flex items-center justify-center lg:justify-start">
                <div className="bg-persona border-3 border-black text-white px-4 py-1.5 font-['Montserrat'] font-black italic tracking-widest text-xs uppercase shadow-[5px_5px_0px_#000] transform -skew-x-12 hover:skew-x-0 hover:bg-white hover:text-black transition-all cursor-pointer">
                  <span className="inline-block transform skew-x-12 hover:skew-x-0">
                    CHAPTER 03 // CORE PURPOSE
                  </span>
                </div>
              </div>

              <h2 className="p-elem font-['Montserrat'] font-black italic uppercase leading-none select-none">
                <span
                  className="inline-block text-4xl sm:text-6xl lg:text-7xl text-white tracking-tighter drop-shadow-[6px_6px_0px_#000] transform -skew-x-6 mr-3 hover:translate-x-2 transition-transform cursor-pointer"
                  style={{
                    transform: `translateX(${mousePos.x * 15}px)`,
                  }}
                >
                  VISI
                </span>
                <span
                  className="inline-block bg-persona-light text-black text-2xl sm:text-4xl lg:text-6xl px-4 py-1.5 tracking-normal border-4 border-black shadow-[8px_8px_0px_#000] transform -skew-x-6 hover:-skew-x-12 hover:bg-white transition-all cursor-pointer"
                  style={{
                    transform: `translateX(${-mousePos.x * 20}px)`,
                  }}
                >
                  & MISI
                </span>
              </h2>
            </div>

            {/* CARDS GRID */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* CARD VISI */}
              <div
                className="p-elem lg:col-span-5 relative group flex flex-col cursor-pointer transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateY(${mousePos.x * 15}deg) rotateX(${-mousePos.y * 15}deg)`,
                }}
              >
                {/* Explosive Backdrop Accent */}
                <div className="absolute -inset-3 bg-persona-light transform -rotate-3 border-3 border-black group-hover:scale-105 group-hover:-rotate-6 transition-all duration-300"></div>
                <div className="absolute -inset-1.5 bg-white transform rotate-2 border-3 border-black group-hover:rotate-4 transition-all duration-300"></div>

                <div className="relative flex-1 bg-persona border-4 border-white p-6 sm:p-8 shadow-[14px_14px_0px_#000] flex flex-col justify-center transition-all duration-300 group-hover:shadow-[20px_20px_0px_#124D1C]">
                  {/* Comic Corner Accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 bg-black border-l-4 border-b-4 border-white z-20 group-hover:w-14 group-hover:h-14 transition-all"></div>

                  <div className="inline-block bg-black border-2 border-white px-3 py-1 shadow-[4px_4px_0px_#000] transform -skew-x-6 mb-4 self-start">
                    <span className="font-['Montserrat'] font-black italic text-xs text-white uppercase tracking-wider block transform skew-x-6">
                      LANDASAN UTAMA
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-['Montserrat'] font-black italic uppercase text-white mb-4 tracking-tight transform -skew-x-3 group-hover:translate-x-1 transition-transform">
                    VISI
                  </h3>

                  <p className="text-sm sm:text-base text-gray-100 font-bold leading-relaxed border-t-2 border-white/20 pt-4">
                    Menjadi himpunan mahasiswa yang unggul, berintegritas, dan
                    terdepan dalam inovasi teknologi Sistem Informasi serta
                    membawa dampak positif nyata.
                  </p>
                </div>
              </div>

              {/* CARD MISI */}
              <div
                className="p-elem mb-28 lg:mb-0 lg:col-span-7 relative group flex flex-col cursor-pointer transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateY(${mousePos.x * 15}deg) rotateX(${-mousePos.y * 15}deg)`,
                }}
              >
                {/* Explosive Backdrop Accent */}
                <div className="absolute -inset-3 bg-persona transform rotate-3 border-3 border-black group-hover:scale-105 group-hover:rotate-6 transition-all duration-300"></div>
                <div className="absolute -inset-1.5 bg-white transform -rotate-2 border-3 border-black group-hover:-rotate-4 transition-all duration-300"></div>

                <div className="relative flex-1 bg-black border-4 border-white p-6 sm:p-8 shadow-[14px_14px_0px_#000] flex flex-col justify-center transition-all duration-300 group-hover:shadow-[20px_20px_0px_#124D1C]">
                  {/* Comic Corner Accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 bg-persona-light border-l-4 border-b-4 border-black z-20 group-hover:w-14 group-hover:h-14 transition-all"></div>

                  <h3 className="text-2xl sm:text-3xl font-['Montserrat'] font-black italic uppercase text-persona-light mb-6 tracking-tight transform -skew-x-3 group-hover:translate-x-1 transition-transform">
                    MISI ORGANISASI
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 group/item">
                      <span className="bg-persona border-2 border-white text-white font-['Montserrat'] font-black text-xs px-2.5 py-1 mt-0.5 shadow-[3px_3px_0px_#000] transform -skew-x-6 group-hover/item:bg-white group-hover/item:text-black transition-all">
                        01
                      </span>
                      <p className="text-xs sm:text-sm text-gray-200 font-bold leading-relaxed">
                        Meningkatkan kualitas skill teknikal dan akademik
                        seluruh anggota melalui riset dan pelatihan.
                      </p>
                    </li>

                    <li className="flex items-start gap-4 group/item">
                      <span className="bg-persona border-2 border-white text-white font-['Montserrat'] font-black text-xs px-2.5 py-1 mt-0.5 shadow-[3px_3px_0px_#000] transform -skew-x-6 group-hover/item:bg-white group-hover/item:text-black transition-all">
                        02
                      </span>
                      <p className="text-xs sm:text-sm text-gray-200 font-bold leading-relaxed">
                        Membangun ekosistem kolaboratif yang solid antar civitas
                        akademika dan alumni.
                      </p>
                    </li>

                    <li className="flex items-start gap-4 group/item">
                      <span className="bg-persona border-2 border-white text-white font-['Montserrat'] font-black text-xs px-2.5 py-1 mt-0.5 shadow-[3px_3px_0px_#000] transform -skew-x-6 group-hover/item:bg-white group-hover/item:text-black transition-all">
                        03
                      </span>
                      <p className="text-xs sm:text-sm text-gray-200 font-bold leading-relaxed">
                        Melaksanakan pengabdian masyarakat berbasiskan solusi
                        teknologi digital terkini.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

Section3.displayName = "Section3";
export default Section3;
