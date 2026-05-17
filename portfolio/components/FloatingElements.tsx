'use client';

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-red-400 rounded-full animate-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-amber-400 rounded-full animate-float-delayed opacity-20"></div>
      <div className="absolute top-60 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-float-slow opacity-20"></div>
      <div className="absolute top-80 right-1/3 w-5 h-5 bg-red-300 rounded-full animate-float opacity-20"></div>
      <div className="absolute top-32 left-3/4 w-4 h-4 bg-amber-300 rounded-full animate-float-delayed opacity-20"></div>
      <div className="absolute top-[55%] left-[15%] w-3 h-3 bg-rose-400 rounded-full animate-float-slow opacity-15"></div>
      <div className="absolute top-[70%] right-[20%] w-5 h-5 bg-orange-300 rounded-full animate-float opacity-15"></div>
      <div className="absolute top-[85%] left-[40%] w-3 h-3 bg-amber-400 rounded-full animate-float-delayed opacity-20"></div>
      <div className="absolute top-[45%] right-[8%] w-4 h-4 bg-red-400 rounded-full animate-float-slow opacity-15"></div>

      {/* Floating squares */}
      <div className="absolute bottom-20 left-16 w-3 h-3 bg-amber-400 rotate-45 animate-float opacity-15"></div>
      <div className="absolute bottom-40 right-16 w-4 h-4 bg-orange-400 rotate-45 animate-float-slow opacity-15"></div>
      <div className="absolute bottom-60 left-1/3 w-2 h-2 bg-red-400 rotate-45 animate-float-delayed opacity-15"></div>
      <div className="absolute top-[60%] left-[60%] w-3 h-3 bg-yellow-400 rotate-45 animate-float opacity-10"></div>

      {/* Floating triangles */}
      <div className="absolute top-1/2 left-12 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-red-400 animate-float opacity-20"></div>
      <div className="absolute top-1/3 right-12 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-amber-400 animate-float-delayed opacity-20"></div>
      <div className="absolute top-[75%] left-[25%] w-0 h-0 border-l-[7px] border-r-[7px] border-b-[11px] border-l-transparent border-r-transparent border-b-orange-400 animate-float-slow opacity-15"></div>
    </div>
  );
}
