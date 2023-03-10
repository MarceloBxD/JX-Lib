import * as React from "react"
import Svg, { Path } from "react-native-svg"

const EE = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#111" />
    <Path d="M0 0h27v6H0V0Z" fill="#368FD8" />
    <Path d="M0 12h27v6H0v-6Z" fill="#fff" />
  </Svg>
)

export default EE
