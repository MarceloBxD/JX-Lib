import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SC = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M12.416 0 0 18 22.536 0h-10.12Z" fill="#FFDA44" />
    <Path d="M27 12.87 0 18h27v-5.13Z" fill="#6DA544" />
    <Path d="M27 0h-4.464L0 18 27 7.215V0Z" fill="#D80027" />
    <Path d="M0 0v18L12.416 0H0Z" fill="#0052B4" />
  </Svg>
)

export default SC
