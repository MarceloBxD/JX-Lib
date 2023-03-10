import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GM = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 12.521h27V18H0V12.52Z" fill="#1A7E25" />
    <Path d="M0 0h27v5.512H0V0Z" fill="#CF0D19" />
    <Path d="M0 6.62h27v4.728H0V6.62Z" fill="#0052B4" />
  </Svg>
)

export default GM
