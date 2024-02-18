import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BT = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M.012 0h26.976v18H.012V0Z" fill="#FF7415" />
    <Path d="M26.988 0H.012v18" fill="#FFDA44" />
    <Path
      d="M6.793 13.477s1.844 2.848 3.547 1.707c2.996-2-3.633-5.727-.152-8.047 3.07-2.047 4.035 5.457 7.25 3.313 3.105-2.075-3.41-5.875-.489-7.829 1.762-1.171 3.54 1.72 3.54 1.72"
      stroke="#fff"
      strokeWidth={2.214}
      strokeMiterlimit={10}
    />
  </Svg>
)

export default BT
