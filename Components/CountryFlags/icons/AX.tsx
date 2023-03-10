import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AX = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#0052B4" />
    <Path
      d="M27 11.1H10.642V18h-4.2v-6.9H0V6.9h6.442V0h4.2v6.9H27v4.2Z"
      fill="#FFDA44"
    />
    <Path
      d="M27 7.879v2.242H9.668V18H7.421v-7.879H0V7.88h7.421V0h2.247v7.879H27Z"
      fill="#D80027"
    />
  </Svg>
)

export default AX
