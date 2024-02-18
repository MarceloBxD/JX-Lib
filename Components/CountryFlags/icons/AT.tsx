import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AT = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 6h27v6H0V6Z" fill="#fff" />
    <Path d="M0 0h27v6H0V0Zm0 12h27v6H0v-6Z" fill="#D80027" />
  </Svg>
)

export default AT
