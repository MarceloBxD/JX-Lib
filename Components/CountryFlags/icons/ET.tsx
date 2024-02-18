import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ET = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M.293 0h26.414v6H.293V0Z" fill="#20AA46" />
    <Path d="M.293 12h26.414v6H.293v-6Z" fill="#E92F3B" />
    <Path d="M.293 6h26.414v6H.293V6Z" fill="#FADF50" />
    <Path
      d="M19.664 9c0 3.445-2.734 6.238-6.105 6.238-3.371 0-6.106-2.793-6.106-6.238 0-3.445 2.734-6.238 6.106-6.238 3.37 0 6.105 2.793 6.105 6.238Z"
      fill="#205CCA"
    />
    <Path
      d="m13.207 10.8 1.879-1.32m-1.527 1.079-2.465 1.8.937-2.879-2.347-1.8h2.937l.938-2.758.937 2.758h3.055l-2.465 1.8.937 2.88-2.464-1.801Zm-1.172-2.88h2.226-2.226Zm-.473 1.68 1.527 1.2-1.527-1.2Zm2.465-1.918.824 2.16-.824-2.16Zm-2.348 2.04.707-2.16-.707 2.16Z"
      stroke="#FFDB3D"
      strokeWidth={0.593}
    />
    <Path
      d="m18.488 10.8-2.113-.84m-5.867-5.28 1.289 1.922-1.29-1.922Zm5.984-.121L15.32 6.48l1.172-1.921ZM13.56 12.12v2.277-2.277Zm-2.817-2.16-2.113.84 2.113-.84Z"
      stroke="#FFDB3D"
      strokeWidth={0.297}
    />
  </Svg>
)

export default ET