import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GF = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="m0 0 27 18H0V0Z" fill="#FDEB01" />
    <Path d="M27 0v18L0 0h27Z" fill="#58A846" />
    <Path
      d="M15.21 9.99 18 7.98h-3.45L13.5 4.71l-1.05 3.27H9l2.79 2.01-1.08 3.3 2.79-2.01 2.79 2.01-1.08-3.3Z"
      fill="#ED3D24"
    />
  </Svg>
)

export default GF
