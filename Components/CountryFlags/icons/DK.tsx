import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DK = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#C60C30" />
    <Path
      d="M10 0H6.842v7.368H0v3.158h6.842V18H10v-7.474h17V7.368H10V0Z"
      fill="#fff"
    />
  </Svg>
)


export default DK
