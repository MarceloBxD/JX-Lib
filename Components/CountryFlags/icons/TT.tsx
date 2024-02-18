import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TT = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
    <Path
      d="m.32 0 10.967 11.213L18.226 18h8.454L15.713 6.786 8.774 0H.32Z"
      fill="#fff"
    />
    <Path d="m2.287 0 18 18h4.426l-18-18H2.288Z" fill="#000" />
  </Svg>
)

export default TT
