
import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  const [isMainVisible, setIsMainVisible] = useState(true);

  const [showHomePopup, setShowHomePopup] = useState(false);
  const [isHomeMinimized, setIsHomeMinimized] = useState(false);
  const [isHomeMaximized, setIsHomeMaximized] = useState(false);

  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [isAboutMinimized, setIsAboutMinimized] = useState(false);
  const [isAboutMaximized, setIsAboutMaximized] = useState(false);

  const [showProjectsPopup, setShowProjectsPopup] = useState(false);
  const [isProjectsMinimized, setIsProjectsMinimized] = useState(false);
  const [isProjectsMaximized, setIsProjectsMaximized] = useState(false);

  const [showResumePopup, setShowResumePopup] = useState(false);
  const [isResumeMinimized, setIsResumeMinimized] = useState(false);
  const [isResumeMaximized, setIsResumeMaximized] = useState(false);

  return (
    <div
      className="desktop"
      style={{
        backgroundColor: 'teal',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: '40px',
      }}
    >
      {/* Desktop Icons */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
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
        <div onClick={() => { setShowHomePopup(true); setIsHomeMinimized(false); }} style={iconStyle}>
          <img src="/icons/about_me.png" alt="Home" width="32" />
          <span>About me</span>
        </div>
        <div onClick={() => { setShowAboutPopup(true); setIsAboutMinimized(false); }} style={iconStyle}>
          <img src="/icons/projects.png" alt="About" width="32" />
          <span>About</span>
        </div>
        <div onClick={() => { setShowProjectsPopup(true); setIsProjectsMinimized(false); }} style={iconStyle}>
          <img src="/icons/file.png" alt="Projects" width="32" />
          <span>Projects</span>
        </div>
        <div onClick={() => { setShowResumePopup(true); setIsResumeMinimized(false); }} style={iconStyle}>
          <img src="/icons/resume.png" alt="Resume" width="32" />
          <span>Resume</span>
        </div>
      </div>

      {/* Welcome Popup */}
      {isMainVisible && (
        <div
          className="window"
          style={{
            width: '300px',
            position: 'absolute',
            left: '50%',
            top: '100px',
            transform: 'translateX(-50%)',
            zIndex: 9999,
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">hi! welcome to suhani's website</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" onClick={() => setIsMainVisible(false)}></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close" onClick={() => setIsMainVisible(false)}></button>
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

      {/* Popups */}
      {showHomePopup && !isHomeMinimized && (
        <Window title="Home" onMinimize={() => setIsHomeMinimized(true)} onMaximize={() => setIsHomeMaximized(prev => !prev)} isMaximized={isHomeMaximized} onClose={() => setShowHomePopup(false)}>
          <Home />
        </Window>
      )}
      {showAboutPopup && !isAboutMinimized && (
        <Window title="About" onMinimize={() => setIsAboutMinimized(true)} onMaximize={() => setIsAboutMaximized(prev => !prev)} isMaximized={isAboutMaximized} onClose={() => setShowAboutPopup(false)}>
          <About />
        </Window>
      )}
      {showProjectsPopup && !isProjectsMinimized && (
        <Window title="Projects" onMinimize={() => setIsProjectsMinimized(true)} onMaximize={() => setIsProjectsMaximized(prev => !prev)} isMaximized={isProjectsMaximized} onClose={() => setShowProjectsPopup(false)}>
          <Projects />
        </Window>
      )}
      {showResumePopup && !isResumeMinimized && (
        <Window title="Resume" onMinimize={() => setIsResumeMinimized(true)} onMaximize={() => setIsResumeMaximized(prev => !prev)} isMaximized={isResumeMaximized} onClose={() => setShowResumePopup(false)}>
          <Resume />
        </Window>
      )}

      {/* Taskbar */}
      <div style={taskbarStyle}>
        {showHomePopup && isHomeMinimized && <TaskbarButton label="Home" onClick={() => setIsHomeMinimized(false)} />}
        {showAboutPopup && isAboutMinimized && <TaskbarButton label="About" onClick={() => setIsAboutMinimized(false)} />}
        {showProjectsPopup && isProjectsMinimized && <TaskbarButton label="Projects" onClick={() => setIsProjectsMinimized(false)} />}
        {showResumePopup && isResumeMinimized && <TaskbarButton label="Resume" onClick={() => setIsResumeMinimized(false)} />}
      </div>
    </div>
  );
}

function Window({ title, children, onMinimize, onMaximize, onClose, isMaximized }) {
  return (
    <div
      className="window"
      style={{
        width: isMaximized ? '100%' : '300px',
        height: isMaximized ? '100%' : 'auto',
        position: 'absolute',
        top: isMaximized ? 0 : '120px',
        left: isMaximized ? 0 : '200px',
        zIndex: 10,
      }}
    >
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={onMinimize}></button>
          <button aria-label="Maximize" onClick={onMaximize}></button>
          <button aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
      <div className="window-body" style={{ height: isMaximized ? 'calc(100% - 30px)' : 'auto', overflow: 'auto' }}>
        {children}
      </div>
    </div>
  );
}

function TaskbarButton({ label, onClick }) {
  return (
    <button
      style={{
        backgroundColor: '#555',
        border: 'none',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

const iconStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
};

const taskbarStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '40px',
  backgroundColor: '#333',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  gap: '10px',
  fontFamily: 'sans-serif',
  fontSize: '14px',
  boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.4)',
  zIndex: 999,
};

export default App;