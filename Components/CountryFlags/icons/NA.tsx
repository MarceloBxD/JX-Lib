import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NA = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#496E2D" />
    <Path d="M0 18V0h27" fill="#0052B4" />
    <Path d="M27 3.527V0h-5.29L0 14.473V18h5.29L27 3.527Z" fill="#fff" />
    <Path d="M27 0v2.116L3.174 18H0v-2.116L23.826 0H27Z" fill="#A2001D" />
    <Path
      d="m9.9 5.478-1.199.564.639 1.162-1.303-.25-.165 1.316-.907-.967-.907.967-.165-1.315-1.302.249.639-1.162-1.2-.564 1.2-.564-.639-1.161 1.302.249.165-1.315.907.967.907-.967.165 1.315 1.303-.25L8.7 4.915l1.2.564Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default NA
