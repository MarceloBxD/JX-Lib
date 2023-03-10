import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const PW = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#338AF3" />
      <Path
        d="M11.544 12.913a3.913 3.913 0 1 0 0-7.826 3.913 3.913 0 0 0 0 7.826Z"
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

export default PW
