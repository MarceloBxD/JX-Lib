import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const BO = (props) => (
  <Svg
    width={27}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v6.046H0V0Z" fill="#D52B1E" />
      <Path d="M0 6.046h27v6.046H0V6.046Z" fill="#F9E300" />
      <Path d="M0 12.092h27v6.046H0v-6.046Z" fill="#007934" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18.137H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default BO
