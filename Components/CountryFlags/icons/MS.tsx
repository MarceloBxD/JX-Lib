import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MS = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#1B4991" />
    <Path
      d="M16.747 5.616v5.606c0 2.731 3.569 3.568 3.569 3.568s3.568-.837 3.568-3.568V5.616h-7.137Z"
      fill="#00A2B8"
      stroke="#fff"
      strokeWidth={3}
    />
    <Path
      d="M16.826 11.194c0 2.674 3.49 3.49 3.49 3.49s3.49-.821 3.49-3.49h-6.98Z"
      fill="#A35023"
    />
    <Path
      d="M21.847 8.164h-1.02V7.143h-1.022v1.02H18.79v1.022h1.015v3.058h1.021V9.185h1.021V8.164Z"
      fill="#000"
    />
    <Path
      d="M13.474 0v1.61l-2.38 1.322h2.38v3.12h-3.11l3.11 1.727v1.205h-1.406L8.2 6.832v2.152H5.274V6.426L.668 8.984H0v-1.61l2.379-1.321H0V2.932h3.11L0 1.2V0h1.405l3.869 2.147V0H8.2v2.558L12.805 0h.669Z"
      fill="#fff"
    />
    <Path
      d="M7.579 0H5.895v3.647H0v1.685h5.895v3.652h1.684V5.332h5.895V3.647H7.579V0Z"
      fill="#D80027"
    />
    <Path d="m8.2 6.053 5.274 2.931v-.831l-3.78-2.1H8.2Z" fill="#0052B4" />
    <Path d="m8.2 6.053 5.274 2.931v-.831l-3.78-2.1H8.2Z" fill="#fff" />
    <Path
      d="m8.2 6.053 5.274 2.931v-.831l-3.78-2.1H8.2Zm-4.421 0L0 8.153v.831l5.274-2.931H3.779Z"
      fill="#D80027"
    />
    <Path d="M5.274 2.926 0 0v.826l3.779 2.1h1.495Z" fill="#0052B4" />
    <Path d="M5.274 2.926 0 0v.826l3.779 2.1h1.495Z" fill="#fff" />
    <Path
      d="M5.274 2.926 0 0v.826l3.779 2.1h1.495Zm4.42 0 3.78-2.1V0L8.2 2.926h1.495Z"
      fill="#D80027"
    />
  </Svg>
)

export default MS
