import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const BV = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0-.818h27v19.636H0V-.818Z" fill="#EF2B2D" />
      <Path d="M7.364-.818h4.909v19.636h-4.91V-.818Z" fill="#fff" />
      <Path d="M0 6.546h27v4.909H0v-4.91Z" fill="#fff" />
      <Path d="M8.59-.818h2.456v19.636H8.59V-.818Z" fill="#002868" />
      <Path d="M0 7.772h27v2.455H0V7.772Z" fill="#002868" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default BV
