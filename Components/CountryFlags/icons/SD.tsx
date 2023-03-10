import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SD = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path d="M0 0h27v6H0V0Z" fill="#D80027" />
      <Path d="M0 12h27v6H0v-6Z" fill="#000" />
      <Path d="M0 18V0l13.5 9L0 18Z" fill="#496E2D" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SD
