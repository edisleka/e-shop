type StatusBarStyle = 'light' | 'dark'

type Gradient = [string, string]

interface Gradients {
  background: Gradient
  surface: Gradient
  primary: Gradient
  success: Gradient
  warning: Gradient
  danger: Gradient
  muted: Gradient
  empty: Gradient
}

interface Backgrounds {
  input: string
  editInput: string
}

export interface ColorScheme {
  bg: string
  surface: string
  text: string
  textMuted: string
  border: string
  primary: string
  success: string
  warning: string
  danger: string
  shadow: string
  gradients: Gradients
  backgrounds: Backgrounds
  statusBarStyle: StatusBarStyle
}

export interface ThemeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
  colors: ColorScheme
}
