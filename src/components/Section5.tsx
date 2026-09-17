import React, { forwardRef, useState, useRef } from "react";

interface SectionProps {
  isActive: boolean;
  isLeaving: boolean;
  onScroll: () => void;
}

const Section5 = forwardRef<HTMLElement, SectionProps>(
  ({ isActive, isLeaving, onScroll }, ref) => {
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

        <div
          ref={containerRef}
          className="section-content relative z-10 overflow-y-auto h-full w-full block"
          onScroll={onScroll}
        >
          <div className="max-w-5xl w-full mx-auto z-10 pt-10 sm:pt-16 px-4 sm:px-6 flex flex-col justify-start lg:justify-center">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* LEFT CONTACT INFO */}
              <div className="lg:col-span-5 p-elem space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center justify-center lg:justify-start">
                  <div className="bg-persona border-3 border-black text-white px-4 py-1.5 font-['Montserrat'] font-black italic tracking-widest text-xs uppercase shadow-[5px_5px_0px_#000] transform -skew-x-12 hover:skew-x-0 hover:bg-white hover:text-black transition-all cursor-pointer">
                    <span className="inline-block transform skew-x-12 hover:skew-x-0">
                      CHAPTER 05 // LOCATION & CONTACT
                    </span>
                  </div>
                </div>

                <h2 className="font-['Montserrat'] font-black italic uppercase leading-none select-none">
                  <span
                    className="inline-block text-4xl sm:text-6xl text-white tracking-tighter drop-shadow-[6px_6px_0px_#000] transform -skew-x-6 mr-3 hover:translate-x-2 transition-transform cursor-pointer"
                    style={{ transform: `translateX(${mousePos.x * 15}px)` }}
                  >
                    KUNJUNGI
                  </span>
                  <span
                    className="inline-block bg-persona-light text-black text-2xl sm:text-4xl px-4 py-1.5 tracking-normal border-4 border-black shadow-[8px_8px_0px_#000] transform -skew-x-6 hover:-skew-x-12 hover:bg-white transition-all cursor-pointer"
                    style={{ transform: `translateX(${-mousePos.x * 20}px)` }}
                  >
                    KAMI
                  </span>
                </h2>

                <p className="text-gray-300 text-xs sm:text-sm font-bold border-l-4 border-persona-light pl-4 leading-relaxed text-left">
                  Temukan lokasi sekretariat kami atau kunjungi media sosial resmi HIMASI UBSI Sukabumi.
                </p>

                <div className="space-y-4 font-bold text-xs sm:text-sm">
                  {/* ALAMAT */}
                  <a
                    href="https://maps.google.com/?q=Universitas+Bina+Sarana+Informatika+Sukabumi+Kampus+B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 bg-black p-4 border-3 border-white shadow-[6px_6px_0px_#000] transform -skew-x-3 hover:skew-x-0 hover:border-persona-light transition-all cursor-pointer group block"
                  >
                    <i className="fa-solid fa-location-dot text-persona-light group-hover:text-white text-xl transform skew-x-3 mt-0.5"></i>
                    <span className="text-white transform skew-x-3 text-left leading-tight">
                      Jl. Veteran II No.20A, Selabatu, Kec. Cikole, Kota Sukabumi, Jawa Barat 43114
                    </span>
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href="https://www.instagram.com/himasiubsismi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-black p-4 border-3 border-white shadow-[6px_6px_0px_#000] transform -skew-x-3 hover:skew-x-0 hover:border-persona-light transition-all cursor-pointer group block"
                  >
                    <i className="fa-brands fa-instagram text-persona-light group-hover:text-white text-xl transform skew-x-3"></i>
                    <span className="text-white transform skew-x-3">
                      @himasiubsismi
                    </span>
                  </a>
                </div>
              </div>

              {/* RIGHT GOOGLE MAPS DISPLAY */}
              <div
                className="lg:col-span-7 mb-28 lg:mb-0 p-elem relative group flex flex-col transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateY(${mousePos.x * 15}deg) rotateX(${-mousePos.y * 15}deg)`,
                }}
              >
                <div className="absolute -inset-3 bg-persona-light transform rotate-3 border-3 border-black group-hover:scale-105 group-hover:rotate-6 transition-all duration-300"></div>
                <div className="absolute -inset-1.5 bg-white transform -rotate-2 border-3 border-black group-hover:-rotate-4 transition-all duration-300"></div>

                <div className="relative flex-1 bg-persona border-4 border-white p-3 sm:p-4 shadow-[14px_14px_0px_#000] transition-all duration-300 group-hover:shadow-[20px_20px_0px_#124D1C]">
                  <div className="absolute top-0 right-0 w-10 h-10 bg-black border-l-4 border-b-4 border-white z-20 group-hover:w-14 group-hover:h-14 transition-all"></div>

                  <div className="w-full h-[320px] sm:h-[400px] border-2 border-black overflow-hidden relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.770183983027!2d106.9237200754991!3d-6.918055667711561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6848319093db3b%3A0x17d86109364c37cc!2sUniversitas%20Bina%20Sarana%20Informatika%20Sukabumi%20Kampus%20B!5e0!3m2!1sid!2sus!4v1789631339335!5m2!1sid!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Lokasi UBSI Sukabumi Kampus B"
                      className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    ></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
);

Section5.displayName = "Section5";
export default Section5;