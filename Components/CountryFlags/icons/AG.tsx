import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AG = (props) => (
  <Svg
    width={26}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h26v18H0V0Z" fill="#000" />
    <Path
      d="M4.5 7.185a12.87 12.87 0 0 0 0 4.19l8.475.641 8.474-.637a12.872 12.872 0 0 0 0-4.19"
      fill="#0072C6"
    />
    <Path
      d="M21.449 11.526H4.5c.8 3.674 4.292 6.437 8.474 6.437 4.18 0 7.673-2.763 8.474-6.437Z"
      fill="#fff"
    />
    <Path
      d="M18.545 7.185H7.405L9.68 6.074 8.47 3.784l2.473.495.31-2.594 1.723 1.905 1.723-1.905.309 2.594 2.473-.494-1.211 2.289 2.276 1.11Z"
      fill="#FFDA44"
    />
    <Path d="M13 18 0 0v18h13Z" fill="#CE1126" />
    <Path d="M26 18V0L12.975 18H26Z" fill="#CE1126" />
  </Svg>
)

export default AG
