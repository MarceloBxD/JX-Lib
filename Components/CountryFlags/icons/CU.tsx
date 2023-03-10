import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const CU = (props) => (
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
        d="M0 0h27v3.602H0V0Zm0 7.198h27V10.8H0V7.198Zm0 7.204h27v3.601H0v-3.601Z"
        fill="#0052B4"
      />
      <Path d="M13.5 9.002 0 17.998V0l13.5 9.002Z" fill="#D80027" />
      <Path
        d="m4.562 5.875.67 2.067h2.177L5.648 9.218l.675 2.073-1.761-1.276L2.8 11.29l.675-2.073-1.761-1.276h2.173l.675-2.067Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v17.998H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default CU
