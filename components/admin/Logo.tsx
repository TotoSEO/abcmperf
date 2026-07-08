import React from 'react'

/* Logo affiché sur l'écran de connexion du back-office. */
export const Logo: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
    <img
      src="/logo-abcm-full.png"
      alt="ABCM Performances"
      style={{ maxWidth: '220px', width: '100%', height: 'auto' }}
    />
    <span
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.7rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--theme-elevation-500)',
      }}
    >
      Back-office
    </span>
  </div>
)

export default Logo
