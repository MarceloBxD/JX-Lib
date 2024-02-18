import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MA = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0v18h27V0H0Z" fill="#D80027" />
    <Path
      d="M18.563 7.444h-3.868L13.5 3.766l-1.195 3.678H8.438l3.128 2.273-1.195 3.678 3.129-2.273 3.129 2.273-1.195-3.678 3.129-2.273Zm-6.121 1.988.404-1.243h1.308l.404 1.243-1.058.769-1.058-.769Zm1.47-1.988h-.824l.412-1.268.412 1.268Zm1.28 1.528-.255-.783h1.333l-1.078.783Zm-3.13-.783-.254.783-1.078-.783h1.333Zm-.274 3.256.412-1.268.666.484-1.078.784Zm2.346-.784.666-.484.412 1.268-1.078-.784Z"
      fill="#20661B"
    />
  </Svg>
)

export default MA
