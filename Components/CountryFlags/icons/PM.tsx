import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const PM = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <Path d="M0-1.125h27v20.25H0v-20.25Z" fill="#fff" />
      <Path d="M0-1.125h8.999v20.25H0v-20.25Z" fill="#00267F" />
      <Path d="M18.001-1.125H27v20.25h-8.999v-20.25Z" fill="#F31830" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default PM
