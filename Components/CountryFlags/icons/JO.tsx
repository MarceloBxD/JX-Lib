import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const JO = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path d="M0 0h27v6H0V0Z" fill="#000" />
      <Path d="M0 12h27v6H0v-6Z" fill="#6DA544" />
      <Path d="M13.5 9 0 18V0l13.5 9Z" fill="#D80027" />
      <Path
        d="m4.109 7.354.415.869.938-.217-.42.866.754.599-.939.211.003.963-.751-.602-.751.602.002-.963-.939-.211.754-.599-.42-.866.938.217.416-.869Z"
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

export default JO
