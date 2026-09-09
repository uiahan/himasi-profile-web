import React, { forwardRef, useState, useRef } from "react";

interface SectionProps {
  isActive: boolean;
  isLeaving: boolean;
  onScroll: () => void;
}

const Section1 = forwardRef<HTMLElement, SectionProps>(({ isActive, isLeaving, onScroll }, ref) => {
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
      id="sec-1"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`persona-section relative bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden select-none ${
        isActive ? "active" : ""
      } ${isLeaving ? "leaving" : ""}`}
      style={{ backgroundImage: 'url("img/background.jpg")' }}
    >
      <div className="absolute inset-0 bg-persona-dark/95 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-scanline pointer-events-none z-0 opacity-40"></div>

      <div className="kinetic-strip strip-1 absolute -top-10 -left-10 w-[120%] h-32 bg-persona/40 transform -rotate-6 pointer-events-none z-0"></div>
      <div className="kinetic-strip strip-2 absolute -bottom-10 -right-10 w-[120%] h-40 bg-persona-light/20 transform -rotate-3 pointer-events-none z-0"></div>

      <div 
        ref={containerRef}
        className="section-content relative z-10 overflow-y-auto max-h-screen w-full" 
        onScroll={onScroll}
      >
        {/* Mobile Fix: justify-center & py-12 agar semua elemen di tengah secara vertikal dan horizontal */}
        <div className="max-w-6xl w-full mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center justify-center min-h-screen py-12 px-4 sm:px-6">
          
          {/* LOGO CONTAINER */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 w-full">
            <div 
              className="p-elem relative group cursor-pointer transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${mousePos.x * 25}deg) rotateX(${-mousePos.y * 25}deg)`
              }}
            >
              <div className="absolute -inset-3 sm:-inset-4 bg-persona-light transform rotate-6 border-3 border-black group-hover:scale-105 group-hover:rotate-12 transition-all duration-300"></div>
              <div className="absolute -inset-1 sm:-inset-2 bg-white transform -rotate-3 border-3 border-black group-hover:-rotate-6 transition-all duration-300"></div>
              
              <div className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-black border-4 border-white p-4 sm:p-6 transform -skew-x-6 shadow-[10px_10px_0px_#000] sm:shadow-[14px_14px_0px_#000] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-[20px_20px_0px_#124D1C]">
                <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 bg-persona border-r-4 border-b-4 border-black z-20 group-hover:w-14 group-hover:h-14 transition-all"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-persona-light border-l-4 border-t-4 border-black z-20 group-hover:w-14 group-hover:h-14 transition-all"></div>
                
                <span className="absolute top-2 right-2 bg-white text-black text-[9px] font-black tracking-tighter px-2 py-0.5 border-2 border-black transform rotate-12 z-20 shadow-[2px_2px_0px_#000]">
                  SYS.ID // 01
                </span>

                <img
                  src="img/logo.png"
                  alt="Logo HIMASI UBSI"
                  className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-115 group-hover:rotate-3 drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] z-10"
                />

                <div className="absolute inset-0 bg-persona-light/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-15"></div>
              </div>
            </div>
          </div>

          {/* TEXT & DETAIL CONTENT */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left order-2 lg:order-1 w-full flex flex-col items-center lg:items-start">
            
            {/* Ribbon Header Badge */}
            <div className="p-elem inline-flex items-center justify-center lg:justify-start">
              <div className="bg-persona border-3 border-black text-white px-4 py-1.5 font-['Montserrat'] font-black italic tracking-widest text-[10px] sm:text-xs uppercase shadow-[4px_4px_0px_#000] transform -skew-x-12 hover:skew-x-0 hover:bg-white hover:text-black transition-all cursor-pointer">
                <span className="inline-block transform skew-x-12 hover:skew-x-0">
                  CHAPTER 01 // SYSTEM OVERVIEW
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="p-elem font-['Montserrat'] font-black italic uppercase leading-none select-none w-full">
              <span 
                className="block text-4xl sm:text-7xl lg:text-8xl text-white tracking-tighter drop-shadow-[4px_4px_0px_#000] sm:drop-shadow-[6px_6px_0px_#000] transform -skew-x-6 transition-transform cursor-pointer"
                style={{
                  transform: `translateX(${mousePos.x * 15}px)`
                }}
              >
                HIMASI
              </span>
              <span 
                className="inline-block bg-persona-light text-black text-xl sm:text-4xl lg:text-6xl px-3 sm:px-4 py-1 sm:py-1.5 mt-2 tracking-normal border-3 sm:border-4 border-black shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] transform -skew-x-6 hover:-skew-x-12 hover:bg-white transition-all cursor-pointer"
                style={{
                  transform: `translateX(${-mousePos.x * 20}px)`
                }}
              >
                UBSI SUKABUMI
              </span>
            </h1>

            {/* Speech Box */}
            <div className="p-elem max-w-xl w-full mx-auto lg:mx-0 transform -skew-x-2">
              <p className="text-white text-xs sm:text-sm lg:text-base font-bold border-3 sm:border-4 border-black bg-black/90 p-3.5 sm:p-5 shadow-[6px_6px_0px_#124D1C] sm:shadow-[8px_8px_0px_#124D1C] leading-relaxed text-center sm:text-left border-l-[8px] sm:border-l-[12px] border-l-persona-light hover:border-l-white transition-all">
                Wadah pergerakan, inovasi teknologi, dan aspirasi utama mahasiswa Sistem Informasi Universitas Bina Sarana Informatika PSHD Sukabumi.
              </p>
            </div>

            {/* Status Badges */}
            <div className="p-elem pt-1 sm:pt-2 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 items-center w-full">
              
              <div className="bg-white border-3 border-black px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 shadow-[4px_4px_0px_#000] transform -skew-x-6 hover:-skew-x-12 hover:-translate-y-1 hover:bg-persona-light transition-all cursor-pointer group">
                <i className="fa-solid fa-shield-halved text-persona group-hover:text-black text-sm sm:text-base transform skew-x-6"></i>
                <div className="text-left font-['Montserrat'] transform skew-x-6">
                  <span className="block text-black font-black text-[8px] sm:text-[9px] uppercase tracking-wider">
                    Status Kabinet
                  </span>
                  <span className="text-black font-black italic text-[11px] sm:text-xs block -mt-0.5">
                    AKTIF & INOVATIF
                  </span>
                </div>
              </div>

              <div className="bg-persona-light border-3 border-black px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 shadow-[4px_4px_0px_#000] transform -skew-x-6 hover:-skew-x-12 hover:-translate-y-1 hover:bg-white transition-all cursor-pointer group">
                <i className="fa-solid fa-code-branch text-black text-sm sm:text-base transform skew-x-6"></i>
                <div className="text-left font-['Montserrat'] transform skew-x-6">
                  <span className="block text-black font-black text-[8px] sm:text-[9px] uppercase tracking-wider">
                    Periode
                  </span>
                  <span className="text-black font-black italic text-[11px] sm:text-xs block -mt-0.5">
                    2026 / 2027
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
});

Section1.displayName = "Section1";
export default Section1;