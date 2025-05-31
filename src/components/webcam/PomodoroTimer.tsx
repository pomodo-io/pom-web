import React from 'react';
import { useBreakpoints } from '~/hooks/use-mobile';

const PomodoroTimer: React.FC = () => {
  const { isMobile, isTablet } = useBreakpoints();

  const getTimerSize = () => {
    if (isMobile) {
      return {
        container: "w-32 h-32",
        svg: "w-32 h-32",
        circle: "56",
        time: "text-2xl",
        button: "w-6 h-6 text-lg"
      };
    }
    if (isTablet) {
      return {
        container: "w-36 h-36",
        svg: "w-36 h-36",
        circle: "63",
        time: "text-2xl",
        button: "w-7 h-7 text-xl"
      };
    }
    return {
      container: "w-40 h-40",
      svg: "w-40 h-40",
      circle: "70",
      time: "text-3xl",
      button: "w-8 h-8 text-xl"
    };
  };

  const size = getTimerSize();

  return (
    <div className={`relative flex items-center justify-center ${size.container}`}>
      <svg 
        className={`absolute top-0 left-0 ${size.svg}`}
        viewBox="0 0 160 160"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          cx="80"
          cy="80"
          r={size.circle}
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
        />
      </svg>
      <div className="flex flex-col items-center justify-center z-10">
        <span className={`font-semibold text-card-foreground ${size.time}`}>30:00</span>
        <span className={`mt-2 flex items-center justify-center rounded-full bg-[#333] text-white ${size.button}`}>&#10073;&#10073;</span>
      </div>
    </div>
  );
};

export default PomodoroTimer; 