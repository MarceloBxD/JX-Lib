import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const XK = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#0052B4" />
      <Path
        d="m11.64 2.248.419.85.937.136-.678.661.16.934-.838-.441-.839.44.16-.933-.678-.661.937-.136.42-.85Zm3.72-.003.42.85.937.136-.678.66.16.934-.839-.44-.838.44.16-.934-.678-.66.937-.137.42-.849Zm3.274.6.42.849.937.136-.679.661.16.933-.838-.44-.838.44.16-.933-.679-.661.938-.136.42-.85Zm3.323.964.42.85.936.136-.678.661.16.934-.838-.44-.838.44.16-.934-.679-.66.938-.137.419-.85ZM8.366 2.844l.419.85.938.136-.68.661.161.933-.838-.44-.839.44.16-.933-.678-.661.938-.136.419-.85Zm-3.323.965.42.85.937.136-.678.661.16.934-.839-.44-.838.44.16-.934-.678-.66.937-.137.419-.85Z"
        fill="#fff"
      />
      <Path
        d="m11.471 13.676-1.435-.718-1.436-2.87h1.436l1.435-1.436.718-1.435 1.435-.718.718.718 1.436.717v.718l.717.718 2.153 1.435-.718 2.154-2.153 2.153-.718-1.436-2.153 1.436v1.435l-.718-.718-.717-2.153Z"
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

export default XK
