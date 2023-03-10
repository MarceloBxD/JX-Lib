import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LY = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#000" />
    <Path d="M0 0h27v6H0V0Z" fill="#D80027" />
    <Path d="M0 12h27v6H0v-6Z" fill="#496E2D" />
    <Path
      d="m14.84 7.947.473.652.766-.249-.474.651.473.651-.765-.249-.474.65V9.25L14.076 9l.765-.248v-.805Z"
      fill="#fff"
    />
    <Path
      d="M13.55 10.628a1.628 1.628 0 1 1 .775-3.06 2.004 2.004 0 1 0 0 2.864 1.621 1.621 0 0 1-.774.196Z"
      fill="#fff"
    />
  </Svg>
)

export default LY
