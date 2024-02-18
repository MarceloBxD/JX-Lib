import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const TO = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
      <Path d="M0 0h13.5v9H0V0Z" fill="#fff" />
      <Path
        d="M7.454 3.795V2.387H6.046v1.408h-1.41v1.41h1.41v1.408h1.408V5.204h1.41V3.795h-1.41Z"
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

export default TO
