import React, { forwardRef, useState, useRef } from "react";

interface DepartmentItem {
  logo: string;
  title: string;
  desc: string;
}

const DEPARTMENTS: DepartmentItem[] = [
  {
    logo: "img/hukesma.jpeg",
    title: "HUKESMA",
    desc: "Departemen Hubungan Kesejahteraan Mahasiswa (HUKESMA) merupakan departemen dalam Himpunan Mahasiswa Sistem Informasi (HIMASI) yang berperan sebagai penghubung antara mahasiswa, organisasi, dan pihak eksternal. HUKESMA berfokus pada pengelolaan relasi, penyampaian informasi, serta penampungan aspirasi mahasiswa guna mendukung kesejahteraan mahasiswa baik dalam aspek akademik maupun non-akademik.",
  },
  {
    logo: "img/LOGO-EKRAF.jpg",
    title: "EKRAF",
    desc: "Departemen Ekonomi Kreatif (EKRAF) berfokus pada pengembangan jiwa kewirausahaan, pendanaan mandiri organisasi, dan inovasi bisnis kreatif. EKRAF hadir sebagai wadah eksplorasi potensi ekonomi mahasiswa melalui pengelolaan merchandise, kemitraan strategis, serta program kemandirian finansial HIMASI.",
  },
  {
    logo: "img/LOGO-PM-NO-BG.png",
    title: "PM",
    desc: "Menjadikan Departemen Pengabdian Masyarakat HIMASI sebagai motor penggerak pengabdian yang inklusif, berkelanjutan, dan berdampak nyata melalui pemberdayaan komunitas, pelestarian lingkungan, serta kolaborasi strategis yang mendukung citra positif dan keberlanjutan organisasi.",
  },
  {
    logo: "img/logo-PSDA-(2).png",
    title: "PSDA",
    desc: "Departemen Pemberdayaan Sumber Daya Akademik (PSDA) merupakan elemen strategis dalam HIMASI yang berperan sebagai fasilitator pengembangan potensi akademik. PSDA berfokus pada peningkatan kompetensi serta penguatan soft skill mahasiswa Sistem Informasi.",
  },
  {
    logo: "img/logo-PSDM.png",
    title: "PSDM",
    desc: "Departemen Pemberdayaan Sumber Daya Mahasiswa (PSDM) merupakan salah satu pilar utama dalam struktur organisasi Himpunan Mahasiswa Sistem Informasi (HIMASI). Departemen ini memiliki peran penting dalam membina dan mengembangkan kualitas mahasiswa Sistem Informasi, baik dari sisi kemampuan intelektual, karakter, maupun kesiapan mereka dalam berorganisasi. Fokus utama PSDM adalah menciptakan lingkungan pengembangan diri yang terarah melalui berbagai program yang mendorong mahasiswa menjadi pribadi yang kompeten, adaptif, dan berintegritas.",
  },
  {
    logo: "img/LOGO-MNC.PNG",
    title: "MNC",
    desc: "Departemen Media & Creative HIMASI sebagai pusat kreativitas inovatif dan profesional dalam membangun identitas visual serta komunikasi digital yang inspiratif, mendukung citra positif dan keberlanjutan organisasi.",
  },
];

interface SectionProps {
  isActive: boolean;
  isLeaving: boolean;
  onScroll: () => void;
}

const Section4 = forwardRef<HTMLElement, SectionProps>(
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
          className="section-content relative z-10 overflow-y-auto h-full w-full block"
          onScroll={onScroll}
        >
          <div className="max-w-6xl w-full mx-auto z-10 pt-12 sm:pt-16 pb-40 sm:pb-52 px-4 sm:px-6 flex flex-col justify-start">
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
              style={{
                transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
              }}
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
            <div className="grid pb-28 lg:pb-20 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEPARTMENTS.map((dept, index) => (
                <div
                  key={index}
                  className="p-elem relative group flex flex-col cursor-pointer transition-transform duration-200 ease-out"
                  style={{
                    transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
                  }}
                >
                  <div className="absolute -inset-2 bg-persona-light transform -rotate-2 border-3 border-black group-hover:scale-105 group-hover:rotate-2 transition-all duration-300"></div>
                  <div className="relative flex-1 bg-black border-4 border-white p-6 shadow-[10px_10px_0px_#000] flex flex-col justify-between transition-all duration-300 group-hover:shadow-[16px_16px_0px_#124D1C]">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-persona border-l-4 border-b-4 border-white z-20 group-hover:w-12 group-hover:h-12 transition-all"></div>

                    <div>
                      <div className="flex items-center justify-center">
                      <div className="w-52 h-52 mb-4 overflow-hidden rounded border-2 border-white/20 bg-white/5 p-1 group-hover:scale-110 group-hover:border-white transition-all transform -skew-x-6 flex items-center justify-center">
                        <img
                          src={dept.logo}
                          alt={`Logo ${dept.title}`}
                          className="max-w-full max-h-full object-contain filter drop-shadow"
                        />
                      </div>
                      </div>
                      <h4 className="text-xl font-['Montserrat'] font-black italic uppercase text-white mb-2 tracking-tight transform -skew-x-3 group-hover:translate-x-1 transition-transform text-center">
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
  },
);

Section4.displayName = "Section4";
export default Section4;
