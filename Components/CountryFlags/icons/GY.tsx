import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const GY = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#009E49" />
      <Path d="m0 0 28.41 9L0 18V0Z" fill="#fff" />
      <Path d="M0 .783 26.1 9 0 17.217V.783Z" fill="#FFD00D" />
      <Path d="m0 0 13.5 9L0 18V0Z" fill="#2D2D2D" />
      <Path d="M0 1.05 11.925 9 0 16.95V1.05Z" fill="#D3132F" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default GY
