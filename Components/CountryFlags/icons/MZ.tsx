import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const MZ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path d="M0 12.526h27V18H0v-5.474Z" fill="#F4D900" />
      <Path d="M0 0h27v5.474H0V0Z" fill="#006D66" />
      <Path d="M0 6.263h27v5.473H0V6.263Z" fill="#000" />
      <Path d="M13.474 8.983 0 17.965V0l13.474 8.983Z" fill="#CB0F31" />
      <Path
        d="m4.394 5.78.795 2.447h2.573L5.68 9.739l.795 2.447-2.081-1.512-2.082 1.512.795-2.447-2.082-1.512h2.573l.796-2.448Z"
        fill="#F4D900"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default MZ
