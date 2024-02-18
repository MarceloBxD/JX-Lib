import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const JP = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path
        d="M13.5 14.063a5.063 5.063 0 1 0 0-10.126 5.063 5.063 0 0 0 0 10.126Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default JP
