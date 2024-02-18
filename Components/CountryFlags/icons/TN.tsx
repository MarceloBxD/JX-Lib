import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const TN = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
      <Path
        d="M13.5 14.063a5.063 5.063 0 1 0 0-10.126 5.063 5.063 0 0 0 0 10.126Z"
        fill="#fff"
      />
      <Path
        d="m14.124 7.064.868 1.197 1.407-.456-.87 1.196.868 1.197-1.406-.458-.87 1.196.001-1.479L12.716 9l1.407-.456V7.064Z"
        fill="#D80027"
      />
      <Path
        d="M14.65 11.992a2.991 2.991 0 1 1 1.424-5.624 3.682 3.682 0 1 0 0 5.264 2.98 2.98 0 0 1-1.423.36Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default TN
