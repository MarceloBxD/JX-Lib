import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BH = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
    <Path
      d="M11.75 1.809 7.255 3.613 11.75 5.41 7.256 7.21l4.493 1.799-4.493 1.798 4.493 1.799-4.493 1.798 4.493 1.799L7.256 18H0V0h7.256l4.493 1.809Z"
      fill="#fff"
    />
  </Svg>
)

export default BH
