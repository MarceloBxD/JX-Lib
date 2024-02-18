import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IQ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v6H0V0Z" fill="#CE1126" />
    <Path d="M0 12h27v6H0v-6Z" fill="#000" />
    <Path
      d="M11.537 8.458H9.995a.695.695 0 0 1 .673-.521V6.89c-.963 0-1.742.784-1.742 1.742V9.5h2.61c.096 0 .175.08.175.174v.347H8.226v1.048h4.532V9.674a1.22 1.22 0 0 0-1.221-1.216Zm2.61 1.569V6.89h-1.042v4.184h1.742v-1.047h-.7Zm3.485 0V6.89h-1.043v3.137h-.347V8.984h-1.047v2.09h3.137v-1.047h-.7Z"
      fill="#547C31"
    />
  </Svg>
)

export default IQ
