import * as React from "react"
import Svg, { Path } from "react-native-svg"

const WF = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#ED2939" />
    <Path d="M0 0h3.6v7.98H0V0Z" fill="#002395" />
    <Path d="M3.6 0h3.6v7.98H3.6V0Z" fill="#fff" />
    <Path d="M0 7.98h11.295V0" stroke="#fff" strokeWidth={3} />
    <Path
      d="M19.454 7.793 15.833 4.17h7.245l-3.624 3.622ZM18.248 9 14.625 5.38v7.245L18.248 9Zm1.206 1.208-3.621 3.622h7.245l-3.624-3.622ZM20.662 9l3.624-3.623v7.245L20.662 9Z"
      fill="#fff"
    />
  </Svg>
)

export default WF
