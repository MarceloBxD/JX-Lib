import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const GW = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#6DA544" />
      <Path d="M0 0h27v9H0V0Z" fill="#FFDA44" />
      <Path d="M0 0h9.587v18H0V0Z" fill="#D80027" />
      <Path
        d="m5.185 5.79.797 2.452H8.56L6.474 9.758l.797 2.452-2.086-1.516-2.086 1.516.797-2.452L1.81 8.242h2.578l.797-2.452Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default GW
