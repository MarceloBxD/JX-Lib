import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const FM = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v17.998H0V0Z" fill="#338AF3" />
      <Path
        d="m13.5 1.999.533 1.645h1.735l-1.403 1.018.538 1.645L13.5 5.29l-1.403 1.017.538-1.645-1.403-1.018h1.735L13.5 2ZM6.497 9.002l1.645-.538v-1.73L9.16 8.138l1.645-.538-1.018 1.403 1.018 1.398-1.645-.533-1.018 1.397v-1.73l-1.645-.532Zm7.003 7.003-.533-1.645h-1.735l1.403-1.018-.538-1.65 1.403 1.017 1.403-1.017-.538 1.65 1.403 1.018h-1.735l-.533 1.645Zm7.003-7.003-1.645.533v1.73L17.84 9.867l-1.645.533 1.017-1.398L16.195 7.6l1.645.538 1.018-1.402v1.73l1.645.537Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v17.998H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default FM
