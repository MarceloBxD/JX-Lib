import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CM = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#CE1126" />
    <Path d="M0 0h9v18H0V0Z" fill="#007A5E" />
    <Path
      d="M18 0h9v18h-9V0Zm-4.526 5.379.905 2.79h2.937l-2.374 1.726.905 2.79-2.373-1.722-2.374 1.721.905-2.79-2.373-1.726h2.936l.906-2.789Z"
      fill="#FCD116"
    />
  </Svg>
)

export default CM
