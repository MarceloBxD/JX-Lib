import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GR = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path
      d="M0 0h27v2H0V0Zm0 4h27v2H0V4Zm0 4h27v2H0V8Zm0 4h27v2H0v-2Zm0 4h27v2H0v-2Z"
      fill="#0D5EAF"
    />
    <Path d="M0 0h10v10H0V0Z" fill="#0D5EAF" />
    <Path d="M0 4h10v2H0V4Z" fill="#fff" />
    <Path d="M4 0h2v10H4V0Z" fill="#fff" />
  </Svg>
)

export default GR
