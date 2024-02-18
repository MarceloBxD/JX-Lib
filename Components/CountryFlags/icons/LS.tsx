import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LS = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v6H0V0Z" fill="#0052B4" />
    <Path d="M0 11.979h27v6H0v-6Z" fill="#6DA544" />
    <Path
      d="m12.905 9 .405-1.215c.106-.31.269-.316.374 0L14.09 9l1.021 1.532c.09.137.069.332-.063.421 0 0-.363.421-1.552.421-1.19 0-1.553-.42-1.553-.42a.318.318 0 0 1-.063-.422L12.905 9Z"
      fill="#000"
    />
    <Path
      d="M13.5 9a1.188 1.188 0 1 1 0-2.379A1.188 1.188 0 1 1 13.5 9Zm0 0c.326 0 .595-.858.595-1.19a.597.597 0 0 0-.595-.594.597.597 0 0 0-.595.595c0 .331.263 1.189.595 1.189Z"
      fill="#000"
    />
  </Svg>
)

export default LS
