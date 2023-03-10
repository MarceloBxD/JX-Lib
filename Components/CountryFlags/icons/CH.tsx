import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const CH = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="red" />
      <Path
        d="M18.746 7.225h-3.515V3.71h-3.515v3.515H8.201v3.515h3.515v3.515h3.515V10.74h3.515V7.225Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default CH
