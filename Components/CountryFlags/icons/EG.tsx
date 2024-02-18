import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const EG = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v17.998H0V0Z" fill="#fff" />
      <Path d="M0 0h27v6.001H0V0Z" fill="#D80027" />
      <Path d="M0 12.002h27v6.001H0v-6.001Z" fill="#000" />
      <Path
        d="M11.617 10.779s0-3.08.238-3.412c.163-.227.886.274 1.197.237 0 0 .221-.395.237-.633.016-.242-.058-.4-.258-.327 0 0-.064-.11.026-.174.084-.063.295.006.295.006s-.026-.053.085-.048c.153.01.38.074.39.295.01.164.016.406.021.46.037.358.142.458.142.458s.97-.485 1.16-.274c.175.2.238 3.412.238 3.412l-.955-.886.639 1.555s-.76.127-1.524.127c-.765 0-1.64-.221-1.64-.221l.727-1.488-1.018.913Z"
        fill="#C09300"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v17.998H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default EG
