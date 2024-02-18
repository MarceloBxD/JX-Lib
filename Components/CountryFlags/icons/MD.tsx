import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MD = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#FFDA44" />
    <Path d="M18 0h9v18h-9V0Z" fill="#D80027" />
    <Path d="M0 0h9v18H0V0Z" fill="#0052B4" />
    <Path
      d="M10.853 6.795H12.6l.874-2.621.873 2.62h1.748v5.243l-2.621 1.753-2.621-1.748V6.795ZM12.6 8.548v2.62h1.747v-2.62H12.6Z"
      fill="#AF7F59"
    />
  </Svg>
)

export default MD
