import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ZW = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#000" />
      <Path
        d="M0 2.577h27v2.577H0V2.577Zm0 10.308h27v2.577H0v-2.577Z"
        fill="#FFDA44"
      />
      <Path d="M0 0h27v2.577H0V0Z" fill="#057F44" />
      <Path
        d="M0 5.154h27v2.577H0V5.154Zm0 5.154h27v2.577H0v-2.577Z"
        fill="#D80027"
      />
      <Path d="M0 15.462h27V18H0v-2.538Z" fill="#057F44" />
      <Path d="m14.607 9-9 9H0V0h5.607l9 9Z" fill="#fff" />
      <Path d="m13.5 9-9 9h1.107l9-9-9-9H4.5l9 9Z" fill="#000" />
      <Path
        d="m5.403 6.183.7 2.152h2.263l-1.831 1.33.7 2.152-1.832-1.33-1.83 1.33.699-2.152-1.831-1.33h2.263l.7-2.152Z"
        fill="#D80027"
      />
      <Path
        d="m7.327 9.176-1.823-.645s-.134-1.264-.142-1.306a.705.705 0 1 0-1.371.318l-.511.514h.908c0 .943-.703.943-.703 1.882l.39.94h2.348l.391-.94a.938.938 0 0 0 .073-.276c.337-.136.44-.487.44-.487Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default ZW
