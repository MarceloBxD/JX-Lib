import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TH = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 5.733h27v6.533H0V5.733Z" fill="#0052B4" />
    <Path d="M0 0h27v2.875H0V0Zm0 15.125h27V18H0v-2.875Z" fill="#D80027" />
  </Svg>
)

export default TH
