import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const MH = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#1E509C" />
      <Path d="M27 9.269v-4.99L0 18 27 9.27Z" fill="#fff" />
      <Path d="M27 0v4.279L0 18 27 0Z" fill="#F18D36" />
      <Path
        d="m6.668 5.226-.41-2.847-.405 2.847L4.758 3.98l.563 1.663-1.658-.563 1.242 1.095-2.847.405 2.847.405L3.663 8.08l1.658-.563-.563 1.663 1.095-1.247.405 2.847.41-2.847 1.09 1.247L7.2 7.516l1.658.563-1.242-1.095 2.842-.405-2.842-.405 1.242-1.095-1.658.563.558-1.663-1.09 1.247Z"
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

export default MH
