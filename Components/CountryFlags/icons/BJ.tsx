import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const BJ = (props) => (
  <Svg
    width={27}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v17H0V0Z" fill="#008751" />
      <Path d="M10.35 0H27v8.5H10.35V0Z" fill="#FCD116" />
      <Path d="M10.35 8.483H27v8.5H10.35v-8.5Z" fill="#E8112D" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v17H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default BJ
