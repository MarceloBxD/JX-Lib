import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LI = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
    <Path d="M0 0h27v9H0V0Z" fill="#0052B4" />
    <Path
      d="M7.858 5.163A1.33 1.33 0 0 0 6.526 3.83c-.342 0-.652.127-.89.337V3.39h.443V2.5h-.442v-.441h-.884V2.5H4.31v.89h.442v.783a1.331 1.331 0 0 0-.89-.336 1.33 1.33 0 0 0-.89 2.32v.785h4.438v-.784c.278-.248.447-.606.447-.995Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default LI
