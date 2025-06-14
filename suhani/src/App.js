import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';

// Notes: make windows draggable

function App() {
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [showHomePopup, setShowHomePopup] = useState(false);
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [showProjectsPopup, setShowProjectsPopup] = useState(false);
  const [showResumePopup, setShowResumePopup] = useState(false);
  const [isHomeMaximized, setIsHomeMaximized] = useState(false);

  const toggleHomeMaximize = () => {
    setIsHomeMaximized((prev) => !prev);
  };

  return (
    <div
      className="desktop"
      style={{
        backgroundColor: 'teal',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Desktop Icons */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          color: 'white',
          fontFamily: 'sans-serif',
          fontSize: '13px',
          textAlign: 'center',
        }}
      >
        {/* About me Icon */}
        <div
          className="desktop-icon"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => setShowHomePopup(true)}
        >
          <img src="/icons/about_me.png" alt="Home" width="32" />
          <span>About me</span>
        </div>

        {/* Projects Icon */}
        <div
          className="desktop-icon"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => setShowAboutPopup(true)}
        >
          <img src="/icons/projects.png" alt="About" width="32" />
          <span>About</span>
        </div>

        {/* Projects Icon */}
        <div
          className="desktop-icon"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => setShowProjectsPopup(true)} // Fixed this line
        >
          <img src="/icons/file.png" alt="Projects" width="32" />
          <span>Projects</span>
        </div>

        {/* Resume Icon */}
        <div
          className="desktop-icon"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => setShowResumePopup(true)} // Fixed this line
        >
          <img src="/icons/resume.png" alt="Resume" width="32" />
          <span>Resume</span>
        </div>
      </div>

      {/* Welcome Pop-up */}
      {isMainVisible && (
        <div
          className="window"
          style={{
            width: '300px',
            margin: '50px auto',
            position: 'absolute',
            left: '50%',
            top: '100px',
            transform: 'translateX(-50%)',
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">hi! welcome to suhanis website</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button
                aria-label="Close"
                onClick={() => setIsMainVisible(false)}
              ></button>
            </div>
          </div>
          <div className="window-body">
            <p>please stay and learn about myself and the work i do!</p>
            <button className="button" onClick={() => setIsMainVisible(false)}>
              Let's do it!
            </button>
          </div>
        </div>
      )}

      {/* Home Pop-up */}
      {showHomePopup && (
        <div
          className="window"
          style={{
            width: isHomeMaximized ? '100%' : '300px',
            height: isHomeMaximized ? '100%' : 'auto',
            position: 'absolute',
            top: isHomeMaximized ? '0' : '160px',
            left: isHomeMaximized ? '0' : '200px',
            zIndex: 10,
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">Home</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize" onClick={toggleHomeMaximize}></button>
              <button aria-label="Close" onClick={() => setShowHomePopup(false)}></button>
            </div>
          </div>
          <div
            className="window-body"
            style={{
              height: isHomeMaximized ? 'calc(100% - 30px)' : 'auto',
              overflow: 'auto',
            }}
          >
            <Home />
          </div>
        </div>
      )}

      {/* About Pop-up */}
      {showAboutPopup && (
        <div
          className="window"
          style={{
            width: '300px',
            position: 'absolute',
            top: '240px',
            left: '300px',
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">About</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close" onClick={() => setShowAboutPopup(false)}></button>
            </div>
          </div>
          <div className="window-body">
            <About />
          </div>
        </div>
      )}

      {/* Projects Pop-up */}
      {showProjectsPopup && (
        <div
          className="window"
          style={{
            width: '300px',
            position: 'absolute',
            top: '240px',
            left: '300px',
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">Projects</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close" onClick={() => setShowProjectsPopup(false)}></button>
            </div>
          </div>
          <div className="window-body">
            <Home /> {/* Placeholder: Replace with actual Projects content */}
          </div>
        </div>
      )}

      {/* Resume Pop-up */}
      {showResumePopup && (
        <div
          className="window"
          style={{
            width: '300px',
            position: 'absolute',
            top: '240px',
            left: '300px',
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">Resume</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close" onClick={() => setShowResumePopup(false)}></button>
            </div>
          </div>
          <div className="window-body">
            <About /> {/* Placeholder: Replace with actual Resume content */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;