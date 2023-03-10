import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CD = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M.012 0h26.976v18H.012V0Z" fill="#338AF3" />
    <Path
      d="M26.988 3.527V0h-5.285L.012 14.473V18h5.285L26.988 3.527Z"
      fill="#FFDA44"
    />
    <Path
      d="M26.988 0v2.113L3.184 18H.012v-2.113L23.816 0h3.172Z"
      fill="#D80027"
    />
    <Path
      d="m4.945 1.645.856 2.66h2.8L6.34 5.949l.863 2.664L4.945 6.97 2.68 8.613l.863-2.664-2.262-1.644h2.797l.867-2.66Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default CD
