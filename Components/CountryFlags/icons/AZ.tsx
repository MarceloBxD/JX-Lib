import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AZ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#EF3340" />
    <Path d="M0 0h27v6H0V0Z" fill="#00B5E2" />
    <Path d="M0 12h27v6H0v-6Z" fill="#509E2F" />
    <Path
      d="M13.979 11.19c-1.21 0-2.19-.98-2.19-2.19a2.188 2.188 0 0 1 3.232-1.926A2.694 2.694 0 0 0 10.442 9a2.693 2.693 0 0 0 4.58 1.927c-.312.168-.664.263-1.043.263Z"
      fill="#fff"
    />
    <Path
      d="m15.663 7.484.29.816.784-.374-.374.785.816.29-.816.289.374.784-.784-.374-.29.816-.29-.816-.784.374.374-.784-.816-.29.816-.29-.373-.784.784.374.29-.816Z"
      fill="#fff"
    />
  </Svg>
)

export default AZ
