import React, { forwardRef, useState, useRef } from "react";

interface DepartmentItem {
  icon: string;
  title: string;
  desc: string;
}

const DEPARTMENTS: DepartmentItem[] = [
  { icon: "fa-sitemap", title: "PSDA", desc: "Pengembangan Sumber Daya Anggota — Mengelola potensi, kaderisasi, serta loyalitas internal anggota." },
  { icon: "fa-users-gear", title: "PSDM", desc: "Pengembangan Sumber Daya Manusia — Meningkatkan skill softskill, pelatihan, dan kapasitas pengurus." },
  { icon: "fa-handshake-angle", title: "HUKESMA", desc: "Hubungan & Kesejahteraan Mahasiswa — Menampung aspirasi mahasiswa serta mempererat solidaritas." },
  { icon: "fa-lightbulb", title: "EKRAF", desc: "Ekonomi Kreatif — Wadah kewirausahaan mandiri, merchandise, dan pendanaan kreatif organisasi." },
  { icon: "fa-hands-holding-circle", title: "PM", desc: "Pengabdian Masyarakat — Program aksi sosial nyata dan kontribusi positif teknologi kepada publik." },
  { icon: "fa-photo-film", title: "MNC", desc: "Media, News & Communication — Pengelolaan branding, desain grafis, media sosial, dan dokumentasi." },
];

interface SectionProps {
  isActive: boolean;
  isLeaving: boolean;
  onScroll: () => void;
}

const Section4 = forwardRef<HTMLElement, SectionProps>(({ isActive, isLeaving, onScroll }, ref) => {
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
      id="sec-4"
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
        className="section-content relative z-10 overflow-y-auto max-h-screen flex justify-center" 
        onScroll={onScroll}
      >
        <div className="max-w-6xl w-full z-10 min-h-screen py-10 sm:py-16 px-4 sm:px-6 flex flex-col justify-center">
          
          {/* HEADER SECTION */}
          <div className="space-y-4 mb-8 sm:mb-10 text-center lg:text-left">
            <div className="p-elem inline-flex items-center justify-center lg:justify-start">
              <div className="bg-persona border-3 border-black text-white px-4 py-1.5 font-['Montserrat'] font-black italic tracking-widest text-xs uppercase shadow-[5px_5px_0px_#000] transform -skew-x-12 hover:skew-x-0 hover:bg-white hover:text-black transition-all cursor-pointer">
                <span className="inline-block transform skew-x-12 hover:skew-x-0">
                  CHAPTER 04 // EXECUTIVE UNITS
                </span>
              </div>
            </div>

            <h2 className="p-elem font-['Montserrat'] font-black italic uppercase leading-none select-none">
              <span 
                className="inline-block text-4xl sm:text-6xl lg:text-7xl text-white tracking-tighter drop-shadow-[6px_6px_0px_#000] transform -skew-x-6 mr-3 hover:translate-x-2 transition-transform cursor-pointer"
                style={{ transform: `translateX(${mousePos.x * 15}px)` }}
              >
                DAFTAR
              </span>
              <span 
                className="inline-block bg-persona-light text-black text-2xl sm:text-4xl lg:text-6xl px-4 py-1.5 tracking-normal border-4 border-black shadow-[8px_8px_0px_#000] transform -skew-x-6 hover:-skew-x-12 hover:bg-white transition-all cursor-pointer"
                style={{ transform: `translateX(${-mousePos.x * 20}px)` }}
              >
                DEPARTEMEN
              </span>
            </h2>
          </div>

          {/* FOTO BERSAMA FRAME */}
          <div 
            className="p-elem mb-10 relative group cursor-pointer transition-transform duration-200 ease-out"
            style={{ transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)` }}
          >
            <div className="absolute -inset-3 bg-persona transform -rotate-1 border-3 border-black group-hover:scale-[1.01] transition-all"></div>
            <div className="relative border-4 border-white bg-black p-2 shadow-[12px_12px_0px_#000] overflow-hidden">
              <span className="absolute top-4 left-4 bg-white text-black text-[10px] font-black tracking-tighter px-2.5 py-1 border-2 border-black transform -rotate-3 z-20 shadow-[3px_3px_0px_#000]">
                TEAM PHOTO // 2026-2027
              </span>
              <img
                src="img/fotbar.png"
                alt="Foto Bersama Pengurus HIMASI"
                className="w-full h-48 sm:h-64 object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* DEPARTMENTS GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENTS.map((dept, index) => (
              <div 
                key={index} 
                className="p-elem relative group flex flex-col cursor-pointer transition-transform duration-200 ease-out"
                style={{ transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)` }}
              >
                <div className="absolute -inset-2 bg-persona-light transform -rotate-2 border-3 border-black group-hover:scale-105 group-hover:rotate-2 transition-all duration-300"></div>
                <div className="relative flex-1 bg-black border-4 border-white p-6 shadow-[10px_10px_0px_#000] flex flex-col justify-between transition-all duration-300 group-hover:shadow-[16px_16px_0px_#124D1C]">
                  
                  <div className="absolute top-0 right-0 w-8 h-8 bg-persona border-l-4 border-b-4 border-white z-20 group-hover:w-12 group-hover:h-12 transition-all"></div>

                  <div>
                    <div className="text-3xl text-persona-light mb-3 group-hover:scale-110 group-hover:text-white transition-all transform -skew-x-6 inline-block">
                      <i className={`fa-solid ${dept.icon}`}></i>
                    </div>
                    <h4 className="text-xl font-['Montserrat'] font-black italic uppercase text-white mb-2 tracking-tight transform -skew-x-3 group-hover:translate-x-1 transition-transform">
                      {dept.title}
                    </h4>
                    <p className="text-xs text-gray-300 font-bold leading-relaxed border-t-2 border-zinc-800 pt-3">
                      {dept.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
});

Section4.displayName = "Section4";
export default Section4;