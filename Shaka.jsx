import React, { useState } from 'react';

export const ShakaPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const ShakaStyles = {
    body: {
      margin: 0,
    },
    section: {
      width: '100%',
      height: '100vh',
      display: 'table',
      background: '#C8D3D5',
    },
    center: {
      display: 'table-cell',
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    trigger: {
      left: 'calc(50% - 165px)',
      top: 'calc(50% - 360px)',
      height: '720px',
      width: '310px',
      position: 'absolute',
      display: 'block',
      transform: 'scale(0.35)',
      cursor: 'pointer',
    },
    p: {
      paddingTop: '480px',
      fontFamily: "'Lato', sans-serif",
      fontWeight: 300,
      fontSize: '120px',
      lineHeight: '120px',
      color: '#A4B8C4',
      WebkitTransform: 'translateZ(0)',
      transform: 'translateZ(0)',
    },
    hand: {
      left: 0,
      top: '250px',
      height: '100%',
      width: '100%',
      position: 'absolute',
      transition: 'transform 0.3s',
      display: 'block',
      boxShadow: '0 0 0 10px rgba(0, 0, 0, 1)',
    },
    finger: {
      display: 'block',
      borderRadius: '25px',
      height: '320px',
      width: '50px',
      background: '#A4B8C4',
      position: 'absolute',
      margin: '0 auto',
      zIndex: 11,
      transition: 'transform .3s, all .3s',
    },
    nail: {
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px',
      height: '30px',
      width: '30px',
      display: 'block',
      background: '#FCFAFA',
      position: 'absolute',
      top: '10px',
      left: 'calc(50% - 15px)',
    },
    thumb: {
      display: 'block',
      borderTopLeftRadius: '25px',
      height: '260px',
      width: '70px',
      background: '#A4B8C4',
      position: 'absolute',
      margin: '0 auto',
      zIndex: 10,
      top: '-100px',
      right: 0,
      transition: 'transform .3s, all .3s',
    },
    bodyHand: {
      display: 'block',
      position: 'absolute',
      width: '310px',
      height: '310px',
      borderRadius: '100%',
      background: '#A4B8C4',
      transition: 'all .3s',
    },
    hover: {
      hand: {
        transform: 'scale(-1, 1)',
      },
      finger: {
        height: '200px',
      },
      finger1: {
        nail: {
          display: 'none',
        },
        transform: 'rotate(-45deg) scale(1.25) translate(-127px, 15px)',
        height: '250px',
        zIndex: 9,
      },
      finger2: {
        boxShadow: '0 -5px 0 10px rgba(0, 0, 0, .05)',
        transform: 'rotate(-45deg) scale(1.25, -1.25) translate(-140px, -110px)',
      },
      finger3: {
        boxShadow: '0 -5px 0 10px rgba(0, 0, 0, .05)',
        transform: 'rotate(-45deg) scale(1.25, -1.25) translate(-140px, -100px)',
      },
      finger4: {
        boxShadow: '0 -5px 0 10px rgba(0, 0, 0, .05)',
        transform: 'rotate(-45deg) scale(1.25, -1.25) translate(-83px, -45px)',
      },
      thumb: {
        transform: 'rotate(45deg) scale(1.25)',
        top: '-33px',
        right: '-95px',
      },
      bodyHand: {
        borderRadius: '100px',
        transform: 'rotate(45deg)',
      },
    },
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Shaka Popup</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button onClick={togglePopup}>Close</button>
            <section style={ShakaStyles.section}>
              <section style={ShakaStyles.section}>
                <link
                  href="https://fonts.googleapis.com/css?family=Lato"
                  rel="stylesheet"
                />
                <div className="center" style={ShakaStyles.center}>
                  <div className="trigger" style={ShakaStyles.trigger}>
                    <p style={ShakaStyles.p}>Do a Shaka!</p>
                    <div className="hand" style={ShakaStyles.hand}>
                      <div className="finger" style={ShakaStyles.finger}>
                        <div className="nail" style={ShakaStyles.nail}></div>
                      </div>
                      <div className="finger" style={ShakaStyles.finger}>
                        <div className="nail" style={ShakaStyles.nail}></div>
                      </div>
                      <div className="finger" style={ShakaStyles.finger}>
                        <div className="nail" style={ShakaStyles.nail}></div>
                      </div>
                      <div className="finger" style={ShakaStyles.finger}>
                        <div className="nail" style={ShakaStyles.nail}></div>
                      </div>
                      <div className="thumb" style={ShakaStyles.thumb}>
                        <div className="nail" style={ShakaStyles.nail}></div>
                      </div>
                      <div className="body-hand" style={ShakaStyles.bodyHand}></div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
