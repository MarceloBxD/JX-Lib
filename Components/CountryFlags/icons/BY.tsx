import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BY = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M27 0H0v18h27V0Z" fill="#007C30" />
    <Path d="M0 12.105h27V0H0" fill="#CE1720" />
    <Path d="M5.262 12.105V0H0v18h27H5.262v-5.895Z" fill="#fff" />
    <Path
      d="M1.473 8.398.453 6.746l1.02-1.621 1.015 1.621-1.015 1.652Zm2.347 0L2.805 6.746 3.82 5.125l1.024 1.621L3.82 8.398Zm-2.347 4.297-1.02-1.652 1.02-1.621 1.015 1.621-1.015 1.652Zm2.347 0-1.015-1.652L3.82 9.422l1.024 1.621-1.024 1.652Z"
      fill="#CE1720"
    />
    <Path
      d="M1.473 3.883.625 2.516l.848-1.348.843 1.348-.843 1.367Zm2.347 0-.84-1.367.84-1.348.848 1.348-.848 1.367ZM1.473 16.738l-.848-1.375.848-1.347.843 1.347-.843 1.375Zm2.347 0-.84-1.375.84-1.347.848 1.347-.848 1.375Z"
      stroke="#CE1720"
      strokeWidth={0.368}
    />
  </Svg>
)

export default BY
