import * as React from "react"
import Svg, { Path } from "react-native-svg"

const VN = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M10.37 0H0v18h27V0H10.37Z" fill="#D80027" />
    <Path
      d="m13.5 3.794 1.195 3.678h3.867l-3.128 2.273 1.195 3.678L13.5 11.15l-3.129 2.273 1.195-3.678-3.129-2.273h3.868L13.5 3.794Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default VN
