import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IL = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path
      d="M17.926 6.442h-2.952L13.5 3.884l-1.474 2.558H9.074L10.547 9l-1.473 2.558h2.952l1.474 2.558 1.474-2.558h2.952L16.453 9l1.473-2.558ZM15.432 9l-.906 1.747H12.48L11.569 9l.905-1.747h2.047L15.431 9ZM13.5 5.221l.626 1.226h-1.258l.632-1.226Zm-3.068 2.032h1.258l-.569 1.105-.69-1.105Zm0 3.494.684-1.163.626 1.163h-1.31Zm3.068 1.974-.626-1.163h1.258L13.5 12.72Zm3.126-1.974H15.31l.627-1.163.69 1.163Zm-1.373-3.494h1.373l-.684 1.163-.69-1.163ZM0 1.12h26.947v2.247H0V1.121Zm0 13.474h26.947v2.247H0v-2.247Z"
      fill="#2E52B2"
    />
  </Svg>
)

export default IL
