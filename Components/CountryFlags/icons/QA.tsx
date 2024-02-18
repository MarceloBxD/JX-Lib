import * as React from "react"
import Svg, { Path } from "react-native-svg"

const QA = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h26.947v18H0V0Z" fill="#751A46" />
    <Path
      d="M0 0v18h7.91l1.985-1.032-1.984-.994 1.984-1-1.984-.995 1.984-1-1.984-1 1.984-.995-1.984-1 1.984-1L7.91 7.99l1.984-1-1.984-.994 1.984-1-1.984-1L9.895 3 7.91 2l1.984-.995L7.91 0H0Z"
      fill="#fff"
    />
  </Svg>
)

export default QA
