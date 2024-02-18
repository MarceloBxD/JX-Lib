import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TZ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#338AF3" />
    <Path d="M0 18V0h27" fill="#6DA544" />
    <Path d="M27 3.527V0h-5.29L0 14.473V18h5.29L27 3.527Z" fill="#FFDA44" />
    <Path d="M27 0v2.116L3.174 18H0v-2.116L23.826 0H27Z" fill="#000" />
  </Svg>
)

export default TZ
