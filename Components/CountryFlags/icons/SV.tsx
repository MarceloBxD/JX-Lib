import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SV = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v6H0V0Zm0 12h27v6H0v-6Z" fill="#0052B4" />
    <Path d="M12.054 9.313 13.5 6.809l1.446 2.504h-2.892Z" fill="#FFDA44" />
    <Path
      d="m15.378 10.14-1.878.939-1.878-.94V8.889h3.756v1.252Z"
      fill="#6DA544"
    />
    <Path
      d="m15.27 6.916-.663.664a1.565 1.565 0 1 1-2.213 0l-.665-.664a2.504 2.504 0 1 0 3.541 0Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default SV
