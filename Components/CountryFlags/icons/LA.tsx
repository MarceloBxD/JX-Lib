import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LA = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#0052B4" />
    <Path d="M0 .005h27v4.774H0V.005Zm0 13.22h27V18H0v-4.774Z" fill="#D80027" />
    <Path
      d="M13.5 12.468a3.468 3.468 0 1 0 0-6.937 3.468 3.468 0 0 0 0 6.937Z"
      fill="#fff"
    />
  </Svg>
)

export default LA
