import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LV = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v6.716H0V0Zm0 11.284h27V18H0v-6.716Z" fill="#A2001D" />
  </Svg>
)

export default LV
