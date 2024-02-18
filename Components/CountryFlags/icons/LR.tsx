import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LR = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 0h26.947v1.637H0V0Zm0 3.274h26.947V4.91H0V3.274Zm0 3.279h26.947v1.636H0V6.553Zm0 3.279h26.947v1.636H0V9.832Zm0 3.29h26.947v1.636H0V13.12Zm0 3.241h26.947V18H0v-1.637Z"
      fill="#BF0A30"
    />
    <Path d="M0 0h8.19v8.19H0V0Z" fill="#002868" />
    <Path
      d="m4.095 1.59.563 1.731h1.821L5.005 4.395l.563 1.732-1.473-1.069L2.62 6.127l.563-1.732-1.473-1.074h1.82l.564-1.731Z"
      fill="#fff"
    />
  </Svg>
)

export default LR
