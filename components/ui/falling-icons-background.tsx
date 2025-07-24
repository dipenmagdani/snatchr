import { FC } from 'react';
import { Download, Youtube, Music2, Video, Film, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FallingIconsBackgroundProps {
  className?: string;
  iconCount?: number;
}

const icons = [
  { Icon: Download, color: 'text-emerald-500/50', size: 32 },
  { Icon: Youtube, color: 'text-red-500/50', size: 40 },
  { Icon: Music2, color: 'text-blue-500/50', size: 36 },
  { Icon: Video, color: 'text-purple-500/50', size: 38 },
  { Icon: Film, color: 'text-amber-500/50', size: 34 },
  { Icon: Headphones, color: 'text-pink-500/50', size: 30 },
];

export const FallingIconsBackground: FC<FallingIconsBackgroundProps> = ({
  className,
  iconCount = 15,
}) => {
  const iconElements = Array.from({ length: iconCount }, (_, i) => {
    const { Icon, color, size: baseSize } = icons[i % icons.length];
    const left = Math.random() * 100;
    const size = baseSize + Math.random() * 12;
    const duration = 10 + Math.random() * 10;
    const delay = Math.random() * duration;
    const rotation = Math.random() * 360;
    const scale = 0.8 + Math.random() * 0.4;

    return (
      <Icon
        key={i}
        className={cn(
          "absolute drop-shadow-lg transition-all duration-1000",
          color,
          "animate-fall opacity-0"
        )}
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          transform: `rotate(${rotation}deg) scale(${scale})`,
          filter: 'drop-shadow(0 0 8px currentColor)',
        }}
      />
    );
  });

  return (
    <div className={cn('pointer-events-none select-none absolute inset-0 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      {iconElements}
    </div>
  );
}; 