import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SN = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#FFDA44" />
      <Path d="M17.413 0H27v18h-9.587V0Z" fill="#D80027" />
      <Path
        d="M0 0h9.587v18H0V0Zm13.5 5.87.777 2.39h2.514L14.758 9.74l.777 2.391-2.034-1.478-2.034 1.478.777-2.391-2.034-1.478h2.514l.777-2.392Z"
        fill="#496E2D"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SN
