import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SR = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path d="M0 5.87h27v6.26H0V5.87Z" fill="#A2001D" />
      <Path d="M0 14.087h27V18H0v-3.913ZM0 0h27v3.913H0V0Z" fill="#6DA544" />
      <Path
        d="m13.54 6.996.496 1.53h1.61l-1.302.947.497 1.53-1.302-.946-1.302.946.498-1.53-1.303-.947h1.61l.497-1.53Z"
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

export default SR
