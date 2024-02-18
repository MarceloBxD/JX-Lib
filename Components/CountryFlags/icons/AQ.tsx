import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AQ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#3A7DCE" />
    <Path
      d="M4.355 4.536 7.62 6.822l1.96-.508.834-2.94 2.214-1.306 3.339.508 3.81 1.996.218 3.267 1.234.435v3.339l-2.359 4.173-2.83.871-2.614-.617.654-1.089-.29-1.16-.364.326-5.879-.908-1.778-3.084.726-1.67-1.778-2.25-.363-1.669Z"
      fill="#fff"
    />
  </Svg>
)

export default AQ
