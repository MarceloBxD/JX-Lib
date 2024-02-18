import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const GE = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M.96 0h25.2v18H.96V0Z" fill="#fff" />
      <Path
        d="M11.76 7.2H0v3.6h11.76V18h3.6v-7.2h11.76V7.2H15.36V0h-3.6v7.2Z"
        fill="#EB000E"
      />
      <Path
        d="m20.76 3.24-.24-1.44h1.2l-.24 1.44L22.92 3v1.2l-1.44-.24.24 1.44h-1.2l.24-1.44-1.44.24V3l1.44.24Zm-15.24 0L5.28 1.8h1.2l-.24 1.44L7.68 3v1.2l-1.44-.24.24 1.44h-1.2l.24-1.44-1.44.24V3l1.44.24Zm0 10.8-.24-1.44h1.2l-.24 1.44 1.44-.24V15l-1.44-.24.24 1.44h-1.2l.24-1.44-1.44.24v-1.2l1.44.24Zm15.24 0-.24-1.44h1.2l-.24 1.44 1.44-.24V15l-1.44-.24.24 1.44h-1.2l.24-1.44-1.44.24v-1.2l1.44.24Z"
        fill="#EB000E"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default GE
