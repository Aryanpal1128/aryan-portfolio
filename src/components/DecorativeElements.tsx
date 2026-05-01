import { Asterisk, ArrowUpRight, Triangle } from "lucide-react";

export const FloatingAsterisk = ({ className = "" }: { className?: string }) => (
  <div className={`text-primary animate-spin-slow ${className}`}>
    <Asterisk className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
  </div>
);

export const ArrowDecor = ({ className = "" }: { className?: string }) => (
  <div className={`text-primary ${className}`}>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-12 h-12 md:w-16 md:h-16">
      <path d="M10 50L50 10M50 10H20M50 10V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export const CrossDecor = ({ className = "" }: { className?: string }) => (
  <div className={`text-primary ${className}`}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="w-8 h-8 md:w-10 md:h-10">
      <path d="M20 5V35M5 20H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
);

export const StarDecor = ({ className = "" }: { className?: string }) => (
  <div className={`text-primary animate-pulse ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6">
      <polygon points="12,2 15,10 24,10 17,15 20,24 12,19 4,24 7,15 0,10 9,10" />
    </svg>
  </div>
);

export const CircleDashed = ({ className = "" }: { className?: string }) => (
  <div className={`${className}`}>
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="w-24 h-24 md:w-32 md:h-32">
      <circle cx="60" cy="60" r="55" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="8 8" opacity="0.3"/>
    </svg>
  </div>
);
