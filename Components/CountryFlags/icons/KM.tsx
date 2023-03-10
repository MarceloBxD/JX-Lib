import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const KM = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#0052B4" />
      <Path d="M0 0h27v4.5H0V0Z" fill="#FFDA44" />
      <Path d="M0 4.5h27V9H0V4.5Z" fill="#fff" />
      <Path d="M0 9h27v4.5H0V9Z" fill="#D80027" />
      <Path d="M13.5 9 0 18V0l13.5 9Z" fill="#6DA544" />
      <Path
        d="M3.62 9a2.74 2.74 0 0 1 2.152-2.676 2.74 2.74 0 1 0 0 5.35A2.74 2.74 0 0 1 3.62 9.001Z"
        fill="#fff"
      />
      <Path
        d="m5.742 6.652.145.449h.472l-.382.277.146.448-.381-.277-.382.277.146-.448-.382-.277h.472l.146-.449Zm0 1.174.145.449h.472l-.382.277.146.448-.381-.277L5.36 9l.146-.448-.382-.277h.472l.146-.449Zm0 1.174.145.449h.472l-.382.277.146.448-.381-.277-.382.277.146-.448-.382-.277h.472L5.742 9Zm0 1.174.145.449h.472l-.382.277.146.448-.381-.277-.382.277.146-.448-.382-.277h.472l.146-.449Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default KM
