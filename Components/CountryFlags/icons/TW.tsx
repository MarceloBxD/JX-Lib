import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TW = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
    <Path d="M0 0h13.5v9H0V0Z" fill="#0052B4" />
    <Path
      d="m9.832 4.5-1.26.592.67 1.22-1.366-.262-.174 1.381-.952-1.016-.952 1.016-.174-1.381-1.367.261.67-1.219L3.669 4.5l1.26-.592-.67-1.22 1.366.262.174-1.382.952 1.016.952-1.016.174 1.382 1.367-.262-.67 1.22 1.259.592Z"
      fill="#fff"
    />
    <Path
      d="M6.75 6.03a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06Z"
      fill="#0052B4"
    />
    <Path
      d="M6.75 5.523a1.024 1.024 0 0 1 0-2.045 1.024 1.024 0 0 1 0 2.045Z"
      fill="#fff"
    />
  </Svg>
)

export default TW
