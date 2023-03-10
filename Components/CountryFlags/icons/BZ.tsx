import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BZ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M.012 0h26.976v18H.012V0Z" fill="#003E87" />
    <Path
      d="M20.023 9.012a6.27 6.27 0 0 1-6.265 6.273 6.27 6.27 0 0 1-6.266-6.273c0-3.461 2.805-6.27 6.266-6.27a6.268 6.268 0 0 1 6.265 6.27Z"
      fill="#fff"
    />
    <Path
      d="M18.79 9.129a4.979 4.979 0 1 1-9.958 0 4.979 4.979 0 1 1 9.957 0Z"
      stroke="#6DA544"
      strokeWidth={0.949}
      strokeMiterlimit={10}
    />
    <Path
      d="m13.813 7.988-2.668 1.235v1.054c0 .625.32 1.204.855 1.528l1.816.8 1.817-.8c.527-.328.855-.903.855-1.528V9.223l-2.675-1.235Z"
      fill="#003E87"
      stroke="#000"
      strokeWidth={0.053}
    />
    <Path
      d="M11.145 6.758h5.335v2.46h-5.335v-2.46Z"
      fill="#FFDA44"
      stroke="#000"
      strokeWidth={0.053}
    />
    <Path
      d="M.012 0h26.976v1.848H.012V0Zm0 16.137h26.976v1.847H.012v-1.847Z"
      fill="#CE1127"
    />
  </Svg>
)

export default BZ
