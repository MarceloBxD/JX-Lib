import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const IE = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path d="M0 0h9v18H0V0Z" fill="#6DA544" />
      <Path d="M18 0h9v18h-9V0Z" fill="#FF9811" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default IE
