import * as React from "react"
import Svg, { Path } from "react-native-svg"

const KH = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
    <Path d="M0 0h27v6H0V0Zm0 12h27v6H0v-6Z" fill="#0052B4" />
    <Path
      d="M16.004 10.37v-.94h-.626V8.178l-.626-.626-.626.626V6.926L13.5 6.3l-.626.626v1.252l-.626-.626-.626.626V9.43h-.626v.94h-.626v.939h6.26v-.94h-.626Z"
      fill="#fff"
    />
  </Svg>
)

export default KH
