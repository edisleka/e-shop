import { ColorScheme } from '@/types/colorScheme-types'

export const lightColors: ColorScheme = {
  bg: '#F2F2F2',
  surface: '#ffffff',
  text: '#1A1773',
  textMuted: '#71717a',
  border: '#e4e4e7',
  primary: '#1A1773',
  success: '#04BF9D',
  warning: '#f59e0b',
  danger: '#f43f5e',
  shadow: '#000000',
  gradients: {
    background: ['#F2F2F2', '#ffffff'],
    surface: ['#ffffff', '#F2F2F2'],
    primary: ['#1E5CD9', '#1A1773'],
    success: ['#04BF9D', '#03a688'],
    warning: ['#f59e0b', '#b45309'],
    danger: ['#f43f5e', '#be123c'],
    muted: ['#a1a1aa', '#52525b'],
    empty: ['#F2F2F2', '#e4e4e7'],
  },
  backgrounds: {
    input: '#ffffff',
    editInput: '#ffffff',
  },
  statusBarStyle: 'dark' as const,
}

export const darkColors: ColorScheme = {
  bg: '#09090b',
  surface: '#1A1773',
  text: '#F2F2F2',
  textMuted: '#a1a1aa',
  border: '#27272a',
  primary: '#4384D9',
  success: '#04BF9D',
  warning: '#fbbf24',
  danger: '#fb7185',
  shadow: '#000000',
  gradients: {
    background: ['#09090b', '#1A1773'],
    surface: ['#1A1773', '#1E5CD9'],
    primary: ['#4384D9', '#1E5CD9'],
    success: ['#04BF9D', '#03a688'],
    warning: ['#f59e0b', '#b45309'],
    danger: ['#f43f5e', '#be123c'],
    muted: ['#3f3f46', '#52525b'],
    empty: ['#27272a', '#3f3f46'],
  },
  backgrounds: {
    input: '#1A1773',
    editInput: '#09090b',
  },
  statusBarStyle: 'light' as const,
}
