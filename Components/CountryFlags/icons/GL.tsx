import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GL = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
    <Path d="M27 0v9H0V0h27Z" fill="#fff" />
    <Path
      d="M9.779 15.21a6.2 6.2 0 1 0 0-12.4 6.2 6.2 0 0 0 0 12.4Z"
      fill="#fff"
    />
    <Path d="M3.579 9a6.2 6.2 0 0 1 12.4 0" fill="#D80027" />
  </Svg>
)

export default GL
