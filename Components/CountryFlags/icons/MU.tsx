import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const MU = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#F7CE00" />
      <Path d="M0 0h27v4.5H0V0Z" fill="#E32737" />
      <Path d="M0 4.499h27v4.5H0V4.5Z" fill="#191F6A" />
      <Path d="M0 13.5h27V18H0v-4.5Z" fill="#00A04E" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default MU
