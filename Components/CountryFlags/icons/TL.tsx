import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TL = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
    <Path
      d="M13.5 9 0 .282v2.333L8.217 9 0 15.384v2.333L13.5 9Z"
      fill="#FFDA44"
    />
    <Path d="M0 .282v17.435L9.978 9 0 .282Z" fill="#000" />
    <Path
      d="m2.33 6.751 1.314 1.243 1.588-.865-.776 1.634 1.313 1.243-1.793-.234-.777 1.634-.332-1.778-1.793-.234 1.588-.865-.332-1.778Z"
      fill="#fff"
    />
  </Svg>
)

export default TL
