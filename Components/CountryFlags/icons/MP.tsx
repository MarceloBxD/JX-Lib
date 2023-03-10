import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MP = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M26.5 0H.5v18h26V0Z" fill="#0071BC" />
    <Path
      d="M21.3 8.82c0 4.473-3.491 8.102-7.8 8.102-4.309 0-7.8-3.629-7.8-8.102C5.7 4.348 9.19.72 13.5.72c4.309 0 7.8 3.629 7.8 8.101Z"
      fill="#fff"
      stroke="#000"
      strokeWidth={0.067}
    />
    <Path
      d="M19.219 8.82c0 3.282-2.559 5.942-5.719 5.942s-5.719-2.66-5.719-5.942c0-3.28 2.559-5.941 5.719-5.941s5.719 2.66 5.719 5.941Z"
      fill="#0071BC"
      stroke="#000"
      strokeWidth={0.067}
    />
    <Path
      d="M15.918 16.2c.023.398-.273.722-.652.722h-3.547c-.383 0-.676-.324-.66-.723L11.637 4.5c.023-.395.347-.719.73-.719h2.13c.378 0 .71.324.733.719l.688 11.7Z"
      fill="#8C8A8C"
      stroke="#000"
      strokeWidth={0.067}
    />
    <Path
      d="m13.43 4.105 1.039 3.348h3.363L15.129 9.47l1.004 3.312-2.703-2.015-2.703 2.05 1.039-3.347-2.739-2.055h3.364l1.039-3.309Z"
      fill="#fff"
      stroke="#000"
      strokeWidth={0.071}
      strokeLinejoin="round"
    />
  </Svg>
)

export default MP
