import * as React from "react"
import Svg, { Path } from "react-native-svg"

const KN = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
    <Path d="M26.947 0H0v18" fill="#6DA544" />
    <Path d="M16.195 0 0 10.237V18h10.89L27 7.816V0H16.195Z" fill="#FFDA44" />
    <Path d="M27 0h-6.726L0 13.126v4.821L6.642 18 27 4.821V0Z" fill="#000" />
    <Path
      d="m7.426 9.842 1.642 1.263 1.7-1.168-.689 1.947 1.637 1.258-2.063-.057-.695 1.947-.584-1.98-2.063-.057 1.7-1.168-.585-1.985Zm8.921-6.115 1.642 1.257 1.7-1.168L19 5.763l1.637 1.258-2.063-.058-.695 1.948-.584-1.98-2.063-.057 1.705-1.168-.59-1.98Z"
      fill="#fff"
    />
  </Svg>
)

export default KN
