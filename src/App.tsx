import React, { useState, useEffect, useRef, type FormEvent } from "react";
import "./App.css";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import { SlideUnlock } from "./components/SlideUnlock";

type WiperState = "" | "animating" | "exiting";

export default function App(): React.JSX.Element {
  // Loading state
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  // Navigation state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [showNextBtn, setShowNextBtn] = useState<boolean>(false);
  const [showPrevBtn, setShowPrevBtn] = useState<boolean>(false);

  // Wiper state
  const [wiperState, setWiperState] = useState<WiperState>("");
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);

  // Modal State
  const [showRestartModal, setShowRestartModal] = useState<boolean>(false);

  // Custom Cursor Position State
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // 1. Custom Cursor Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest("button, a, input, textarea, select, .cursor-pointer");
        setIsHovered(!!isInteractive);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 2. Loading Screen Logic
  useEffect(() => {
    document.body.classList.add("is-loading");

    const totalDuration = 2000;
    const intervalTime = 30;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setIsFadingOut(true);
            document.body.classList.remove("is-loading");

            setTimeout(() => {
              setIsLoading(false);
            }, 800);
          }, 300);

          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // 3. Navigation State Logic
  const checkScrollState = (): void => {
    setShowPrevBtn(currentIndex > 0);
    setShowNextBtn(currentIndex < 4);
  };

  useEffect(() => {
    checkScrollState();
  }, [currentIndex, isLoading]);

  // 4. Navigation / Transition Logic
  const goToSection = (newIndex: number): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setShowNextBtn(false);
    setShowPrevBtn(false);

    setLeavingIndex(currentIndex);
    setWiperState("animating");

    setTimeout(() => {
      setLeavingIndex(null);
      setCurrentIndex(newIndex);

      const newSection = sectionRefs.current[newIndex];
      if (newSection) {
        const newContent = newSection.querySelector<HTMLElement>(".section-content");
        if (newContent) newContent.scrollTop = 0;
      }
    }, 350);

    setTimeout(() => {
      setWiperState("exiting");
    }, 450);

    setTimeout(() => {
      setWiperState("");
      setIsTransitioning(false);
    }, 800);
  };

  const handleNextClick = (): void => {
    if (currentIndex === 4) {
      setShowRestartModal(true);
      return;
    }
    const nextIndex = (currentIndex + 1) % 5;
    goToSection(nextIndex);
  };

  const handlePrevClick = (): void => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      goToSection(prevIndex);
    }
  };

  const confirmRestart = (): void => {
    setShowRestartModal(false);
    goToSection(0);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Pesan Terkirim!");
  };

  return (
    <>
      {/* CUSTOM CURSOR */}
      <div
        className={`custom-cursor-dot ${isHovered ? "hover" : ""}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <div
        className={`custom-cursor-trail ${isHovered ? "hover" : ""}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* INITIAL LOADER SCREEN */}
      {isLoading && (
        <div
          id="persona-loader"
          className={`fixed inset-0 z-[99999] bg-persona-dark flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none ${
            isFadingOut ? "fade-out" : ""
          }`}
          style={{ backgroundImage: 'url("img/background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-persona-dark/95 pointer-events-none z-0"></div>
          <div className="absolute inset-0 bg-scanline pointer-events-none z-0 opacity-40"></div>

          <div className="absolute -top-12 -right-12 w-[140%] h-44 bg-persona/40 transform -rotate-12 pointer-events-none z-0"></div>
          <div className="absolute -bottom-16 -left-12 w-[140%] h-52 bg-persona-light/20 transform -rotate-6 pointer-events-none z-0"></div>
          <div className="absolute top-1/3 left-0 w-full h-24 bg-black/60 transform rotate-3 border-y-2 border-persona/30 pointer-events-none z-0"></div>

          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-persona border-2 border-black px-3 py-1 transform -skew-x-12 shadow-[3px_3px_0px_#000]">
                <span className="w-2 h-2 bg-white rounded-full inline-block animate-ping mr-2"></span>
                <span className="font-['Montserrat'] font-black italic text-[11px] tracking-widest text-white uppercase transform skew-x-12 inline-block">
                  SYSTEM INITIALIZING
                </span>
              </div>
            </div>

            <div className="bg-black border-2 border-white px-3 py-1 transform skew-x-12 shadow-[3px_3px_0px_#000]">
              <span className="font-['Montserrat'] font-black italic text-[10px] tracking-widest text-persona-light uppercase transform -skew-x-12 inline-block">
                SYS.VER 2026 // INTRO
              </span>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <div className="relative mb-6 transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="absolute -inset-2 bg-persona-light transform rotate-3 border-2 border-black"></div>
              <div className="relative bg-black border-4 border-white px-6 py-2 shadow-[8px_8px_0px_#000]">
                <h1 className="font-['Montserrat'] font-black italic text-3xl sm:text-6xl tracking-tighter text-white uppercase transform -skew-x-6">
                  HI<span className="text-persona-light drop-shadow-[4px_4px_0px_#000]">MASI</span>
                </h1>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <span className="absolute text-7xl sm:text-9xl font-['Montserrat'] font-black italic text-persona/40 tracking-tighter transform translate-x-2 translate-y-2 blur-[1px]">
                {Math.floor(loadingProgress)}%
              </span>

              <div className="relative flex items-baseline font-['Montserrat'] font-black italic text-7xl sm:text-9xl text-white tracking-tighter drop-shadow-[8px_8px_0px_#000]">
                <span className="transform -skew-x-6">{Math.floor(loadingProgress)}</span>
                <span className="text-3xl sm:text-5xl text-persona-light ml-2 transform -skew-x-12 border-b-4 border-persona-light pb-1">
                  %
                </span>
              </div>
            </div>

            <div className="mt-6 bg-persona border-2 border-white px-4 py-1 shadow-[4px_4px_0px_#000] transform skew-x-12">
              <span className="font-['Montserrat'] font-black italic text-xs text-white uppercase tracking-widest block transform -skew-x-12">
                TAKE YOUR TIME // HIMASI UBSI SUKABUMI
              </span>
            </div>
          </div>

          <div className="relative z-10 w-full space-y-3">
            <div className="flex justify-between items-center text-[11px] font-['Montserrat'] font-black italic tracking-widest uppercase">
              <span className="bg-black text-white px-3 py-1 border-2 border-white transform -skew-x-6 shadow-[3px_3px_0px_#000]">
                <i className="fa-solid fa-spinner animate-spin mr-2 text-persona-light"></i>
                LOADING ASSETS...
              </span>
              <span className="bg-persona-light text-black px-3 py-1 border-2 border-black transform skew-x-6 shadow-[3px_3px_0px_#000] animate-pulse">
                PLEASE WAIT
              </span>
            </div>

            <div className="w-full h-4 bg-black border-3 border-white p-0.5 shadow-[6px_6px_0px_#000] transform -skew-x-12 overflow-hidden">
              <div
                className="h-full bg-persona-light border-r-4 border-white transition-all duration-75 ease-out shadow-[0_0_12px_#39FF14]"
                style={{ width: `${Math.floor(loadingProgress)}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* TRANSITION OVERLAY */}
      <div id="persona-wiper" className={`wiper-container pointer-events-none ${wiperState}`}>
        <div className="wiper-strip strip-1"></div>
        <div className="wiper-strip strip-2"></div>
        <div className="wiper-strip strip-3"></div>
        <div className="wiper-logo">
          <span className="inline-block transform -skew-x-12 border-b-4 border-persona-light pb-1">
            HIMASI
          </span>
        </div>
      </div>

      {/* MAIN VIEWPORT */}
      <main id="main-viewport" className="w-screen h-screen relative overflow-hidden">
        <Section1
          ref={(el) => { sectionRefs.current[0] = el; }}
          isActive={currentIndex === 0}
          isLeaving={leavingIndex === 0}
          onScroll={checkScrollState}
        />
        <Section2
          ref={(el) => { sectionRefs.current[1] = el; }}
          isActive={currentIndex === 1}
          isLeaving={leavingIndex === 1}
          onScroll={checkScrollState}
        />
        <Section3
          ref={(el) => { sectionRefs.current[2] = el; }}
          isActive={currentIndex === 2}
          isLeaving={leavingIndex === 2}
          onScroll={checkScrollState}
        />
        <Section4
          ref={(el) => { sectionRefs.current[3] = el; }}
          isActive={currentIndex === 3}
          isLeaving={leavingIndex === 3}
          onScroll={checkScrollState}
        />
        <Section5
          ref={(el) => { sectionRefs.current[4] = el; }}
          isActive={currentIndex === 4}
          isLeaving={leavingIndex === 4}
          onScroll={checkScrollState}
          onSubmit={handleFormSubmit}
        />
      </main>

      {/* FLOATING CONTROLS (TOMBOL KEMBALI & SLIDE TO NEXT / RESTART) */}
      <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 px-4 sm:px-8 flex items-center justify-between pointer-events-none">
        
        {/* TOMBOL KEMBALI */}
        <div className="pointer-events-auto">
          {showPrevBtn && (
            <button
              id="prev-btn"
              className="group relative flex items-center gap-2 bg-black text-white border-3 border-white px-3 sm:px-5 py-2.5 sm:py-3 shadow-[5px_5px_0px_#000] transform -skew-x-12 hover:skew-x-0 hover:bg-white hover:text-black transition-all cursor-pointer active:translate-y-1"
              onClick={handlePrevClick}
            >
              <i className="fa-solid fa-chevron-left text-sm sm:text-lg transform skew-x-12 group-hover:skew-x-0 transition-transform"></i>
              <span className="font-['Montserrat'] font-black italic text-[10px] sm:text-xs uppercase tracking-wider transform skew-x-12 group-hover:skew-x-0 transition-transform">
                KEMBALI
              </span>
            </button>
          )}
        </div>

        {/* SLIDE UNLOCK / TOMBOL KEMBALI KE AWAL (SECTION TERAKHIR) */}
        <div className="pointer-events-auto ml-auto">
          {currentIndex === 4 ? (
            <button
              onClick={() => setShowRestartModal(true)}
              className="group relative flex items-center gap-2 bg-persona text-white border-3 border-black px-4 sm:px-6 py-2.5 sm:py-3 shadow-[6px_6px_0px_#000] transform -skew-x-12 hover:skew-x-0 hover:bg-persona-light hover:text-black transition-all cursor-pointer active:translate-y-1"
            >
              <span className="font-['Montserrat'] font-black italic text-xs sm:text-sm uppercase tracking-wider transform skew-x-12 group-hover:skew-x-0 transition-transform">
                KEMBALI KE AWAL // RESTART
              </span>
              <i className="fa-solid fa-rotate-right text-sm sm:text-lg transform skew-x-12 group-hover:skew-x-0 transition-transform"></i>
            </button>
          ) : (
            showNextBtn && (
              <SlideUnlock onSuccess={handleNextClick} text="GESER LANJUT >>" />
            )
          )}
        </div>
      </div>

      {/* RESTART CONFIRMATION MODAL */}
      {showRestartModal && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none animate-fadeIn">
          <div className="relative w-full max-w-md transform -rotate-2 hover:rotate-0 transition-transform">
            {/* Backdrop Layer */}
            <div className="absolute -inset-3 bg-persona-light transform rotate-3 border-4 border-black"></div>
            
            {/* Main Modal Card */}
            <div className="relative bg-black border-4 border-white p-6 sm:p-8 shadow-[12px_12px_0px_#000]">
              <div className="absolute -top-5 -left-5 bg-persona text-white font-['Montserrat'] font-black italic px-4 py-1.5 border-3 border-black text-xs uppercase transform -rotate-6 shadow-[4px_4px_0px_#000]">
                SYSTEM CONFIRMATION
              </div>

              <div className="mt-4 text-center space-y-4">
                <h3 className="font-['Montserrat'] font-black italic text-2xl sm:text-3xl text-white uppercase tracking-tight transform -skew-x-6">
                  KEMBALI KE <span className="text-persona-light">AWAL?</span>
                </h3>
                <p className="text-gray-300 font-medium text-xs sm:text-sm leading-relaxed border-y-2 border-zinc-800 py-3">
                  Apakah Anda yakin ingin mengulang penjelajahan dari awal Chapter 01?
                </p>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <button
                  onClick={() => setShowRestartModal(false)}
                  className="bg-zinc-800 text-white border-2 border-white px-5 py-2 font-['Montserrat'] font-black italic text-xs uppercase transform -skew-x-12 hover:bg-white hover:text-black hover:skew-x-0 transition-all cursor-pointer shadow-[4px_4px_0px_#000]"
                >
                  BATAL
                </button>
                <button
                  onClick={confirmRestart}
                  className="bg-persona text-white border-2 border-black px-6 py-2 font-['Montserrat'] font-black italic text-xs uppercase transform -skew-x-12 hover:bg-persona-light hover:text-black hover:skew-x-0 transition-all cursor-pointer shadow-[4px_4px_0px_#000]"
                >
                  YA, KEMBALI!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}