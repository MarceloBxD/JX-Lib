import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AW = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M27 0H0v18h27V0Z" fill="#338AF3" />
    <Path
      d="m4.238 7.207-3.144-1.39 3.144-1.383 1.387-3.141 1.383 3.14 3.144 1.383-3.144 1.391-1.383 3.14-1.387-3.14Z"
      fill="#fff"
    />
    <Path
      d="m5.625 3.02.852 1.94 1.941.856-1.941.856-.852 1.941-.855-1.941-1.942-.856 1.942-.855.855-1.941Z"
      fill="#F30028"
    />
    <Path
      d="M0 11.32h27v1.168H0V11.32Zm0 2.336h27v1.168H0v-1.168Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default AW
