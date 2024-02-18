import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const EH = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M.012 0h26.976v18H.012V0Z" fill="#fff" />
      <Path d="M.012 0h26.976v6H.012V0Z" fill="#000" />
      <Path d="M.012 12.004h26.976v6H.012v-6Z" fill="#428823" />
      <Path
        d="M13.5 9.004.012 18V0L13.5 9.004Zm2.797 0c0-1.211.691-2.223 1.824-2.469a2.526 2.526 0 1 0-.543 4.992c.184 0 .367-.02.543-.054-1.133-.254-1.824-1.262-1.824-2.47Z"
        fill="#D80027"
      />
      <Path
        d="m19.242 6.813.543 1.671h1.754L20.117 9.52l.543 1.671-1.418-1.035-1.422 1.035.543-1.671-1.422-1.036H18.7l.543-1.671Z"
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

export default EH 
