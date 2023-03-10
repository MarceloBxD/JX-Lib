
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SB = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#496E2D" />
      <Path d="M0 18V0h27" fill="#0052B4" />
      <Path d="M0 16.41V18h2.386L27 1.591V0h-2.387L0 16.41Z" fill="#FFDA44" />
      <Path
        d="m4.519 1.237.27.831h.873l-.707.514.27.83L4.52 2.9l-.707.514.27-.831-.707-.514h.874l.27-.83Zm4.462 0 .27.831h.874l-.707.514.27.83-.707-.513-.707.514.27-.831-.706-.514h.873l.27-.83ZM4.52 5.588l.27.83h.873l-.707.514.27.831-.706-.513-.707.513.27-.83-.707-.514h.874l.27-.831Zm4.462 0 .27.83h.874l-.707.514.27.831-.707-.513-.707.513.27-.83-.706-.514h.873l.27-.831ZM6.75 3.413l.27.83h.874l-.707.514.27.831-.707-.514-.707.514.27-.831-.707-.514h.874l.27-.83Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SB
