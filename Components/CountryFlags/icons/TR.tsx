import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TR = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#E30A17" />
    <Path
      d="M13.668 6.242a4.022 4.022 0 0 0-2.384-.763C9.137 5.48 7.4 7.1 7.4 9.106c0 2.005 1.742 3.626 3.884 3.626.9 0 1.732-.284 2.384-.763a4.66 4.66 0 0 1-6.542.816 4.66 4.66 0 0 1-.815-6.543 4.66 4.66 0 0 1 7.357 0Zm2.1 3.464-.952 1.152.063-1.495-1.39-.547 1.437-.4.095-1.49.821 1.248L17.29 7.8l-.92 1.158.805 1.258-1.406-.51Z"
      fill="#fff"
    />
  </Svg>
)

export default TR
