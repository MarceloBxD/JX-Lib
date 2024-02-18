import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M.012 0h26.976v18H.012V0Z" fill="#fff" />
    <Path d="M.012 18h26.976V0L.012 18Z" fill="#012A87" />
    <Path d="M13.203 0H.012v8.8L13.203 0Z" fill="#F9D90F" />
    <Path
      d="m7.41 6.238.64 1.117h1.294L8.695 8.47l.649 1.12H8.05l-.64 1.118-.645-1.117h-1.29l.649-1.121-.648-1.114h1.289l.644-1.117Z"
      fill="#DC171D"
    />
    <Path
      d="M10.45 8.469a3.038 3.038 0 1 1-6.079 0 3.04 3.04 0 0 1 3.04-3.043 3.04 3.04 0 0 1 3.038 3.043Z"
      stroke="#000"
      strokeWidth={0.474}
      strokeMiterlimit={10}
    />
  </Svg>
)

export default SvgComponent
