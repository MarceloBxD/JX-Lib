import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CL = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
    <Path d="M10.316 0H27v9H10.316V0Z" fill="#fff" />
    <Path d="M0 0h10.316v9H0V0Z" fill="#0037A1" />
    <Path
      d="m5.158 1.29.795 2.446h2.573L6.442 5.247l.8 2.447-2.084-1.51-2.084 1.51.8-2.447-2.085-1.51h2.574l.795-2.448Z"
      fill="#fff"
    />
  </Svg>
)

export default CL
