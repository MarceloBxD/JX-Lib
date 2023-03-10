import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GH = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#FFDA44" />
    <Path d="M0 0h27v6H0V0Z" fill="#D80027" />
    <Path d="M0 12h27v6H0v-6Z" fill="#496E2D" />
    <Path
      d="m13.494 6 .744 2.292 2.13.168-1.95 1.417L15.443 12l-1.95-1.416L11.545 12l.745-2.292-1.95-1.416h2.41L13.494 6Z"
      fill="#000"
    />
  </Svg>
)

export default GH
