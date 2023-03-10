import * as React from "react"
import Svg, { Path } from "react-native-svg"

const VU = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#000" />
    <Path d="M27 9v9H0l11.348-9H27Z" fill="#6DA544" />
    <Path d="M27 0v9H11.348L0 0h27Z" fill="#D80027" />
    <Path
      d="M11.654 8.12 1.417 0H.472L11.45 8.706H27V8.12H11.654ZM.472 18h.945l10.237-8.12H27v-.587H11.45L.472 18ZM0 .375v.749L9.93 9 0 16.876v.749L10.875 9 0 .375Z"
      fill="#000"
    />
    <Path
      d="M.472 0H0v.375L10.875 9 0 17.625V18h.472L11.45 9.293H27v-.587H11.45L.472 0Z"
      fill="#FFDA44"
    />
    <Path
      d="M3.36 10.918v-.754c.752 0 1.364-.612 1.364-1.364a.966.966 0 0 0-.965-.965.658.658 0 0 0-.657.657c0 .232.188.421.42.421a.238.238 0 0 0 .238-.238h.754a.993.993 0 0 1-.992.992 1.176 1.176 0 0 1-1.174-1.175c0-.778.633-1.411 1.411-1.411.948 0 1.72.771 1.72 1.72a2.12 2.12 0 0 1-2.119 2.117Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default VU
