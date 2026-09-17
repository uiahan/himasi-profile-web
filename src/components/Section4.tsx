import React, { forwardRef, useState, useRef } from "react";

export interface MemberItem {
  name: string;
  role: string;
  img: string;
}

export interface DepartmentItem {
  id: string;
  logo: string;
  title: string;
  desc: string;
  members: MemberItem[];
}

// Data Departemen & Anggotanya berdasarkan daftar nama file
const DEPARTMENTS: DepartmentItem[] = [
  {
    id: "HUKESMA",
    logo: "img/hukesma.jpeg",
    title: "HUKESMA",
    desc: "Departemen Hubungan Kesejahteraan Mahasiswa (HUKESMA) merupakan departemen dalam Himpunan Mahasiswa Sistem Informasi (HIMASI) yang berperan sebagai penghubung antara mahasiswa, organisasi, dan pihak eksternal.",
    members: [
      { name: "Fauzan", role: "Anggota HUKESMA", img: "img/fauzan-hukesma.png" },
      { name: "Hummaira", role: "Anggota HUKESMA", img: "img/hummaira-hukesma.png" },
      { name: "Resi", role: "Anggota HUKESMA", img: "img/resi-hukesma.png" },
      { name: "Reva", role: "Anggota HUKESMA", img: "img/reva-hukesma.png" },
      { name: "Anisa", role: "Anggota HUKESMA", img: "img/anisa-hukesma.png" },
    ],
  },
  {
    id: "EKRAF",
    logo: "img/LOGO-EKRAF.jpg",
    title: "EKRAF",
    desc: "Departemen Ekonomi Kreatif (EKRAF) berfokus pada pengembangan jiwa kewirausahaan, pendanaan mandiri organisasi, dan inovasi bisnis kreatif.",
    members: [
      { name: "Hilma", role: "Anggota EKRAF", img: "img/hilma-ekraf.png" },
      { name: "Afriza", role: "Anggota EKRAF", img: "img/afriza-ekraf.png" },
      { name: "Daud", role: "Anggota EKRAF", img: "img/daud-ekraf.png" },
    ],
  },
  {
    id: "PM",
    logo: "img/LOGO-PM-NO-BG.png",
    title: "PM",
    desc: "Menjadikan Departemen Pengabdian Masyarakat HIMASI sebagai motor penggerak pengabdian yang inklusif, berkelanjutan, dan berdampak nyata.",
    members: [
      { name: "Devina", role: "Anggota PM", img: "img/devina-pm.png" },
      { name: "Ghifran", role: "Anggota PM", img: "img/ghifran-pm.png" },
      { name: "Ludra", role: "Anggota PM", img: "img/ludra-pm.png" },
      { name: "Marlinda", role: "Anggota PM", img: "img/marlinda-pm.png" },
      { name: "Nabila", role: "Anggota PM", img: "img/nabila-pm.png" },
      { name: "Aksal", role: "Anggota PM", img: "img/aksal-pm.png" },
    ],
  },
  {
    id: "PSDA",
    logo: "img/logo-PSDA-(2).png",
    title: "PSDA",
    desc: "Departemen Pemberdayaan Sumber Daya Akademik (PSDA) merupakan elemen strategis dalam HIMASI yang berperan sebagai fasilitator pengembangan potensi akademik.",
    members: [
      { name: "Raffi", role: "Anggota PSDA", img: "img/raffi-psda.png" },
      { name: "Shinta", role: "Anggota PSDA", img: "img/shinta-psda.png" },
      { name: "Farhan", role: "Anggota PSDA", img: "img/farhan-psda.jpg" },
      { name: "Danesya", role: "Anggota PSDA", img: "img/danesya-psda.png" },
    ],
  },
  {
    id: "PSDM",
    logo: "img/logo-PSDM.png",
    title: "PSDM",
    desc: "Departemen Pemberdayaan Sumber Daya Mahasiswa (PSDM) memiliki peran penting dalam membina dan mengembangkan kualitas mahasiswa Sistem Informasi.",
    members: [
      { name: "Haykal", role: "Anggota PSDM", img: "img/haykal-psdm.png" },
      { name: "Satura", role: "Anggota PSDM", img: "img/satura-psdm.png" },
      { name: "Vanesh", role: "Anggota PSDM", img: "img/vanesh-psdm.png" },
      { name: "Vina", role: "Anggota PSDM", img: "img/vina-psdm.png" },
      { name: "Arya", role: "Anggota PSDM", img: "img/arya-psdm.png" },
      { name: "Aurin", role: "Anggota PSDM", img: "img/aurin-psdm.png" },
    ],
  },
  {
    id: "MNC",
    logo: "img/LOGO-MNC.PNG",
    title: "MNC",
    desc: "Departemen Media & Creative HIMASI sebagai pusat kreativitas inovatif dan profesional dalam membangun identitas visual serta komunikasi digital.",
    members: [
      { name: "Nabilla", role: "Anggota MNC", img: "img/nabilla-mnc.png" },
      { name: "Padlan", role: "Anggota MNC", img: "img/padlan-mnc.png" },
      { name: "Ananda", role: "Anggota MNC", img: "img/ananda-mnc.png" },
      { name: "Deasy", role: "Anggota MNC", img: "img/deasy-mnc.png" },
    ],
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
    const [selectedDept, setSelectedDept] = useState<DepartmentItem | null>(null);
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
                  onClick={() => setSelectedDept(dept)}
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

                    <div className="mt-4 pt-3 border-t-2 border-dashed border-zinc-700 flex justify-between items-center text-xs text-persona-light font-black italic">
                      <span>KLIK DISINI</span>
                      <span className="bg-persona text-white px-2 py-0.5 border border-black transform -skew-x-6">
                        {dept.members.length} MEMBERS
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MODAL POPUP ANGGOTA DEPARTEMEN */}
        {selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-4xl bg-black border-4 border-white p-6 sm:p-8 shadow-[20px_20px_0px_#124D1C] max-h-[85vh] flex flex-col overflow-hidden">
              
              {/* TOMBOL CLOSE */}
              <button
                onClick={() => setSelectedDept(null)}
                className="absolute top-4 right-4 bg-persona text-white font-black px-4 py-2 border-3 border-black hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_#000] transform -skew-x-6 z-30"
              >
                ✕ CLOSE
              </button>

              {/* HEADER MODAL */}
              <div className="mb-6 flex items-center gap-4 border-b-4 border-white pb-4">
                <img
                  src={selectedDept.logo}
                  alt={selectedDept.title}
                  className="w-16 h-16 object-contain border-2 border-white bg-white/10 p-1"
                />
                <div>
                  <span className="bg-persona-light text-black text-xs font-black italic px-2 py-0.5 border border-black transform -skew-x-6 inline-block mb-1">
                    DEPARTMENT MEMBERS
                  </span>
                  <h3 className="text-3xl font-['Montserrat'] font-black italic uppercase text-white tracking-wider">
                    {selectedDept.title}
                  </h3>
                </div>
              </div>

              {/* GRID MEMBER / ANGGOTA */}
              <div className="overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2">
                {selectedDept.members.map((member, i) => (
                  <div
                    key={i}
                    className="relative bg-zinc-900 border-2 border-white p-3 shadow-[6px_6px_0px_#000] hover:scale-105 transition-all group"
                  >
                    <div className="w-full h-40 bg-black border border-zinc-700 overflow-hidden mb-2 relative flex items-center justify-center">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-top object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-persona/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h5 className="font-['Montserrat'] font-black italic text-white text-sm uppercase truncate">
                      {member.name}
                    </h5>
                    <span className="text-[10px] text-gray-400 block font-bold truncate">
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
);

Section4.displayName = "Section4";
export default Section4;