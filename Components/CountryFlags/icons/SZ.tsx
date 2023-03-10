import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SZ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#2B5DEA" />
    <Path d="M0 3h27v12H0V3Z" fill="#FFDF29" />
    <Path d="M0 4.5h27v9H0v-9Z" fill="#D70000" />
    <Path
      d="M13.5 5.142v7.716c3.429 0 5.142-2.571 6.429-3.858-1.287-1.287-3-3.858-6.429-3.858Z"
      fill="#fff"
    />
    <Path
      d="M13.5 5.142c-3 0-5.142 2.57-6.429 3.858 1.287 1.287 3.429 3.858 6.429 3.858V5.142Z"
      fill="#000"
    />
    <Path
      d="M10.389 7.629h.63v2.739h-.63v-2.74Zm1.557 0h.63v2.739h-.63v-2.74Z"
      fill="#fff"
    />
    <Path
      d="M14.334 7.629h.63v2.739h-.63v-2.74Zm1.557 0h.63v2.739h-.63v-2.74Z"
      fill="#000"
    />
  </Svg>
)

export default SZ
