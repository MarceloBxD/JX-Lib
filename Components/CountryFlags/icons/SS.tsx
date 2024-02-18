import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SS = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path d="M0 12.521h27V18H0V12.52Z" fill="#496E2D" />
      <Path d="M0 0h27v5.512H0V0Z" fill="#000" />
      <Path d="M0 6.62h27v4.728H0V6.62Z" fill="#A2001D" />
      <Path d="M13.5 9 0 18V0l13.5 9Z" fill="#0052B4" />
      <Path
        d="m3.859 6.531 1.099 1.533 1.797-.571-1.118 1.518 1.098 1.533-1.79-.594-1.118 1.518.012-1.885-1.79-.595 1.798-.571.012-1.886Z"
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

export default SS
