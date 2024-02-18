import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const MW = (props) => (
  <Svg
    width={27}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v6.012H0V0Z" fill="#272727" />
      <Path d="M0 6.012h27v6.011H0V6.012Z" fill="#E40112" />
      <Path d="M0 12.023h27v6.012H0v-6.012Z" fill="#07893F" />
      <Path
        d="M13.5 11.602a5.01 5.01 0 1 0 0-10.02 5.01 5.01 0 0 0 0 10.02Z"
        fill="#E40112"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18.035H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default MW
