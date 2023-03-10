import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AR = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h26.95v18H0V0Z" fill="#fff" />
    <Path d="M0 0h26.95v6H0V0Zm0 12h26.95v6H0v-6Z" fill="#338AF3" />
    <Path
      d="M15.605 9a2.104 2.104 0 0 1-2.105 2.105A2.104 2.104 0 0 1 11.395 9c0-1.164.94-2.105 2.105-2.105 1.164 0 2.105.94 2.105 2.105Z"
      fill="#FFDA44"
      stroke="#D6AB00"
      strokeWidth={0.263}
    />
  </Svg>
)

export default AR
