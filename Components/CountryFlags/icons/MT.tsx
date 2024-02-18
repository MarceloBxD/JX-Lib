import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MT = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M27 0H0v18h27V0Z" fill="#fff" />
    <Path d="M13.473 0h13.5v18h-13.5V0Z" fill="#C31B28" />
    <Path
      d="M5.328 3.59V1.738H3.473V3.59H1.62V5.44h1.852v1.852h1.855V5.441H7.18V3.59H5.328Z"
      fill="#ACABB1"
      stroke="#C31B28"
      strokeWidth={0.105}
    />
  </Svg>
)

export default MT
