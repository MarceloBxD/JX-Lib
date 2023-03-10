import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SI = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 6h27v6H0V6Z" fill="#0052B4" />
    <Path d="M0 12h27v6H0v-6Z" fill="#D80027" />
    <Path
      d="M12.32 5.87v.782C12.32 8.45 9.97 9 9.97 9s-2.348-.55-2.348-2.348V5.87l-.007-2.33 4.695-.015.008 2.345Z"
      fill="#fff"
    />
    <Path
      d="M12.32 5.87v.782C12.32 8.45 9.97 9 9.97 9s-2.348-.55-2.348-2.348V5.87l-.007-2.33 4.695-.015.008 2.345Z"
      fill="#0052B4"
    />
    <Path
      d="M12.32 5.87v.782C12.32 8.45 9.97 9 9.97 9s-2.348-.55-2.348-2.348V5.87l.783.782L9.971 5.48l1.566 1.173.782-.782Z"
      fill="#fff"
    />
  </Svg>
)

export default SI
