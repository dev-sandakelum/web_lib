"use client";

interface Props {
  onClose: () => void;
}

export function CreatorPopup({ onClose }: Props) {
  return (
    <>
      <style>{`
        .bd3-creator-backdrop {
          position: fixed; inset: 0; z-index: 1100;
          display: flex; align-items: center; justify-content: center; padding: 20px;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          animation: bd3-modal-in 0.2s ease-out;
        }
        .bd3-creator-card {
          background: #0D2E55;
          border: 1px solid rgba(32,82,149,0.55);
          border-radius: 20px;
          width: 100%; max-width: 400px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,103,255,0.12);
          overflow: hidden;
        }
        .bd3-root.light .bd3-creator-card {
          background: #FFFFFF;
          border-color: rgba(99,103,255,0.2);
        }
        .bd3-creator-header {
          padding: 24px 24px 20px;
          border-bottom: 1px solid rgba(32,82,149,0.4);
          background: rgba(10,38,71,0.4);
          display: flex; align-items: flex-start; justify-content: space-between;
        }
        .bd3-root.light .bd3-creator-header {
          background: rgba(99,103,255,0.04);
          border-bottom-color: rgba(99,103,255,0.12);
        }
        .bd3-creator-logo-wrap {
          width: 52px; height: 52px; border-radius: 14px;
          overflow: hidden; flex-shrink: 0;
          border: 2px solid rgba(99,103,255,0.3);
          box-shadow: 0 4px 16px rgba(99,103,255,0.2);
        }
        .bd3-creator-logo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .bd3-creator-app-info { margin-top: 12px; }
        .bd3-creator-app-name { font-size: 18px; font-weight: 800; color: #E8F0FE; letter-spacing: -0.3px; }
        .bd3-root.light .bd3-creator-app-name { color: #0A2647; }
        .bd3-creator-app-ver { font-size: 11px; font-weight: 600; color: rgba(132,148,255,0.9); margin-left: 8px; vertical-align: middle; }
        .bd3-creator-app-sub { font-size: 12px; color: rgba(196,218,255,0.4); margin-top: 3px; }
        .bd3-root.light .bd3-creator-app-sub { color: rgba(10,38,71,0.4); }
        .bd3-creator-close {
          width: 30px; height: 30px; border-radius: 8px; border: none;
          background: rgba(32,82,149,0.3); cursor: pointer; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          color: rgba(196,218,255,0.5); transition: all 0.15s;
        }
        .bd3-root.light .bd3-creator-close { background: rgba(99,103,255,0.08); color: rgba(10,38,71,0.4); }
        .bd3-creator-close:hover { background: rgba(99,103,255,0.2); color: #E8F0FE; }
        .bd3-creator-body { padding: 20px 24px 24px; display: flex; flex-direction: column; gap: 16px; }
        .bd3-creator-row { display: flex; align-items: center; gap: 14px; }
        .bd3-creator-avatar {
          width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg, #6367FF, #8494FF);
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; font-weight: 800; color: #fff;
          border: 2px solid rgba(99,103,255,0.4);
          box-shadow: 0 0 0 3px rgba(99,103,255,0.12);
          letter-spacing: -0.5px;
        }
        .bd3-creator-name { font-size: 15px; font-weight: 700; color: #E8F0FE; }
        .bd3-root.light .bd3-creator-name { color: #0A2647; }
        .bd3-creator-role { font-size: 11.5px; color: rgba(196,218,255,0.45); margin-top: 2px; }
        .bd3-root.light .bd3-creator-role { color: rgba(10,38,71,0.4); }
        .bd3-creator-divider { height: 1px; background: rgba(32,82,149,0.4); margin-top: -4px; }
        .bd3-root.light .bd3-creator-divider { background: rgba(99,103,255,0.12); }
        .bd3-creator-meta { display: flex; flex-direction: column; gap: 8px; }
        .bd3-creator-meta-row { display: flex; align-items: center; gap: 10px; font-size: 12.5px; color: rgba(196,218,255,0.55); }
        .bd3-root.light .bd3-creator-meta-row { color: rgba(10,38,71,0.5); }
        .bd3-creator-meta-icon { flex-shrink: 0; opacity: 0.6; }
        .bd3-creator-meta-val { color: rgba(196,218,255,0.85); font-weight: 500; }
        .bd3-root.light .bd3-creator-meta-val { color: #0A2647; }
        .bd3-creator-footer {
          padding: 14px 24px;
          border-top: 1px solid rgba(32,82,149,0.4);
          background: rgba(10,38,71,0.3);
          display: flex; align-items: center; justify-content: space-between;
        }
        .bd3-root.light .bd3-creator-footer { background: rgba(99,103,255,0.04); border-top-color: rgba(99,103,255,0.12); }
        .bd3-creator-built { font-size: 11px; color: rgba(196,218,255,0.3); font-weight: 500; }
        .bd3-root.light .bd3-creator-built { color: rgba(10,38,71,0.35); }
        .bd3-creator-built span { color: #8494FF; }
        .bd3-creator-dismiss {
          padding: 7px 18px; border-radius: 9px; border: none; cursor: pointer;
          background: #6367FF; color: #fff;
          font-size: 12.5px; font-weight: 700; font-family: inherit;
          box-shadow: 0 3px 12px rgba(99,103,255,0.35);
          transition: all 0.15s;
        }
        .bd3-creator-dismiss:hover { background: #5558E8; transform: translateY(-1px); }
        .bd3-creator-dismiss:active { transform: translateY(0); }
      `}</style>

      <div
        className="bd3-creator-backdrop"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className="bd3-creator-card">
          <div className="bd3-creator-header">
            <div>
              <div className="bd3-creator-logo-wrap">
                <img src="/bd3/logo.jpeg" alt="Logo" />
              </div>
              <div className="bd3-creator-app-info">
                <span className="bd3-creator-app-name">Birthday Post Studio</span>
                <span className="bd3-creator-app-ver">v3</span>
                <div className="bd3-creator-app-sub">
                  9th Batch · Faculty of Technology · University of Ruhuna
                </div>
              </div>
            </div>
            <button className="bd3-creator-close" onClick={onClose}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="bd3-creator-body">
            <div className="bd3-creator-row">
              <div className="bd3-creator-avatar">HS</div>
              <div>
                <div className="bd3-creator-name">Hasitha Sandakelum</div>
                <div className="bd3-creator-role">Developer · ICT HUB</div>
              </div>
            </div>

            <div className="bd3-creator-divider" />

            <div className="bd3-creator-meta">
              <div className="bd3-creator-meta-row">
                <svg className="bd3-creator-meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
                <span>Stack&nbsp;</span>
                <span className="bd3-creator-meta-val">Next.js · TypeScript · Groq AI</span>
              </div>
              <div className="bd3-creator-meta-row">
                <svg className="bd3-creator-meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                <span>Output&nbsp;</span>
                <span className="bd3-creator-meta-val">1080 × 1350 px HD PNG</span>
              </div>
              <div className="bd3-creator-meta-row">
                <svg className="bd3-creator-meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Built&nbsp;</span>
                <span className="bd3-creator-meta-val">2025</span>
              </div>
            </div>
          </div>

          <div className="bd3-creator-footer">
            <span className="bd3-creator-built">
              Part of <span>ICT HUB</span> · University of Ruhuna
            </span>
            <button className="bd3-creator-dismiss" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
}
