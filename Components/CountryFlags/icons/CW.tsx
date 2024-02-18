import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CW = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#002B7F" />
    <Path d="M0 12.29h27v2.683H0V12.29Z" fill="#F9E814" />
    <Path
      d="m8.879 4.553.679 2.095h2.2l-1.779 1.29.679 2.089-1.779-1.29-1.779 1.29.679-2.09L6 6.647h2.2l.679-2.094ZM4.495 1.711l.41 1.258h1.316l-1.068.774.41 1.252-1.068-.774-1.069.774.41-1.252-1.068-.774H4.09l.406-1.258Z"
      fill="#fff"
    />
  </Svg>
)

export default CW
