import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CZ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#11457E" />
    <Path d="M27 9v9H0l11.348-9H27Z" fill="#D7141A" />
    <Path d="M27 0v9H11.348L0 0h27Z" fill="#fff" />
  </Svg>
)

export default CZ
