import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const VC = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#FFDA44" />
      <Path d="M0 0h9v18H0V0Z" fill="#338AF3" />
      <Path
        d="M18 0h9v18h-9V0ZM11.3 10.467 9.538 7.826l1.76-2.641 1.762 2.64-1.761 2.642Zm4.402 0-1.76-2.641 1.76-2.641 1.761 2.64-1.76 2.642ZM13.5 13.99l-1.76-2.641 1.76-2.642 1.76 2.642-1.76 2.641Z"
        fill="#6DA544"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default VC
