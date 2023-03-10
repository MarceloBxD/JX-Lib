import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PY = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v6H0V0Z" fill="#D80027" />
    <Path d="M0 12h27v6H0v-6Z" fill="#0052B4" />
    <Path
      d="m15.27 6.93-.663.664a1.565 1.565 0 1 1-2.213 0l-.665-.664a2.504 2.504 0 1 0 3.542 0Z"
      fill="#6DA544"
    />
    <Path
      d="m13.5 7.762.233.717h.754l-.61.444.233.717-.61-.443-.61.443.233-.717-.61-.444h.754l.233-.717Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default PY
