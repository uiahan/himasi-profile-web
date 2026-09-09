import React, { forwardRef, useState, useRef } from "react";

interface SectionProps {
  isActive: boolean;
  isLeaving: boolean;
  onScroll: () => void;
}

const Section2 = forwardRef<HTMLElement, SectionProps>(({ isActive, isLeaving, onScroll }, ref) => {
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
      id="sec-2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`persona-section relative bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden select-none ${
        isActive ? "active" : ""
      } ${isLeaving ? "leaving" : ""}`}
      style={{ backgroundImage: 'url("img/background.jpg")' }}
    >
      {/* Overlay Solid High-Contrast */}
      <div className="absolute inset-0 bg-persona-dark/95 pointer-events-none z-0"></div>

      {/* Dynamic Scanline Effect */}
      <div className="absolute inset-0 bg-scanline pointer-events-none z-0 opacity-40"></div>

      {/* Decorative Kinetic Cutout Strips */}
      <div className="kinetic-strip strip-1 absolute -top-10 -left-10 w-[120%] h-32 bg-persona/40 transform -rotate-6 pointer-events-none z-0"></div>
      <div className="kinetic-strip strip-2 absolute -bottom-10 -right-10 w-[120%] h-40 bg-persona-light/20 transform -rotate-3 pointer-events-none z-0"></div>

      <div 
        ref={containerRef}
        className="section-content relative z-10 overflow-y-auto h-full max-h-screen w-full" 
        onScroll={onScroll}
      >
        {/* MODIFIKASI: Menambahkan padding-bottom yang lebih lega (pb-48 di mobile & pb-56 di desktop) */}
        <div className="max-w-4xl w-full mx-auto pt-16 sm:pt-20 pb-48 sm:pb-56 px-4 sm:px-6 flex flex-col items-center">
          
          {/* HEADER SECTION - Comic Ribbon & Skewed Text */}
          <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 text-center w-full">
            <div className="p-elem inline-flex items-center justify-center">
              <div className="bg-persona border-3 border-black text-white px-4 py-1.5 font-['Montserrat'] font-black italic tracking-widest text-xs uppercase shadow-[5px_5px_0px_#000] transform -skew-x-12 hover:skew-x-0 hover:bg-white hover:text-black transition-all cursor-pointer">
                <span className="inline-block transform skew-x-12 hover:skew-x-0">
                  CHAPTER 02 // LEADERSHIP
                </span>
              </div>
            </div>

            <h2 className="p-elem font-['Montserrat'] font-black italic uppercase leading-none select-none">
              <span 
                className="inline-block text-3xl sm:text-6xl text-white tracking-tighter drop-shadow-[6px_6px_0px_#000] transform -skew-x-6 mr-3 hover:translate-x-2 transition-transform cursor-pointer"
                style={{ transform: `translateX(${mousePos.x * 15}px)` }}
              >
                PIMPINAN
              </span>
              <span 
                className="inline-block bg-persona-light text-black text-2xl sm:text-5xl px-4 py-1.5 tracking-normal border-4 border-black shadow-[8px_8px_0px_#000] transform -skew-x-6 hover:-skew-x-12 hover:bg-white transition-all cursor-pointer"
                style={{ transform: `translateX(${-mousePos.x * 20}px)` }}
              >
                HIMPUNAN
              </span>
            </h2>

            <div className="p-elem max-w-lg mx-auto transform -skew-x-2">
              <p className="text-white text-xs sm:text-sm lg:text-base font-bold border-4 border-black bg-black/90 p-4 sm:p-5 shadow-[8px_8px_0px_#124D1C] leading-relaxed text-center border-l-[12px] border-l-persona-light">
                Nahkoda utama pergerakan dan penentu arah strategis HIMASI UBSI Sukabumi.
              </p>
            </div>
          </div>

          {/* STACKED CARDS CONTAINER */}
          <div className="flex flex-col gap-12 sm:gap-20 w-full items-center mb-8 sm:mb-12">
            
            {/* ================= KARTU 1: KETUA HIMPUNAN ================= */}
            <div 
              className="p-elem relative group w-full max-w-2xl cursor-pointer transition-transform duration-300 ease-out"
              style={{ transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)` }}
            >
              {/* Persona 5 Explosive Comic Backdrop */}
              <div className="absolute -inset-4 bg-persona-light transform -rotate-2 border-4 border-black group-hover:scale-102 group-hover:-rotate-4 transition-all duration-300"></div>
              <div className="absolute -inset-2 bg-white transform rotate-1 border-4 border-black group-hover:rotate-2 transition-all duration-300"></div>
              
              <div className="relative bg-black border-4 border-white p-6 sm:p-8 shadow-[16px_16px_0px_#000] group-hover:shadow-[22px_22px_0px_#124D1C] transition-all duration-300">
                
                {/* Comic Corner Stamp */}
                <div className="absolute -top-5 -left-5 bg-persona text-white font-black italic px-4 py-2 border-3 border-black text-xs sm:text-sm transform -rotate-12 shadow-[4px_4px_0px_#000] z-30">
                  LEADER // 01
                </div>
                <div className="absolute top-0 right-0 w-12 h-12 bg-persona border-l-4 border-b-4 border-black z-20 group-hover:w-16 group-hover:h-16 transition-all"></div>

                <div className="grid sm:grid-cols-12 gap-6 items-center">
                  {/* Frame Foto KAHIM */}
                  <div className="sm:col-span-5 w-full h-72 sm:h-80 bg-zinc-950 border-3 border-black relative overflow-hidden flex items-center justify-center p-2 shadow-[6px_6px_0px_#000]">
                    <span className="absolute top-2 left-2 bg-white text-black text-[9px] font-black tracking-tighter px-2 py-0.5 border-2 border-black transform rotate-6 z-20">
                      POS // KAHIM
                    </span>
                    <img
                      src="img/kahim.webp"
                      alt="Ketua Himpunan"
                      className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] z-10"
                    />
                    <div className="absolute inset-0 bg-persona-light/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-15"></div>
                  </div>

                  {/* Detail Informasi KAHIM */}
                  <div className="sm:col-span-7 space-y-4">
                    <div className="inline-block bg-persona border-3 border-black px-3.5 py-1 shadow-[4px_4px_0px_#000] transform -skew-x-6 group-hover:skew-x-0 transition-all">
                      <span className="font-['Montserrat'] font-black italic text-xs text-white uppercase tracking-wider block transform skew-x-6 group-hover:skew-x-0">
                        KETUA HIMPUNAN UMUM
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-['Montserrat'] font-black italic uppercase text-white tracking-tight transform -skew-x-3 group-hover:translate-x-1 transition-transform">
                      Genta Wahyu Pratama
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t-2 border-zinc-800 pt-3">
                      Memimpin arah strategi organisasi, menjaga keselarasan visi, serta mewakili HIMASI secara internal dan eksternal dengan penuh integritas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= KARTU 2: WAKIL KETUA HIMPUNAN ================= */}
            <div 
              className="p-elem relative group w-full max-w-2xl cursor-pointer transition-transform duration-300 ease-out"
              style={{ transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)` }}
            >
              {/* Persona 5 Explosive Comic Backdrop */}
              <div className="absolute -inset-4 bg-persona transform rotate-2 border-4 border-black group-hover:scale-102 group-hover:rotate-4 transition-all duration-300"></div>
              <div className="absolute -inset-2 bg-white transform -rotate-1 border-4 border-black group-hover:-rotate-2 transition-all duration-300"></div>

              <div className="relative bg-black border-4 border-white p-6 sm:p-8 shadow-[16px_16px_0px_#000] group-hover:shadow-[22px_22px_0px_#124D1C] transition-all duration-300">
                
                {/* Comic Corner Stamp */}
                <div className="absolute -top-5 -left-5 bg-persona-light text-black font-black italic px-4 py-2 border-3 border-black text-xs sm:text-sm transform -rotate-12 shadow-[4px_4px_0px_#000] z-30">
                  CO-LEADER // 02
                </div>
                <div className="absolute top-0 right-0 w-12 h-12 bg-persona-light border-l-4 border-b-4 border-black z-20 group-hover:w-16 group-hover:h-16 transition-all"></div>

                <div className="grid sm:grid-cols-12 gap-6 items-center">
                  {/* Frame Foto WAKAHIM */}
                  <div className="sm:col-span-5 w-full h-72 sm:h-80 bg-zinc-950 border-3 border-black relative overflow-hidden flex items-center justify-center p-2 shadow-[6px_6px_0px_#000]">
                    <span className="absolute top-2 left-2 bg-white text-black text-[9px] font-black tracking-tighter px-2 py-0.5 border-2 border-black transform -rotate-6 z-20">
                      POS // WAKAHIM
                    </span>
                    <img
                      src="img/wakahim.webp"
                      alt="Wakil Ketua Himpunan"
                      className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] z-10"
                    />
                    <div className="absolute inset-0 bg-persona/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-15"></div>
                  </div>

                  {/* Detail Informasi WAKAHIM */}
                  <div className="sm:col-span-7 space-y-4">
                    <div className="inline-block bg-persona-light border-3 border-black px-3.5 py-1 shadow-[4px_4px_0px_#000] transform -skew-x-6 group-hover:skew-x-0 transition-all">
                      <span className="font-['Montserrat'] font-black italic text-xs text-black uppercase tracking-wider block transform skew-x-6 group-hover:skew-x-0">
                        WAKIL KETUA HIMPUNAN
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-['Montserrat'] font-black italic uppercase text-white tracking-tight transform -skew-x-3 group-hover:translate-x-1 transition-transform">
                      Ardi Zakaria
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t-2 border-zinc-800 pt-3">
                      Mengkoordinasikan kinerja antar departemen internal dan memastikan kelancaran serta keberlanjutan seluruh program kerja organisasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
});

Section2.displayName = "Section2";
export default Section2;