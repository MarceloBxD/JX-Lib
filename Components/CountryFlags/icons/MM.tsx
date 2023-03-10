import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MM = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#6DA544" />
    <Path d="M0 0h27v6H0V0Z" fill="#FFDA44" />
    <Path d="M0 12h27v6H0v-6Z" fill="#D80027" />
    <Path
      d="M20.25 7.484h-5.156L13.5 2.58l-1.594 4.904H6.75l4.172 3.031-1.594 4.904 4.172-2.995 4.172 2.995-1.594-4.904 4.172-3.03Z"
      fill="#fff"
    />
  </Svg>
)

export default MM
