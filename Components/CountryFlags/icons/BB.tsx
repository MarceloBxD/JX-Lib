import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BB = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#FFC726" />
    <Path d="M0 0h9v18H0V0Zm18 0h9v18h-9V0Z" fill="#00267F" />
    <Path
      d="m17.144 5.316-1.682.653c-.036.071-.305.397-.43 2.793h-.898v-3.18l-.66-1.441-.66 1.42v3.2h-.898c-.126-2.396-.41-2.761-.446-2.833l-1.667-.612c.008.016.81 1.65.81 4.106v.66h2.2v3.74h1.32v-3.74h2.201v-.66c0-1.27.22-2.317.404-2.972a7.318 7.318 0 0 1 .408-1.135l-.002.001Z"
      fill="#000"
    />
  </Svg>
)

export default BB
