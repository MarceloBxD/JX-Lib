import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UA = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#FFDA44" />
    <Path d="M0 0h27v9H0V0Z" fill="#338AF3" />
  </Svg>
)

export default UA
