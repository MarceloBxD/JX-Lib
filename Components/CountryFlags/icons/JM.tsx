import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const JM = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#6DA544" />
      <Path
        d="M11.383 9 0 16.59V1.41l11.383 7.59ZM27 1.412V16.59L15.617 9.001 27 1.41Z"
        fill="#000"
      />
      <Path
        d="m27 1.411-11.383 7.59L27 16.588V18h-2.116L13.5 10.41 2.116 18H0v-1.41L11.383 9 0 1.411V0h2.116L13.5 7.59 24.884 0H27v1.411Z"
        fill="#0052B4"
      />
      <Path
        d="m27 1.411-11.383 7.59L27 16.588V18h-2.116L13.5 10.41 2.116 18H0v-1.41L11.383 9 0 1.411V0h2.116L13.5 7.59 24.884 0H27v1.411Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default JM
