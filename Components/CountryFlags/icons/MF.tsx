import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MF = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#003787" />
    <Path d="M0 0h27L15 12v6h-3v-6L0 0Z" fill="#fff" />
    <Path d="M13.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#F9D90F" />
    <Path d="M11 7.5h5L13.5 12 11 7.5Z" fill="#fff" />
    <Path d="m13.5 12-4-3.75h8l-4 3.75Z" fill="#CF142B" />
  </Svg>
)

export default MF
