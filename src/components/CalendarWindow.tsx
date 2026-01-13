import { Bird, Circle, Star, Key } from 'lucide-react';
import { useRef } from 'react';

interface CalendarWindowProps {
  windowNumber: number;
  isActive: boolean;
  isOpened: boolean;
  isExactMatch: boolean;
  onClick: () => void;
}

// Define different sizes for windows
const windowSizes = [
  'window-small', 'window-medium', 'window-large', 'window-small',
  'window-medium', 'window-large', 'window-small', 'window-medium',
  'window-large', 'window-small', 'window-medium', 'window-large',
  'window-small', 'window-medium', 'window-large', 'window-small',
  'window-medium', 'window-large', 'window-small', 'window-medium',
  'window-large', 'window-small', 'window-medium', 'window-large',
  'window-medium', 'window-large', 'window-small', 'window-medium', 'window-large',
  'window-small', 'window-medium', 'window-large'
];

const windowShapes = [
  'window-rect', 'window-square', 'window-tall', 'window-rect',
  'window-square', 'window-tall', 'window-rect', 'window-square',
  'window-tall', 'window-rect', 'window-square', 'window-tall',
  'window-rect', 'window-square', 'window-tall', 'window-rect',
  'window-square', 'window-tall', 'window-rect', 'window-square',
  'window-tall', 'window-rect', 'window-square', 'window-tall',
  'window-square', 'window-tall', 'window-square', 'window-rect', 'window-tall',
  'window-rect', 'window-square', 'window-tall'
];

// Element layout/types (doors/windows) and designs (textures/backgrounds)
const elementTypes = [
  'door', 'window', 'window', 'door', 'window',
  'door', 'window', 'window', 'door', 'window',
  'door', 'window', 'window', 'door', 'window',
  'window', 'door', 'window', 'door', 'window',
  'door', 'window', 'window', 'door', 'window',  
  'door', 'window', 'door', 'window', 'window',
  'door', 'window'
];

const doorDesigns = [
  { type: 'door-rect', wood: 'oak', handle: 'brass-dot', hasKeyhole: true, frame: 'carved' },
  { type: 'door-arched', wood: 'pine', handle: 'ring', hasKeyhole: false, frame: 'molding' },
  { type: 'door-double', wood: 'aged', handle: 'star', hasKeyhole: true, frame: 'simple' },
  { type: 'door-rect', wood: 'oak', handle: 'pinecone', hasKeyhole: false, frame: 'carved' },
  { type: 'door-arched', wood: 'pine', handle: 'fantasy', hasKeyhole: true, frame: 'molding' },
  { type: 'door-double', wood: 'aged', handle: 'brass-dot', hasKeyhole: false, frame: 'carved' },
  { type: 'door-rect', wood: 'oak', handle: 'ring', hasKeyhole: true, frame: 'simple' },
  { type: 'door-arched', wood: 'pine', handle: 'star', hasKeyhole: false, frame: 'molding' },
  { type: 'door-double', wood: 'aged', handle: 'pinecone', hasKeyhole: true, frame: 'carved' },
  { type: 'door-rect', wood: 'oak', handle: 'fantasy', hasKeyhole: false, frame: 'simple' },
  { type: 'door-arched', wood: 'pine', handle: 'brass-dot', hasKeyhole: true, frame: 'molding' },
  { type: 'door-double', wood: 'aged', handle: 'ring', hasKeyhole: false, frame: 'carved' }
];

const windowDesigns = [
  { shape: 'square', panes: 4, glass: 'frosted', hasPlant: true, hasSill: true },
  { shape: 'circular', panes: 0, glass: 'stained', hasPlant: false, hasSill: false },
  { shape: 'arched', panes: 6, glass: 'cracked', hasPlant: false, hasSill: true },
  { shape: 'diamond', panes: 0, glass: 'frosted', hasPlant: false, hasSill: false },
  { shape: 'hexagonal', panes: 0, glass: 'stained', hasPlant: true, hasSill: true },
  { shape: 'square', panes: 8, glass: 'frosted', hasPlant: false, hasSill: true },
  { shape: 'arched', panes: 4, glass: 'cracked', hasPlant: true, hasSill: true },
  { shape: 'square', panes: 6, glass: 'stained', hasPlant: false, hasSill: true },
  { shape: 'circular', panes: 0, glass: 'frosted', hasPlant: false, hasSill: false },
  { shape: 'diamond', panes: 0, glass: 'cracked', hasPlant: false, hasSill: false },
  { shape: 'hexagonal', panes: 0, glass: 'stained', hasPlant: true, hasSill: true },
  { shape: 'square', panes: 4, glass: 'frosted', hasPlant: false, hasSill: true },
  { shape: 'arched', panes: 6, glass: 'cracked', hasPlant: false, hasSill: true }
];

const doorDecorations = ['wreath', 'garland', 'none', 'wreath', 'bow', 'holly', 'garland', 'wreath', 'none', 'bow', 'wreath', 'holly'];
const windowDecorations = ['candle', 'lights', 'bow', 'none', 'candle', 'lights', 'holly', 'candle', 'bow', 'none', 'lights', 'candle', 'holly'];

const renderHandle = (handleType: string) => {
  switch (handleType) {
    case 'brass-dot':
      return <div className="door-handle brass-dot" />;
    case 'ring':
      return <Circle className="door-handle ring" size={12} />;
    case 'star':
      return <Star className="door-handle star" size={12} fill="currentColor" />;
    case 'pinecone':
      return <div className="door-handle pinecone" />;
    case 'fantasy':
      return <div className="door-handle fantasy" />;
    default:
      return <div className="door-handle brass-dot" />;
  }
};

const renderWindowPanes = (panes: number) => {
  if (panes === 0) return null;
  const cols = panes === 4 ? 2 : panes === 6 ? 2 : 4;
  const rows = panes === 4 ? 2 : panes === 6 ? 3 : 2;
  return (
    <div className="window-panes" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>
      {Array.from({ length: panes }).map((_, i) => (
        <div key={i} className="window-pane" />
      ))}
    </div>
  );
};

const renderDoorDecoration = (decoration: string) => {
  if (decoration === 'none') return null;
  switch (decoration) {
    case 'wreath':
      return (
        <div className="christmas-wreath">
          <div className="wreath-circle" />
          <div className="wreath-bow" />
          <div className="wreath-berries">
            <div className="berry" />
            <div className="berry" />
            <div className="berry" />
          </div>
        </div>
      );
    case 'garland':
      return (
        <div className="christmas-garland">
          <div className="garland-swag" />
          <div className="garland-bow" />
        </div>
      );
    case 'bow':
      return (
        <div className="christmas-bow-large">
          <div className="bow-left" />
          <div className="bow-right" />
          <div className="bow-center" />
          <div className="bow-ribbon-left" />
          <div className="bow-ribbon-right" />
        </div>
      );
    case 'holly':
      return (
        <div className="christmas-holly">
          <div className="holly-leaf left" />
          <div className="holly-leaf right" />
          <div className="holly-berry" />
          <div className="holly-berry" />
        </div>
      );
    default:
      return null;
  }
};

const renderWindowDecoration = (decoration: string) => {
  if (decoration === 'none') return null;
  switch (decoration) {
    case 'candle':
      return (
        <div className="christmas-candle">
          <div className="candle-flame" />
          <div className="candle-body" />
          <div className="candle-base" />
        </div>
      );
    case 'lights':
      return (
        <div className="christmas-lights">
          <div className="light-bulb red" />
          <div className="light-bulb gold" />
          <div className="light-bulb green" />
          <div className="light-bulb blue" />
        </div>
      );
    case 'bow':
      return (
        <div className="christmas-bow-small">
          <div className="bow-left" />
          <div className="bow-right" />
          <div className="bow-center" />
        </div>
      );
    case 'holly':
      return (
        <div className="christmas-holly-small">
          <div className="holly-leaf" />
          <div className="holly-leaf" />
          <div className="holly-berry" />
        </div>
      );
    default:
      return null;
  }
};

export function CalendarWindow({ 
  windowNumber, 
  isActive, 
  isOpened, 
  isExactMatch,
  onClick 
}: CalendarWindowProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isOwlWindow = windowNumber === 17;

  const handleMouseEnter = () => {
    if (isOwlWindow && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const sizeClass = windowSizes[windowNumber - 1];
  const shapeClass = windowShapes[windowNumber - 1];
  const glowClass = isActive && !isOpened 
    ? 'window-glow-intense'
    : (isActive && isExactMatch)  ? 'window-glow-intense' : '';
  const roundSet = new Set([11, 6, 12, 16, 25, 30]);
  const isRound = roundSet.has(windowNumber);
  const appliedShapeClass = isRound ? 'window-round' : shapeClass;
  // Determine whether this slot is a door or window (layout from CalendarWindow1)
  const elementType = elementTypes[windowNumber - 1];
  const isDoor = elementType === 'door';

  // compute door/window index for selecting designs
  let doorIndex = 0;
  let windowIndex = 0;
  for (let i = 0; i < windowNumber; i++) {
    if (elementTypes[i] === 'door') doorIndex++;
    else windowIndex++;
  }

  const doorDesign = doorDesigns[(doorIndex - 1) % doorDesigns.length];
  const windowDesign = windowDesigns[(windowIndex - 1) % windowDesigns.length];
  const doorDecoration = doorDecorations[(doorIndex - 1) % doorDecorations.length];
  const windowDecoration = windowDecorations[(windowIndex - 1) % windowDecorations.length];

  return (
    <div
      className={`calendar-window ${sizeClass} ${appliedShapeClass} ${glowClass} ${
        isOpened ? 'window-opened' : ''
      } ${isActive ? 'window-active' : 'window-inactive'}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
    >
      {isDoor ? (
        <div className={`door-element ${doorDesign.type}`}>
          {renderDoorDecoration(doorDecoration)}
          <div className={`door-frame frame-${doorDesign.frame}`}>
            <div
              className={`door-panel wood-${doorDesign.wood}`}
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                borderRadius: isRound ? '50%' : undefined,
                overflow: 'hidden'
              }}
            >
              {doorDesign.type === 'door-double' && <div className="door-split" />}
              <div className="door-decorative-panels">
                <div className="panel-top" />
                <div className="panel-bottom" />
              </div>
              <div className="door-hardware">
                {renderHandle(doorDesign.handle)}
                {doorDesign.hasKeyhole && <Key className="door-keyhole" size={10} />}
              </div>
              <span className="window-number gold">{windowNumber}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={`window-element ${appliedShapeClass} ${sizeClass}`}>
          {renderWindowDecoration(windowDecoration)}
          <div className="window-frame">
            <div
              className={`window-glass glass-${windowDesign.glass}`}
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                borderRadius: isRound ? '50%' : undefined,
                overflow: 'hidden'
              }}
            >
              {renderWindowPanes(windowDesign.panes)}
              {windowDesign.shape === 'arched' && <div className="window-arch" />}
              {isOwlWindow && <Bird className="owl-icon" size={16} />}
            </div>
            <span className="window-number gold">{windowNumber}</span>
          </div>
          {windowDesign.hasSill && (
            <div className="window-sill">
              {windowDesign.hasPlant && (
                <div className="window-plant">
                  <div className="plant-pot" />
                  <div className="plant-leaves">
                    <div className="leaf" />
                    <div className="leaf" />
                    <div className="leaf" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
