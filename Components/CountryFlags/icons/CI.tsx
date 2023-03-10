import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const CI = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path d="M17.413 0H27v18h-9.587V0Z" fill="#009E60" />
      <Path d="M0 0h9.587v18H0V0Z" fill="#F77F00" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default CI
