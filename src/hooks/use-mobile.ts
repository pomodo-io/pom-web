import * as React from "react"

const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1025,
} as const

type Breakpoint = keyof typeof BREAKPOINTS

export function useBreakpoints() {
  const [breakpoint, setBreakpoint] = React.useState<Breakpoint | undefined>(undefined)

  React.useEffect(() => {
    const getBreakpoint = (width: number): Breakpoint => {
      if (width < BREAKPOINTS.mobile) return "mobile"
      if (width < BREAKPOINTS.tablet) return "tablet"
      return "desktop"
    }

    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.desktop - 1}px)`)
    const onChange = () => {
      setBreakpoint(getBreakpoint(window.innerWidth))
    }
    mql.addEventListener("change", onChange)
    setBreakpoint(getBreakpoint(window.innerWidth))
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return {
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
    breakpoint,
  }
}
