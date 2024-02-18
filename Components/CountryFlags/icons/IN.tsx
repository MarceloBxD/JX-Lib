import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IN = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M.91 0h25.18v18H.91V0Z" fill="#181A93" />
    <Path d="M0 0h27v6H0V0Z" fill="#FFA44A" />
    <Path d="M0 12h27v6H0v-6Z" fill="#1A9F0B" />
    <Path d="M0 6h27v6H0V6Z" fill="#fff" />
    <Path d="M13.5 10.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" fill="#fff" />
    <Path
      d="M13.5 11.4A2.406 2.406 0 0 1 11.1 9c0-1.321 1.079-2.4 2.4-2.4s2.4 1.079 2.4 2.4c0 1.32-1.079 2.4-2.4 2.4Zm0-.6c.958 0 1.8-.842 1.8-1.8 0-.958-.837-1.8-1.8-1.8-.963 0-1.8.842-1.8 1.8 0 .958.842 1.8 1.8 1.8Z"
      fill="#181A93"
    />
    <Path
      d="M13.5 10.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
      fill="#181A93"
    />
  </Svg>
)

export default IN
