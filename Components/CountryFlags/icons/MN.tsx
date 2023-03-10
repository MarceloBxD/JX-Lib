import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MN = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#095FAD" />
    <Path d="M18 0h9v18h-9V0ZM0 0h9v18H0V0Z" fill="#BE1229" />
    <Path
      d="M5.7 8.753h.779v3.905H5.7V8.753Zm-3.126 0h.779v3.905h-.78V8.753ZM4.526 11.485a.779.779 0 1 0 0-1.558.779.779 0 0 0 0 1.558ZM3.747 11.88h1.564v.778H3.747v-.779Zm0-3.127h1.564v.779H3.747v-.78ZM4.526 8.358a.779.779 0 1 0 0-1.558.779.779 0 0 0 0 1.558ZM4.016 6.521h1.026l-.516-.82-.51.82Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default MN
