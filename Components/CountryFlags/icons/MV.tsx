import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const MV = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#D01920" />
      <Path d="M7.63 4.695h11.74v8.61H7.63v-8.61Z" fill="#017C3B" />
      <Path
        d="M14.95 11.543a2.543 2.543 0 1 1 1.21-4.781 3.13 3.13 0 1 0 0 4.476 2.53 2.53 0 0 1-1.21.305Z"
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

export default MV
