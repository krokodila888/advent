import { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX} from 'lucide-react';

export function AudioControls() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const [pendingUserGesture, setPendingUserGesture] = useState(false);

  useEffect(() => {
    // Load audio preferences from localStorage
    const musicPref = localStorage.getItem('musicEnabled');
    console.debug('[AudioControls] mount - musicPref=', musicPref);
    if (musicPref === 'true') {
      console.debug('[AudioControls] stored preference requests autoplay but user gesture required');
      // mark that we should start playback as soon as the user interacts
      setPendingUserGesture(true);
    }
  }, []);

  // When a stored preference requested autoplay, wait for first user gesture
  useEffect(() => {
    if (!pendingUserGesture) return;
    const start = () => {
      console.debug('[AudioControls] user gesture detected, starting audio');
      setIsMusicPlaying(true);
      setPendingUserGesture(false);
      window.removeEventListener('pointerdown', start);
      window.removeEventListener('keydown', start);
    };
    window.addEventListener('pointerdown', start, { once: true });
    window.addEventListener('keydown', start, { once: true });
    return () => {
      window.removeEventListener('pointerdown', start);
      window.removeEventListener('keydown', start);
    };
  }, [pendingUserGesture]);

  useEffect(() => {
    console.debug('[AudioControls] effect isMusicPlaying=', isMusicPlaying, 'ref=', musicRef.current);
    if (!musicRef.current) return;
    const audio = musicRef.current;
    if (isMusicPlaying) {
      console.debug('[AudioControls] calling play()');
      audio
        .play()
        .then(() => console.debug('[AudioControls] play() fulfilled'))
        .catch((e: any) => {
          console.error('[AudioControls] Music play failed:', e);
          // If autoplay was blocked by browser policy, wait for user gesture
          if (e && e.name === 'NotAllowedError') {
            console.debug('[AudioControls] play blocked; awaiting user gesture to resume');
            setPendingUserGesture(true);
          }
        });
    } else {
      console.debug('[AudioControls] calling pause()');
      try {
        audio.pause();
      } catch (e) {
        console.error('[AudioControls] pause() failed:', e);
      }
    }
  }, [isMusicPlaying]);

  const toggleMusic = () => {
    const newState = !isMusicPlaying;
    console.debug('[AudioControls] toggleMusic ->', newState);
    setIsMusicPlaying(newState);
    localStorage.setItem('musicEnabled', String(newState));
  };

  return (
    <div className="audio-controls">
      <button 
        className={`audio-button ${isMusicPlaying ? 'audio-active' : ''}`}
        onClick={toggleMusic}
        title="Toggle Christmas Music"
      >
        {isMusicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        <Music size={16} className="audio-icon-secondary" />
      </button>

      <audio
        ref={musicRef}
        loop
        preload="auto"
        src="audio/Frost_Waltz.mp3"
        onCanPlay={() => console.debug('[AudioControls] audio canplay')}
        onPlay={() => console.debug('[AudioControls] audio event: play')}
        onPause={() => console.debug('[AudioControls] audio event: pause')}
        onError={(e) => console.error('[AudioControls] audio event: error', e)}
      />
    </div>
  );
}
