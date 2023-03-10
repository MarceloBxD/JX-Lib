import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BR = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#009B3A" />
    <Path
      d="m13.5 1.016 10.784 7.968L13.5 16.947 2.663 8.984 13.5 1.016Z"
      fill="#FEDF00"
    />
    <Path
      d="M13.5 13.232a4.232 4.232 0 1 0 0-8.463 4.232 4.232 0 0 0 0 8.463Z"
      fill="#fff"
    />
    <Path
      d="M11.363 8.72c-.731 0-1.442.111-2.11.317a4.226 4.226 0 0 0 7.69 2.368 7.151 7.151 0 0 0-5.58-2.684Zm6.263 1.07c.048-.264.08-.532.08-.811a4.232 4.232 0 0 0-8.122-1.674 8.743 8.743 0 0 1 8.042 2.484Z"
      fill="#002776"
    />
  </Svg>
)

export default BR
