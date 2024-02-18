import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PT = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
    <Path d="M10.37 0v18H0V0h10.37Z" fill="#6DA544" />
    <Path
      d="M10.37 12.375a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z"
      fill="#FFDA44"
    />
    <Path
      d="M8.471 7.313v2.109a1.898 1.898 0 0 0 3.797 0v-2.11H8.471Z"
      fill="#D80027"
    />
    <Path
      d="M10.37 10.055a.634.634 0 0 1-.633-.633v-.844h1.265v.844a.634.634 0 0 1-.632.633Z"
      fill="#fff"
    />
  </Svg>
)

export default PT
