import type { AdventWindowProps } from '../types/types';

export const AdventWindow = ({ item, isAvailable, isOpened, onClick }: AdventWindowProps) => {
  return (
    <div className="relative window-container" onClick={onClick}>
      <div className="absolute inset-0 rounded-2xl transform translate-x-1 translate-y-1"
           style={{ 
             background: isAvailable && !isOpened ? '#4a3728' : '#2a2a2a',
             opacity: 0.5 
           }} />
      <div className="absolute inset-0 rounded-2xl transform translate-x-0.5 translate-y-0.5"
           style={{ 
             background: isAvailable && !isOpened ? '#5d4037' : '#333333',
             opacity: 0.7 
           }} />
      
      <div className={`
        relative aspect-square rounded-2xl p-4 cursor-pointer
        transition-all duration-500 transform hover:scale-105 hover:-translate-y-1
        ${isAvailable && !isOpened 
          ? 'bg-gradient-to-br from-amber-600 via-orange-700 to-amber-800 window-glow' 
          : isAvailable && isOpened
          ? 'bg-gradient-to-br from-gray-700 to-gray-800'
          : 'bg-gradient-to-br from-gray-800 to-gray-900 opacity-40 cursor-not-allowed'}
        border-2 ${isAvailable && !isOpened ? 'border-amber-400' : 'border-gray-600'}
      `}
      style={{
        boxShadow: isAvailable && !isOpened 
          ? '0 8px 25px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
          : '0 4px 15px rgba(0,0,0,0.5)'
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl md:text-6xl font-serif font-bold drop-shadow-2xl"
                style={{ 
                  color: isAvailable ? '#fef3c7' : '#4a5568',
                  textShadow: isAvailable 
                    ? '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,200,100,0.3)'
                    : '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
            {item.day}
          </span>
        </div>
        
        {isAvailable && !isOpened && (
          <>
            <div className="absolute top-1 left-1 w-12 h-12 rounded-full bg-white opacity-20 blur-xl sparkle" />
            <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-amber-300 opacity-30 blur-lg sparkle-delay" />
          </>
        )}
      </div>
    </div>
  );
};