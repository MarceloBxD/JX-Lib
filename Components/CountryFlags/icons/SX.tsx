import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SX = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#0052B4" />
      <Path d="M27 0v8.79L0 9.01V0h27Z" fill="#D80027" />
      <Path d="M13.5 9 0 18V0l13.5 9Z" fill="#fff" />
      <Path
        d="M3.144 9a3.134 3.134 0 1 0 6.248 0H3.144ZM6.268 7.554a.964.964 0 1 0 0-1.929.964.964 0 0 0 0 1.929Z"
        fill="#FFDA44"
      />
      <Path
        d="M4.098 6.349v3.134c0 1.66 2.17 2.17 2.17 2.17s2.17-.51 2.17-2.17V6.349h-4.34Z"
        fill="#D80027"
      />
      <Path
        d="M6.269 10.643c-.403-.145-1.206-.515-1.206-1.16v-2.17h2.41v2.17c0 .647-.804 1.016-1.204 1.16Z"
        fill="#338AF3"
      />
      <Path
        d="M6.75 8.518v-.482l-.482-.241-.482.241v.482l-.241.241v.964H6.99V8.76l-.241-.24Z"
        fill="#F3F3F3"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SX
