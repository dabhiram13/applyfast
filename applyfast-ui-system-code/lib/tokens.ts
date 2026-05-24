export const tokens = {
  colors: {
    lime: '#B7F34A', lime600: '#78C90D', lime100: '#F2FCE5',
    charcoal: '#0D0F12', ink: '#111318', darkGray: '#1F2328',
    mutedGray: '#9CA3AF', softGray: '#F3F4F6', white: '#FFFFFF',
    success: '#22C55E', blue: '#3B82F6', orange: '#F59E0B', red: '#EF4444', purple: '#8B5CF6'
  },
  radius: { sm: 8, md: 12, lg: 16, xl: 22, xxl: 28 },
  spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96],
  typography: {
    display: { size: 72, lineHeight: 0.96, weight: 850 },
    h1: { size: 42, lineHeight: 1.08, weight: 800 },
    h2: { size: 28, lineHeight: 1.16, weight: 760 },
    body: { size: 16, lineHeight: 1.65, weight: 400 }
  }
} as const;
