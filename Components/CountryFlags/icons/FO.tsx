import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const FO = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v17.998H0V0Z" fill="#fff" />
      <Path
        d="M27 11.312H10.874v6.686h-4.63v-6.687H0V6.688h6.244V0h4.63v6.687H27v4.625Z"
        fill="#0F61A5"
      />
      <Path
        d="M27 7.873v2.252H9.687v7.873H7.436v-7.873H0V7.873h7.436V0h2.251v7.873H27Z"
        fill="#E50E3D"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v17.998H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default FO
