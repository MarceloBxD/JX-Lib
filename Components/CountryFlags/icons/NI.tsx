import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NI = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v6H0V0Zm0 12h27v6H0v-6Z" fill="#338AF3" />
    <Path
      d="M13.5 6.809a2.191 2.191 0 1 0 0 4.382 2.191 2.191 0 0 0 0-4.382Zm0 3.443a1.252 1.252 0 1 1 0-2.504 1.252 1.252 0 0 1 0 2.504Z"
      fill="#FFDA44"
    />
    <Path
      d="M14.584 9.313 13.5 9l-1.084.313-.362.626h2.892l-.362-.626Z"
      fill="#0052B4"
    />
    <Path
      d="m13.5 7.435-.723 1.252L13.5 9l.723-.313-.723-1.252Z"
      fill="#338AF3"
    />
    <Path d="M12.416 9.313h2.168l-.361-.626h-1.446l-.361.626Z" fill="#6DA544" />
  </Svg>
)

export default NI
