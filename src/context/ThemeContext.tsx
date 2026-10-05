import { createContext, useContext, useReducer, type ReactNode, type Dispatch } from 'react'

// ---------- 1. State, actions, reducer ----------

type Theme = 'light' | 'dark'

type ThemeState = {
  theme: Theme
}

type ThemeAction = { type: 'TOGGLE' } | { type: 'SET'; payload: Theme }

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'TOGGLE':
      return { theme: state.theme === 'light' ? 'dark' : 'light' }
    case 'SET':
      return { theme: action.payload }
    default:
      return state
  }
}

// ---------- 2. Context ----------
// The context value carries both the current state and the dispatch
// function, so any nested component can read the theme AND change it
// without any props being passed down.

type ThemeContextValue = {
  state: ThemeState
  dispatch: Dispatch<ThemeAction>
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

// ---------- 3. Provider ----------

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' })

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <div className={state.theme === 'dark' ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  )
}

// ---------- 4. Custom hook ----------
// Wrapping useContext in a hook means every consumer gets a clear error
// if it's used outside the provider, instead of a silent `undefined`.

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used inside a <ThemeProvider>')
  }
  return ctx
}