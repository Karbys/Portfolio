'use client';

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-float-delayed opacity-20"></div>
      <div className="absolute top-60 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float-slow opacity-20"></div>
      <div className="absolute top-80 right-1/3 w-5 h-5 bg-indigo-400 rounded-full animate-float opacity-20"></div>
      <div className="absolute top-32 left-3/4 w-4 h-4 bg-cyan-400 rounded-full animate-float-delayed opacity-20"></div>
      
      {/* Floating squares */}
      <div className="absolute bottom-20 left-16 w-3 h-3 bg-yellow-400 rotate-45 animate-float opacity-15"></div>
      <div className="absolute bottom-40 right-16 w-4 h-4 bg-green-400 rotate-45 animate-float-slow opacity-15"></div>
      <div className="absolute bottom-60 left-1/3 w-2 h-2 bg-red-400 rotate-45 animate-float-delayed opacity-15"></div>
      
      {/* Floating triangles */}
      <div className="absolute top-1/2 left-12 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-orange-400 animate-float opacity-20"></div>
      <div className="absolute top-1/3 right-12 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-teal-400 animate-float-delayed opacity-20"></div>
    </div>
  );
}
