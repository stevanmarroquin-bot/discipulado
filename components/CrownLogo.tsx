// SVG recreation of the Bread of Life Guatemala crown icon
// Replace with <img src="/logo.png"> once you copy the PNG to /public/logo.png

interface CrownLogoProps {
  size?: number
  color?: string
  showText?: boolean
  textColor?: string
  subTextColor?: string
  horizontal?: boolean
}

export default function CrownLogo({
  size = 48,
  color = 'currentColor',
  showText = true,
  textColor = 'currentColor',
  subTextColor = 'rgba(255,255,255,0.5)',
  horizontal = false,
}: CrownLogoProps) {
  const crownH = size
  const crownW = size * 1.25

  const crown = (
    <svg
      width={crownW}
      height={crownH}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base band */}
      <rect x="8" y="58" width="84" height="17" rx="6" fill={color} />
      {/* Left prong */}
      <line x1="24" y1="58" x2="21" y2="40" stroke={color} strokeWidth="8" strokeLinecap="round" />
      {/* Center prong */}
      <line x1="50" y1="58" x2="50" y2="18" stroke={color} strokeWidth="8" strokeLinecap="round" />
      {/* Right prong */}
      <line x1="76" y1="58" x2="79" y2="40" stroke={color} strokeWidth="8" strokeLinecap="round" />
      {/* Left circle */}
      <circle cx="21" cy="36" r="9" stroke={color} strokeWidth="7" fill="none" />
      {/* Center circle */}
      <circle cx="50" cy="13" r="9" stroke={color} strokeWidth="7" fill="none" />
      {/* Right circle */}
      <circle cx="79" cy="36" r="9" stroke={color} strokeWidth="7" fill="none" />
    </svg>
  )

  if (!showText) return crown

  if (horizontal) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {crown}
        <div>
          <p style={{ color: textColor, fontSize: '13px', fontWeight: '900', letterSpacing: '0.04em', lineHeight: 1.1 }}>
            BREAD OF LIFE
          </p>
          <p style={{ color: subTextColor, fontSize: '9px', fontWeight: '700', letterSpacing: '0.12em' }}>
            GUATEMALA
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      {crown}
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: textColor, fontSize: Math.max(10, size * 0.24) + 'px', fontWeight: '900', letterSpacing: '0.05em', lineHeight: 1.1 }}>
          BREAD OF LIFE
        </p>
        <p style={{ color: subTextColor, fontSize: Math.max(8, size * 0.16) + 'px', fontWeight: '700', letterSpacing: '0.15em', marginTop: '2px' }}>
          GUATEMALA
        </p>
      </div>
    </div>
  )
}
