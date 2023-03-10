import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const KP = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#91DC5A" />
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path d="M0 0h27v3.016H0V0Zm0 14.984h27V18H0v-3.016Z" fill="#0052B4" />
      <Path d="M0 4.213h27v9.576H0V4.213Z" fill="#D80027" />
      <Path
        d="M10.037 12.463a3.463 3.463 0 1 0 0-6.926 3.463 3.463 0 0 0 0 6.926Z"
        fill="#fff"
      />
      <Path
        d="m10.037 5.537.777 2.391h2.518l-2.038 1.478.783 2.399-2.04-1.485L8 11.802l.78-2.396-2.037-1.478H9.26l.777-2.39Z"
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

export default KP
