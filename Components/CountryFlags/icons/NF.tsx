import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NF = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path
      d="M0 0h9v18H0V0Zm18 0h9v18h-9V0Zm-2 11.92-2.526-8-2.527 8h1.895v2.106h1.263v-2.105H16Z"
      fill="#007B23"
    />
  </Svg>
)

export default NF
