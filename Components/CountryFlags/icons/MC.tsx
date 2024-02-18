import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MC = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v9H0V0Z" fill="#C70000" />
  </Svg>
)

export default MC