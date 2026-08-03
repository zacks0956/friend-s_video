import { useRef, useState } from 'react';

function App() {
  const videoRef = useRef(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handlePlay = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    try {
      await video.play();
      setIsOverlayVisible(false);
    } catch {
      setIsOverlayVisible(true);
    }
  };

  return (
    <main className="player">
      <section className="hero" aria-label="Anniversary movie introduction">
        <p className="eyebrow">ANNIVERSARY MOVIE</p>
        <h1>Friend&apos;s Video</h1>
        <p className="lead">大切な時間を、やわらかく上品に残すためのビデオプレーヤーです。</p>
      </section>

      <div className="video-container">
        <video
          ref={videoRef}
          id="video"
          controls
          playsInline
          onPlay={() => setIsOverlayVisible(false)}
          onEnded={() => setIsOverlayVisible(true)}
        >
          <source src="/video/test.mp4" type="video/mp4" />
        </video>

        {isOverlayVisible && (
          <div className="play-overlay" onClick={handlePlay}>
            <button type="button">tap</button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
