import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MY = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path
      d="M0 0h27v1.284H0V0Zm0 2.574h27v1.284H0V2.574Zm0 2.568h27v1.284H0V5.142Zm0 2.574h27V9H0V7.716Zm0 2.568h27v1.284H0v-1.284Zm0 2.574h27v1.284H0v-1.284Zm0 2.568h27v1.284H0v-1.284Z"
      fill="#C00"
    />
    <Path d="M0 0h13.5v10.284H0V0Z" fill="#006" />
    <Path
      d="M8.068 2.216a3.118 3.118 0 0 0-4.01 1.836 3.118 3.118 0 0 0 1.837 4.01c.7.264 1.473.264 2.179 0A3.746 3.746 0 0 1 2.81 7.48a3.741 3.741 0 0 1 5.257-5.263Zm1.406 3.947L8.389 7.389l.285-1.61-1.632-.085L8.48 4.91 7.526 3.58l1.506.631.442-1.573.442 1.573 1.505-.631-.947 1.337 1.437.784-1.632.084.284 1.61-1.09-1.231Z"
      fill="#FC0"
    />
  </Svg>
)

export default MY
