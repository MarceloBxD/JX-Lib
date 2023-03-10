import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DO = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M.012 0h26.976v18H.012V0Z" fill="#fff" />
    <Path d="M.012 11.348h11.144V18H.012v-6.652Z" fill="#D80027" />
    <Path d="M.012 0h11.144v6.656H.012V0Z" fill="#0052B4" />
    <Path d="M15.844 0h11.144v6.656H15.844V0Z" fill="#D80027" />
    <Path d="M15.844 11.348h11.144V18H15.844v-6.652Z" fill="#0052B4" />
    <Path
      d="M13.5 6.855h-2.629v2.606s1.027.316 2.629.316V6.855Z"
      fill="#0052B4"
      stroke="#fff"
      strokeWidth={0.264}
      strokeMiterlimit={10}
    />
    <Path
      d="M10.871 9.46v.317A2.633 2.633 0 0 0 13.5 12.41V9.777c-1.602 0-2.629-.316-2.629-.316Z"
      fill="#D80027"
      stroke="#fff"
      strokeWidth={0.264}
      strokeMiterlimit={10}
    />
    <Path
      d="M13.5 12.41a2.63 2.63 0 0 0 2.629-2.633v-.316s-1.027.316-2.629.316v2.633Z"
      fill="#0052B4"
      stroke="#fff"
      strokeWidth={0.264}
      strokeMiterlimit={10}
    />
    <Path
      d="M13.5 6.855v2.922c1.602 0 2.629-.316 2.629-.316V6.855H13.5Z"
      fill="#D80027"
      stroke="#fff"
      strokeWidth={0.264}
      strokeMiterlimit={10}
    />
  </Svg>
)

export default DO
