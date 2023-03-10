import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TG = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#FFDA44" />
    <Path
      d="M0 0h27v3.6H0V0Zm0 14.4h27V18H0v-3.6Zm0-7.2h27v3.6H0V7.2Z"
      fill="#496E2D"
    />
    <Path d="M0 0h10.76v10.76H0V0Z" fill="#D80027" />
    <Path
      d="m5.38 2.563.7 2.153h2.263l-1.831 1.33.7 2.152-1.832-1.33-1.83 1.33.699-2.152-1.831-1.33h2.263l.7-2.153Z"
      fill="#fff"
    />
  </Svg>
)

export default TG
