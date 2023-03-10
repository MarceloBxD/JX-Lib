import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NE = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v6H0V0Z" fill="#E05206" />
    <Path d="M0 12h27v6H0v-6Z" fill="#0DB02B" />
    <Path
      d="M13.5 10.688a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Z"
      fill="#E05206"
    />
  </Svg>
)

export default NE
