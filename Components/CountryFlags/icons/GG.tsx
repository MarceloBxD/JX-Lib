import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GG = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path
      d="M16.21 0h-5.473v6.247H0v5.474h10.737V18h5.473v-6.279H27V6.247H16.21V0Z"
      fill="#D80027"
    />
    <Path
      d="m19.4 9.895 1.368.91V7.158l-1.368.91h-5.016v-5.01l.91-1.369h-3.641l.91 1.369v5.01H7.547l-1.368-.91v3.647l1.368-.91h5.016v5.01l-.91 1.369h3.642l-.91-1.369v-5.01H19.4Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default GG
