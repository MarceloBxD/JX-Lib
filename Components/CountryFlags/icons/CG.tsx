import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const CG = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#DA1A35" />
      <Path d="M23.354 0 5.389 17.965H0V0h23.354Z" fill="#009543" />
      <Path d="M26.322 0 8.358 17.965H.625L18.59 0h7.732Z" fill="#FBDE4A" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default CG
