import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const FI = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v17.998H0V0Z" fill="#fff" />
      <Path
        d="M27 6.819v4.36H10.742V18H6.381v-6.82H0V6.82h6.38V0h4.362v6.819H27Z"
        fill="#2E52B2"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v17.998H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default FI
