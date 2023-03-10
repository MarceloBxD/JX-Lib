import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NG = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h9v18H0V0Zm18 0h9v18h-9V0Z" fill="#007B23" />
  </Svg>
)

export default NG
