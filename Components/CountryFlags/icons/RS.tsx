import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const RS = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#0052B4" />
      <Path d="M0 0h27v6H0V0Z" fill="#D80027" />
      <Path d="M0 12h27v6H0v-6Z" fill="#fff" />
      <Path
        d="M6.827 5.087v4.49c0 2.553 3.337 3.336 3.337 3.336S13.5 12.13 13.5 9.577v-4.49H6.827Z"
        fill="#D80027"
      />
      <Path
        d="M8.207 5.87h3.913V4.303l-.782.391-1.174-1.174L8.99 4.695l-.783-.39v1.564Zm4.51 4.331-2.543-2.543L7.631 10.2l.83.83 1.713-1.713 1.713 1.713.83-.83Z"
        fill="#FFDA44"
      />
      <Path
        d="M12.717 7.826h-1.186a.783.783 0 1 0-1.367-.76.782.782 0 1 0-1.367.76H7.63c0 .432.376.783.808.783h-.026c0 .432.35.782.783.782 0 .383.275.7.637.769l-.616 1.392a2.535 2.535 0 0 0 1.914 0l-.617-1.392a.782.782 0 0 0 .638-.769c.432 0 .783-.35.783-.782h-.026c.432 0 .808-.35.808-.783Z"
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

export default RS
