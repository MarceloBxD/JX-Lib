import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const OM = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M27 0H0v18h27V0Z" fill="#D80027" />
      <Path d="M7.262 0h19.843v6H7.262V0Z" fill="#fff" />
      <Path d="M7.262 12.105h19.843v6H7.262v-6Z" fill="#4A7C3A" />
      <Path
        d="M2.121 1.852s1.953 2.527 2.672 2.87c.723.34.902.298.902.298"
        stroke="#fff"
        strokeWidth={0.526}
        strokeMiterlimit={2}
      />
      <Path
        d="M3.723 1.852v1.585m1.539-1.585s-1.953 2.39-2.457 2.757c-.504.371-.985.41-.985.41l3.442-3.167Zm-2.54 1.585h1.993-1.992Z"
        stroke="#fff"
        strokeWidth={0.526}
        strokeMiterlimit={2}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default OM
