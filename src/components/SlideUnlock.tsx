import React, { useState, useRef, useEffect } from "react";

interface SlideUnlockProps {
  onSuccess: () => void;
  text?: string;
}

export const SlideUnlock: React.FC<SlideUnlockProps> = ({
  onSuccess,
  text = "GESER UNTUK LANJUT >>",
}) => {
  const [dragX, setDragX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);

  const getContainerWidth = () => {
    if (!sliderRef.current) return 200;
    return sliderRef.current.clientWidth - 56; // 56px = lebar knob
  };

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    startXRef.current = clientX - dragX;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const maxDrag = getContainerWidth();
    let newX = clientX - startXRef.current;
    if (newX < 0) newX = 0;
    if (newX > maxDrag) newX = maxDrag;
    setDragX(newX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const maxDrag = getContainerWidth();
    if (dragX >= maxDrag * 0.85) {
      setDragX(maxDrag);
      onSuccess();
      setTimeout(() => setDragX(0), 600);
    } else {
      setDragX(0); // Snap back jika belum full
    }
  };

  // Event Listener Mouse & Touch
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onTouchEnd = () => handleEnd();

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging, dragX]);

  return (
    <div
      ref={sliderRef}
      className="relative w-full max-w-xs sm:max-w-sm h-14 bg-black border-3 border-white shadow-[6px_6px_0px_#000] transform -skew-x-12 overflow-hidden select-none flex items-center p-1"
    >
      {/* Background Fill saat ditarik */}
      <div
        className="absolute left-0 top-0 bottom-0 bg-persona-light/80 transition-all duration-75"
        style={{ width: `${dragX + 28}px` }}
      />

      {/* Label Text */}
      <span className="w-full text-center font-['Montserrat'] font-black italic text-xs tracking-widest text-white uppercase transform skew-x-12 z-0 pointer-events-none opacity-80 animate-pulse">
        {text}
      </span>

      {/* Slider Knob */}
      <div
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{ transform: `translateX(${dragX}px)` }}
        className={`absolute left-1 top-1 bottom-1 w-12 bg-persona text-white border-2 border-black flex items-center justify-center cursor-grab active:cursor-grabbing z-10 transition-transform ${
          !isDragging ? "duration-200" : "duration-0"
        } shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black`}
      >
        <i className="fa-solid fa-angles-right text-base transform skew-x-12"></i>
      </div>
    </div>
  );
};