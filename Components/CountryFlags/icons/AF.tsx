import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AF = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#DB3E00" />
    <Path d="M17.421 0H27v18h-9.579V0Z" fill="#479900" />
    <Path d="M0 0h9.568v18H0V0Z" fill="#000" />
    <Path
      d="M13.474 6.668a1.855 1.855 0 0 0-1.853 1.853v2.778h3.705V8.521a1.852 1.852 0 0 0-1.852-1.853Z"
      fill="#fff"
    />
    <Path
      d="M13.474 4.437a4.544 4.544 0 1 0 0 9.09 4.544 4.544 0 1 0 0-9.09Zm0 8.3a3.76 3.76 0 0 1-3.758-3.758 3.76 3.76 0 0 1 3.758-3.758 3.757 3.757 0 1 1 0 7.516Z"
      fill="#fff"
    />
  </Svg>
)

export default AF
