import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SY = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path d="M0 0h27v6H0V0Z" fill="#D80027" />
      <Path d="M0 12h27v6H0v-6Z" fill="#000" />
      <Path
        d="m9.878 6.848.485 1.494h1.572l-1.272.924.486 1.495-1.271-.924-1.272.924.486-1.495-1.272-.924h1.572l.486-1.494Zm7.244 0 .486 1.494h1.572l-1.272.924.486 1.495-1.272-.924-1.271.924.486-1.495-1.272-.924h1.572l.485-1.494Z"
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

export default SY
