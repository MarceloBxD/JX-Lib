import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BF = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#3D944F" />
    <Path d="M0 0h27v9H0V0Z" fill="#EF2B2D" />
    <Path
      d="m13.474 5.4.89 2.737h2.878l-2.326 1.695.884 2.737-2.326-1.69-2.327 1.69.885-2.737-2.327-1.695h2.88l.889-2.737Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default BF
