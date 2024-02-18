import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SO = (props) => (
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
        d="m13.5 3.794 1.195 3.678h3.867l-3.128 2.273 1.195 3.678L13.5 11.15l-3.129 2.273 1.195-3.678-3.129-2.273h3.868L13.5 3.794Z"
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

export default SO
