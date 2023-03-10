import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CO = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#FFDA44" />
    <Path d="M0 13.593h27V18H0v-4.407Z" fill="#D80027" />
    <Path d="M0 9h27v4.593H0V9Z" fill="#0052B4" />
  </Svg>
)

export default CO
