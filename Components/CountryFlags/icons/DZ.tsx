import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const DZ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v17.998H0V0Z" fill="#41662E" />
      <Path d="M13.5 0H27v17.998H13.5V0Z" fill="#fff" />
      <Path
        d="m18.009 5.553-1.55 2.13-2.505-.812 1.55 2.13-1.55 2.131 2.504-.812 1.55 2.13V9.814l2.506-.818-2.505-.812V5.553Z"
        fill="#D80027"
      />
      <Path
        d="M16.342 14.592a5.593 5.593 0 0 1-5.59-5.59A5.593 5.593 0 0 1 19 4.082a6.878 6.878 0 1 0-4.81 11.791c1.873 0 3.57-.749 4.81-1.962a5.5 5.5 0 0 1-2.658.68Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v17.998H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default DZ
