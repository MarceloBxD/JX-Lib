import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const CR = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path d="M0 6.652h27v4.696H0V6.652Z" fill="#D80027" />
      <Path d="M0 14.087h27V18H0v-3.913ZM0 0h27v3.913H0V0Z" fill="#0052B4" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default CR
