import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const IS = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#0052B4" />
      <Path
        d="M27 11.103H10.663V18H6.457v-6.897H0V6.897h6.457V0h4.206v6.897H27v4.206Z"
        fill="#fff"
      />
      <Path
        d="M27 7.875v2.25H9.685V18h-2.25v-7.875H0v-2.25h7.434V0h2.25v7.875H27Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default IS
