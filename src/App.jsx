import { useState } from 'react';
import './index.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const video = document.getElementById('video');
    if (video) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <main className="player">
      <div className="video-container">
        <video id="video" controls playsInline>
          <source src="/video/test.mp4" type="video/mp4" />
        </video>

        {!isPlaying && (
          <div className="play-overlay" onClick={handlePlay}>
            <button type="button">tap</button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
