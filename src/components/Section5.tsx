import React, { forwardRef, useState, useRef, type FormEvent } from "react";

interface SectionProps {
  isActive: boolean;
  isLeaving: boolean;
  onScroll: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Section5 = forwardRef<HTMLElement, SectionProps>(
  ({ isActive, isLeaving, onScroll, onSubmit }, ref) => {
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
        id="sec-5"
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

        {/* 1. Ubah max-h-screen & flex justify-center menjadi h-full w-full block */}
        <div
          ref={containerRef}
          className="section-content relative z-10 overflow-y-auto h-full w-full block"
          onScroll={onScroll}
        >
          {/* 2. Ganti min-h-screen & flex justify-center dengan mx-auto dan pb-40 */}
          <div className="max-w-5xl w-full mx-auto z-10 pt-10 sm:pt-16 px-4 sm:px-6 flex flex-col justify-start lg:justify-center">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* LEFT CONTACT INFO */}
              <div className="lg:col-span-6 p-elem space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center justify-center lg:justify-start">
                  <div className="bg-persona border-3 border-black text-white px-4 py-1.5 font-['Montserrat'] font-black italic tracking-widest text-xs uppercase shadow-[5px_5px_0px_#000] transform -skew-x-12 hover:skew-x-0 hover:bg-white hover:text-black transition-all cursor-pointer">
                    <span className="inline-block transform skew-x-12 hover:skew-x-0">
                      CHAPTER 05 // GET IN TOUCH
                    </span>
                  </div>
                </div>

                <h2 className="font-['Montserrat'] font-black italic uppercase leading-none select-none">
                  <span
                    className="inline-block text-4xl sm:text-6xl text-white tracking-tighter drop-shadow-[6px_6px_0px_#000] transform -skew-x-6 mr-3 hover:translate-x-2 transition-transform cursor-pointer"
                    style={{ transform: `translateX(${mousePos.x * 15}px)` }}
                  >
                    HUBUNGI
                  </span>
                  <span
                    className="inline-block bg-persona-light text-black text-2xl sm:text-4xl px-4 py-1.5 tracking-normal border-4 border-black shadow-[8px_8px_0px_#000] transform -skew-x-6 hover:-skew-x-12 hover:bg-white transition-all cursor-pointer"
                    style={{ transform: `translateX(${-mousePos.x * 20}px)` }}
                  >
                    KAMI
                  </span>
                </h2>

                <p className="text-gray-300 text-xs sm:text-sm font-bold border-l-4 border-persona-light pl-4 leading-relaxed text-left">
                  Punya pertanyaan atau ajakan kolaborasi? Mari berdiskusi
                  bersama kami.
                </p>

                <div className="space-y-4 font-bold text-xs sm:text-sm">
                  <div className="flex items-center gap-4 bg-black p-4 border-3 border-white shadow-[6px_6px_0px_#000] transform -skew-x-3 hover:skew-x-0 transition-all cursor-pointer group">
                    <i className="fa-solid fa-location-dot text-persona-light group-hover:text-white text-xl transform skew-x-3"></i>
                    <span className="text-white transform skew-x-3">
                      Kampus UBSI Sukabumi, Jl. Cemerlang No.8
                    </span>
                  </div>

                  <div className="flex items-center gap-4 bg-black p-4 border-3 border-white shadow-[6px_6px_0px_#000] transform -skew-x-3 hover:skew-x-0 transition-all cursor-pointer group">
                    <i className="fa-solid fa-envelope text-persona-light group-hover:text-white text-xl transform skew-x-3"></i>
                    <span className="text-white transform skew-x-3">
                      himasi.sukabumi@bsi.ac.id
                    </span>
                  </div>

                  <div className="flex items-center gap-4 bg-black p-4 border-3 border-white shadow-[6px_6px_0px_#000] transform -skew-x-3 hover:skew-x-0 transition-all cursor-pointer group">
                    <i className="fa-brands fa-instagram text-persona-light group-hover:text-white text-xl transform skew-x-3"></i>
                    <span className="text-white transform skew-x-3">
                      @himasi_official
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT FORM CONTAINER */}
              <div
                className="lg:col-span-6 mb-28 lg:mb-0 p-elem relative group flex flex-col cursor-pointer transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateY(${mousePos.x * 15}deg) rotateX(${-mousePos.y * 15}deg)`,
                }}
              >
                <div className="absolute -inset-3 bg-persona-light transform rotate-3 border-3 border-black group-hover:scale-105 group-hover:rotate-6 transition-all duration-300"></div>
                <div className="absolute -inset-1.5 bg-white transform -rotate-2 border-3 border-black group-hover:-rotate-4 transition-all duration-300"></div>

                <div className="relative flex-1 bg-persona border-4 border-white p-6 sm:p-8 shadow-[14px_14px_0px_#000] transition-all duration-300 group-hover:shadow-[20px_20px_0px_#124D1C]">
                  <div className="absolute top-0 right-0 w-10 h-10 bg-black border-l-4 border-b-4 border-white z-20 group-hover:w-14 group-hover:h-14 transition-all"></div>

                  <form className="space-y-4" onSubmit={onSubmit}>
                    <div>
                      <label className="block text-xs font-['Montserrat'] font-black uppercase text-white mb-1.5 tracking-wider">
                        NAMA LENGKAP
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 bg-black border-3 border-white text-white font-bold text-xs sm:text-sm focus:outline-none focus:border-persona-light shadow-[4px_4px_0px_#000] transform -skew-x-3 focus:skew-x-0 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-['Montserrat'] font-black uppercase text-white mb-1.5 tracking-wider">
                        EMAIL / WA
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 bg-black border-3 border-white text-white font-bold text-xs sm:text-sm focus:outline-none focus:border-persona-light shadow-[4px_4px_0px_#000] transform -skew-x-3 focus:skew-x-0 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-['Montserrat'] font-black uppercase text-white mb-1.5 tracking-wider">
                        PESAN
                      </label>
                      <textarea
                        rows={3}
                        className="w-full p-3 bg-black border-3 border-white text-white font-bold text-xs sm:text-sm focus:outline-none focus:border-persona-light shadow-[4px_4px_0px_#000] transform -skew-x-3 focus:skew-x-0 transition-all"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-white text-black font-['Montserrat'] font-black italic text-sm sm:text-base uppercase hover:bg-persona-light hover:text-white transition-all shadow-[6px_6px_0px_#000] border-3 border-black transform -skew-x-6 hover:skew-x-0 active:translate-y-1 cursor-pointer"
                    >
                      KIRIM PESAN{" "}
                      <i className="fa-solid fa-paper-plane ml-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

Section5.displayName = "Section5";
export default Section5;
