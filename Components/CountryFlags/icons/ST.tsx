import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ST = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#FFDA44" />
      <Path d="M0 0h27v6H0V0Zm0 12h27v6H0v-6Z" fill="#6DA544" />
      <Path d="M13.5 9 0 18V0l13.5 9Z" fill="#D80027" />
      <Path
        d="m15.928 7.435.389 1.195h1.257l-1.017.74.389 1.195-1.018-.739-1.017.74.389-1.197-1.017-.739h1.257l.388-1.195Zm3.913 0 .389 1.195h1.257l-1.017.74.389 1.195-1.018-.739-1.017.74.389-1.197-1.017-.739h1.257l.388-1.195Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default ST
