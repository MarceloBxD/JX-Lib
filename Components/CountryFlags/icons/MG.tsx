import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const MG = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M27 18V0H0v18h27Z" fill="#6DA544" />
      <Path d="M27 0H0v9h27V0Z" fill="#D80027" />
      <Path d="M0 0h9.587v18H0V0Z" fill="#fff" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default MG
