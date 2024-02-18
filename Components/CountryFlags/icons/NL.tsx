import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NL = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v6H0V0Z" fill="#CD1F2A" />
    <Path d="M0 11.92h27v6H0v-6Z" fill="#1D4185" />
  </Svg>
)

export default NL
