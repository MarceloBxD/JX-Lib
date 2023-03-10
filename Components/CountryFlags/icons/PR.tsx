import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const PR = (props) => (
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
        d="M0 0h27v3.6H0V0Zm0 7.2h27v3.6H0V7.2Zm0 7.2h27V18H0v-3.6Z"
        fill="#D80027"
      />
      <Path d="M13.5 9 0 18V0l13.5 9Z" fill="#0052B4" />
      <Path
        d="M4.402 5.79 5.2 8.242h2.578L5.691 9.758l.797 2.452-2.086-1.516-2.086 1.516.797-2.452-2.086-1.516h2.578l.797-2.452Z"
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

export default PR
