import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const PK = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="m20.751 4.492.924.996 1.232-.571-.661 1.186.923.995-1.332-.262-.661 1.186-.162-1.349-1.333-.262 1.232-.57-.162-1.349Z"
        fill="#fff"
      />
      <Path d="M0 .001h27v18H0V0Z" fill="#fff" />
      <Path d="M6.75 0H27v18H6.75V0Z" fill="#01411C" />
      <Path
        d="M19.085 11.257a3.656 3.656 0 1 1-2.616-6.59 4.5 4.5 0 1 0 3.768 5.215 3.642 3.642 0 0 1-1.152 1.375Zm-.07-6.64.922.994 1.23-.57-.66 1.184.922.994-1.33-.262-.66 1.184-.162-1.346-1.33-.262 1.23-.57-.162-1.346Z"
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

export default PK
