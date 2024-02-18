import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SE = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#0052B4" />
      <Path
        d="M10.125 0H6.75v7.312H0v3.375h6.75V18h3.375v-7.313H27V7.313H10.125V0Z"
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

export default SE
