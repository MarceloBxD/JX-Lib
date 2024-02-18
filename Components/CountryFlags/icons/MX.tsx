import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MX = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M18 0H0v17.963h27V0h-9Z" fill="#DC2339" />
    <Path d="M0 0h9v18H0V0Z" fill="#11865D" />
    <Path d="M9 0h9v18H9V0Z" fill="#fff" />
    <Path
      d="M10.305 9.01c0 1.138.606 2.196 1.595 2.764a.638.638 0 1 0 .642-1.105 1.91 1.91 0 0 1-.958-1.658.64.64 0 0 0-1.279 0Zm4.916 2.69a3.181 3.181 0 0 0 1.474-2.69.636.636 0 1 0-1.274 0c0 .653-.332 1.264-.884 1.617a.64.64 0 1 0 .663 1.095c0-.011.01-.016.021-.022Z"
      fill="#8C9157"
    />
    <Path
      d="M13.5 10.29c.706 0 1.279-.858 1.279-1.916 0-1.058-.573-1.916-1.279-1.916s-1.279.858-1.279 1.916c0 1.058.573 1.916 1.279 1.916Z"
      fill="#C59262"
    />
  </Svg>
)

export default MX
