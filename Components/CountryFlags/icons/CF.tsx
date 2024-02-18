import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const CF = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v17.998H0V0Z" fill="#D21034" />
      <Path
        d="M0 9.002h11.153V13.5H0V9.002Zm15.847 0H27V13.5H15.847V9.002Z"
        fill="#3A9927"
      />
      <Path d="M0 0v4.498h11.153V0h4.694v4.498H27V0H0Z" fill="#003082" />
      <Path
        d="M15.847 4.498H27v4.498H15.847V4.498ZM0 4.498h11.153v4.498H0V4.498Z"
        fill="#fff"
      />
      <Path
        d="M15.847 17.998h-4.694V13.5H0v4.498h27V13.5H15.847v4.498ZM5.574.453l.454 1.382h1.45l-1.176.854.453 1.382-1.181-.855-1.176.855.448-1.382-1.176-.854h1.456L5.574.453Z"
        fill="#FFCE00"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v17.998H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default CF
