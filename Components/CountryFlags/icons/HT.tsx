import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const HT = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v9.053H0V0Z" fill="#A2001D" />
      <Path d="M0 9.053h27v9.052H0V9.053Z" fill="#0052B4" />
      <Path
        d="m20.074 13.237-5.827-.726-5.831.726V4.495h11.658v8.742Z"
        fill="#fff"
      />
      <Path
        d="M14.247 12.51a2.916 2.916 0 1 0 0-5.831 2.916 2.916 0 0 0 0 5.831Z"
        fill="#0052B4"
      />
      <Path
        d="M14.247 11.053a1.458 1.458 0 1 0 0-2.916 1.458 1.458 0 0 0 0 2.915Z"
        fill="#A2001D"
      />
      <Path d="M12.058 5.953h4.374l-2.185 2.184-2.19-2.184Z" fill="#6DA544" />
      <Path d="M13.516 7.41h1.458v4.369h-1.458V7.41Z" fill="#FFDA44" />
      <Path
        d="M16.574 11.342h-4.658l-3.5 1.894h11.658l-3.5-1.894Z"
        fill="#6DA544"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default HT
