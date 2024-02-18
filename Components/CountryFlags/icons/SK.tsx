import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SK = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 5.87h27v6.26H0V5.87Z" fill="#0052B4" />
    <Path d="M0 12.13h27V18H0v-5.87Z" fill="#D80027" />
    <Path
      d="M6.827 5.087v4.49c0 2.553 3.337 3.336 3.337 3.336S13.5 12.13 13.5 9.577v-4.49H6.827Z"
      fill="#fff"
    />
    <Path
      d="M7.706 5.219v4.32c0 .29.064.562.19.818h4.535c.127-.256.19-.529.19-.817V5.219H7.707Z"
      fill="#D80027"
    />
    <Path
      d="M11.67 8.231h-1.13v-.753h.754v-.753h-.754v-.753h-.753v.753h-.753v.753h.753v.753h-1.13v.754h1.13v.753h.753v-.753h1.13V8.23Z"
      fill="#fff"
    />
    <Path
      d="M8.924 11.408c.486.305.984.482 1.24.56a5.415 5.415 0 0 0 1.24-.56c.489-.308.832-.66 1.027-1.052a1.312 1.312 0 0 0-1.06-.207 1.318 1.318 0 0 0-2.414 0 1.32 1.32 0 0 0-1.06.207c.195.392.538.744 1.027 1.052Z"
      fill="#0052B4"
    />
  </Svg>
)

export default SK
