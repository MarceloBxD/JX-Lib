import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CA = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path
      d="M0 0h7.474v18H0V0Zm19.526 0H27v18h-7.474V0Zm-3.394 10.842 2.652-1.326-1.326-.663V7.526l-2.653 1.327L16.132 6.2h-1.327L13.48 4.21 12.153 6.2h-1.327l1.327 2.653L9.5 7.526v1.327l-1.326.663 2.652 1.326-.663 1.326h2.653v1.99h1.326v-1.99h2.653l-.663-1.326Z"
      fill="red"
    />
  </Svg>
)

export default CA
