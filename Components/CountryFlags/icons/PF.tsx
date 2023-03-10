import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PF = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v6H0V0Zm0 12h27v6H0v-6Z" fill="#D80027" />
    <Path
      d="M15.503 9c0 1.106-.897 1.753-2.003 1.753-1.107 0-2.004-.647-2.004-1.753a2.004 2.004 0 0 1 4.007 0Z"
      fill="#FFDA44"
    />
    <Path d="M15.503 9a2.004 2.004 0 0 1-4.007 0" fill="#0052B4" />
    <Path
      d="M12.248 8.5h.5V9.5h-.5V8.5Zm2.003 0h.501V9.5h-.5V8.5Zm-1.002-.752h.501v1.753h-.5V7.748Z"
      fill="#D80027"
    />
  </Svg>
)

export default PF
