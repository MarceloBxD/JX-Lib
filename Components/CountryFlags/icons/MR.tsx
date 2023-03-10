import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const MR = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#496E2D" />
      <Path
        d="M13.5 11.26a5.063 5.063 0 0 1-4.945-3.978 5.062 5.062 0 1 0 9.89 0A5.063 5.063 0 0 1 13.5 11.26Z"
        fill="#FFDA44"
      />
      <Path
        d="m13.5 4.57.471 1.45h1.525l-1.234.897.472 1.45-1.234-.896-1.234.896.472-1.45-1.234-.896h1.525l.471-1.45Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default MR
