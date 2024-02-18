import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const RW = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#338AF3" />
      <Path d="M0 9h27v4.304H0V9Z" fill="#FFDA44" />
      <Path d="M0 13.304h27v4.695H0v-4.695Z" fill="#496E2D" />
      <Path
        d="m14.674 5.267 1.1.517-.586 1.064 1.193-.228.151 1.206.832-.887.831.887.151-1.206 1.194.228-.585-1.064 1.099-.517-1.1-.517.586-1.065-1.194.229-.15-1.206-.832.887-.832-.887-.15 1.206-1.194-.229.585 1.065-1.1.517Z"
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

export default RW
