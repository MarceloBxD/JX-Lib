import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LT = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#6DA544" />
    <Path d="M0 0h27v6H0V0Z" fill="#FFDA44" />
    <Path d="M0 12h27v6H0v-6Z" fill="#D80027" />
  </Svg>
)

export default LT
