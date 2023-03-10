import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ZM = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#496E2D" />
      <Path
        d="M25.875 5.809h-2.531a.844.844 0 0 0-1.688 0h-2.53c0 .466.405.843.87.843h-.027c0 .466.377.844.844.844 0 .466.377.844.843.844h1.688a.844.844 0 0 0 .844-.844.844.844 0 0 0 .843-.844h-.028c.466 0 .872-.377.872-.843Z"
        fill="#FF9811"
      />
      <Path d="M18 9h3v9h-3V9Z" fill="#D80027" />
      <Path d="M24 9h3v9h-3V9Z" fill="#FF9811" />
      <Path d="M21 9h3v9h-3V9Z" fill="#000" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default ZM
