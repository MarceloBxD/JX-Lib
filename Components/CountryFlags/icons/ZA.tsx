import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ZA = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M6.013 9 0 2.984v12.033L6.013 9Z" fill="#000" />
    <Path d="M8.5 9 0 .494v2.49L6.013 9 0 15.017v2.486L8.5 9Z" fill="#FFB915" />
    <Path
      d="M26.886 10.76c.003-.022.042-.046.114-.069V7.24H11.739L4.499 0H0v.494L8.5 9 0 17.502V18h4.5l7.239-7.24h15.147Z"
      fill="#007847"
    />
    <Path d="M26.535 12.521H12.468L6.99 18H27V12.52h-.465Z" fill="#000C8A" />
    <Path d="M26.535 5.478H27V0H6.99l5.478 5.478h14.067Z" fill="#E1392D" />
  </Svg>
)

export default ZA
