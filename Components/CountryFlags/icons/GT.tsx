import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GT = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M27 0H0v18h27V0Z" fill="#fff" />
    <Path d="M0 0h9v18H0V0Zm18 0h9v18h-9V0Z" fill="#338AF3" />
    <Path
      d="M14.816 8.2c0 .741-.601 1.343-1.343 1.343a1.343 1.343 0 1 1 1.343-1.344Z"
      fill="#DCC26D"
    />
    <Path
      d="M10.223 8.207c0 1.16.62 2.234 1.62 2.813a.65.65 0 0 0 .653-1.125 1.95 1.95 0 0 1-.976-1.688.654.654 0 0 0-.653-.656.645.645 0 0 0-.644.656Zm5.004 2.742a3.245 3.245 0 0 0 1.5-2.742c0-.36-.29-.656-.653-.656a.654.654 0 0 0-.652.656c0 .668-.344 1.29-.902 1.645a.653.653 0 0 0 .68 1.113c.01-.008.015-.012.027-.016Z"
      fill="#628A40"
    />
  </Svg>
)

export default GT
