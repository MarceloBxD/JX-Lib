import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AS = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M27 0H0v18h27V0Z" fill="#10338C" />
    <Path d="M27 1.738 5.016 9 27 16.355v1.61L0 9l27-9v1.738Z" fill="#D80027" />
    <Path d="M27 15.113v1.297L4.3 9 27 1.578v1.274" fill="#fff" />
    <Path
      d="m25.105 7.379-1.152.562-.168-.804 1.64-1.567s-.495-2.14-.722-2.37l-5.91 2.94-.363 1.934-1.676 1.504-.024 1.8 1.805-1.198 3.54-.14-.079 2.007h1.168l.629-2.352 1.66-1.293-.348-1.023Z"
      fill="#A2001D"
    />
    <Path
      d="m16.73 12.547-1.171-.582 1.171-.586h7.606v1.168H16.73Z"
      fill="#EFC100"
      stroke="#231F20"
      strokeWidth={0.053}
      strokeMiterlimit={10}
    />
  </Svg>
)

export default AS
