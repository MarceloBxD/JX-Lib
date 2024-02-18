import * as React from "react"
import Svg, { Path } from "react-native-svg"

const JE = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path
      d="M15.884 9 27 1.59V0h-2.384L13.5 7.41 2.384 0H0v1.59L11.116 9 0 16.41V18h2.384L13.5 10.59 24.616 18H27v-1.59L15.884 9Z"
      fill="#D80027"
    />
    <Path
      d="m12.3 2.348 1.174.294 1.173-.294.21-1.1-.783.342-.6-.81-.6.81-.785-.342.211 1.1Z"
      fill="#FFDA44"
    />
    <Path
      d="M12.3 2.347s-.21.68-.21 1.574c0 1.468 1.384 2.174 1.384 2.174s1.384-.816 1.384-2.174c0-.81-.21-1.574-.21-1.574s-.427-.263-1.174-.263c-.748 0-1.174.263-1.174.263Z"
      fill="#D80027"
    />
  </Svg>
)

export default JE
