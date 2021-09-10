import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"
import AnimateInOut from "./AnimateInOut"

const FadeInOut = ({ children, delay }) => (
  <AnimateInOut
    as="div"
    durationIn={2}
    durationOut={0.25}
    delay={delay}
    from={{
      opacity: 0,
    }}
    to={{
      opacity: 1,
    }}
  >
    {children}
  </AnimateInOut>
)

export default FadeInOut
