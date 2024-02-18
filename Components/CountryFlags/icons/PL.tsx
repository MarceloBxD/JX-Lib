import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PL = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v9H0V0Z" fill="#fff" />
    <Path d="M0 9h27v9H0V9Z" fill="#D80027" />
  </Svg>
)

export default PL
