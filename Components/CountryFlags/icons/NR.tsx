import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NR = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#0052B4" />
    <Path d="M0 8.156h27v1.688H0V8.156Z" fill="#FFDA44" />
    <Path
      d="m9.218 13.5-1.008.475.537.976-1.096-.21-.138 1.107-.763-.814-.763.814-.138-1.106-1.096.21.537-.977-1.008-.475 1.008-.474-.537-.977 1.095.21.14-1.107.762.814.763-.814.138 1.107 1.096-.21-.537.977 1.008.474Z"
      fill="#fff"
    />
  </Svg>
)

export default NR
