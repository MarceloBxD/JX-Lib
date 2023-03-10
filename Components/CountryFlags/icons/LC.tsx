import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LC = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#55B2FF" />
    <Path d="M7.816 15.69h11.368L13.5 2.31 7.816 15.69Z" fill="#F3F3F3" />
    <Path d="m9.79 14.353 3.71-8.437 3.71 8.437H9.79Z" fill="#333" />
    <Path d="M7.816 15.69h11.368L13.5 10.337 7.816 15.69Z" fill="#FFDA44" />
  </Svg>
)

export default LC
