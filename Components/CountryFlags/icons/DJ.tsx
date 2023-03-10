import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const DJ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v17.998H0V0Z" fill="#12AD2B" />
      <Path d="M27 0v8.79L0 9.008V0h27Z" fill="#6AB2E7" />
      <Path d="M13.5 9.002 0 17.998V0l13.5 9.002Z" fill="#fff" />
      <Path
        d="m4.736 4.878.896 2.763h2.91L6.192 9.355l.896 2.763-2.351-1.708-2.352 1.708.896-2.763L.928 7.641H3.84l.897-2.763Z"
        fill="#D7141A"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v17.998H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default DJ
