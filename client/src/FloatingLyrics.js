import React, { useEffect, useState, useRef } from 'react';
import phrases from './phrases';

const MIN_DISTANCE = 12;
const SPAWN_INTERVAL = 2000;
const FADE_DURATION = 8000;

const FloatingLyrics = ({ setNavOpen }) => {
  const [visiblePhrases, setVisiblePhrases] = useState([]);
  const [activeEmbed, setActiveEmbed] = useState(null);
  const visibleRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * phrases.length);
      const phrase = phrases[index];
      if (!phrase) return;

      let top, left;
      let attempts = 0;

      const isTooClose = (t, l) => {
        return visibleRef.current.some(p => {
          const dx = p.left - l;
          const dy = p.top - t;
          return Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE;
        });
      };

      do {
        top = Math.random() * 70 + 5;
        left = Math.random() * 70 + 5;
        attempts++;
      } while (isTooClose(top, left) && attempts < 10);

      const id = Date.now();
      const phraseObj = {
        id,
        text: phrase.text,
        top,
        left,
        embed: phrase.embed
      };

      visibleRef.current = [...visibleRef.current, phraseObj];
      setVisiblePhrases([...visibleRef.current]);

      setTimeout(() => {
        visibleRef.current = visibleRef.current.filter(p => p.id !== id);
        setVisiblePhrases([...visibleRef.current]);
      }, FADE_DURATION);
    }, SPAWN_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/images/iii.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {visiblePhrases.map(phrase => (
        <button
          key={phrase.id}
          onClick={() => {setActiveEmbed(phrase.embed); setNavOpen(false)}}
          className="absolute pointer-events-auto animate-fadeInOut font-garamond italic tracking-wider text-6xl text-white text-center bg-amber-800 bg-opacity-30 hover:bg-opacity-60 transition duration-300 px-2 py-1 rounded"
          style={{
            top: `${phrase.top}%`,
            left: `${phrase.left}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {phrase.text}
        </button>
      ))}

      {activeEmbed && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-3xl aspect-video">
            <iframe
              src={activeEmbed}
              title="YouTube Video"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <button
              onClick={() => setActiveEmbed(null)}
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 px-3 py-1 rounded"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingLyrics;