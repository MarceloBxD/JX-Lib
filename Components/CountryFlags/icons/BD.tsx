import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const BD = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#2D6E41" />
      <Path
        d="M11.521 15.061a6.053 6.053 0 1 0 0-12.105 6.053 6.053 0 0 0 0 12.105Z"
        fill="#F40B32"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default BD
