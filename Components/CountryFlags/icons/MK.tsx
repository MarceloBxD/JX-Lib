import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const MK = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#FFDA44" />
      <Path
        d="M20.243 18 13.5 8.804 14.915 18h5.328ZM7.043 0 13.5 8.804 12.146 0H7.043Zm5.042 18L13.5 8.804 6.757 18h5.328ZM0 0v6.727l13.5 2.077L1.494 0H0Zm0 18h.96L13.5 8.804 0 10.881V18Zm13.5-9.196L27 6.727V0h-1.494L13.5 8.804ZM14.854 0 13.5 8.804 19.956 0h-5.101ZM27 18V10.88L13.5 8.804 26.04 18H27Z"
        fill="#D80027"
      />
      <Path
        d="M13.5 11.934a3.13 3.13 0 1 0 0-6.26 3.13 3.13 0 0 0 0 6.26Z"
        fill="#D80027"
      />
      <Path
        d="M13.5 11.152a2.348 2.348 0 1 0 0-4.696 2.348 2.348 0 0 0 0 4.696Z"
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

export default MK
