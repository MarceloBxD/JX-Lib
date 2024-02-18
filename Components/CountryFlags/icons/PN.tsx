import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const PN = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#0052B4" />
      <Path
        d="m21.13 7.092-.88.294-.88-.294-.294-.733.293-.734h1.762l-.294.734.294.733Z"
        fill="#ACABB1"
      />
      <Path
        d="M18.196 7.092v3.228c0 1.573 2.054 2.054 2.054 2.054s2.054-.481 2.054-2.054V7.092h-4.108Z"
        fill="#338AF3"
      />
      <Path
        d="M18.38 11.085c.506.97 1.87 1.29 1.87 1.29s1.364-.32 1.87-1.29l-1.87-3.112-1.87 3.112Z"
        fill="#6DA544"
      />
      <Path
        d="M22.304 10.287 20.25 7.092l-2.054 3.195v.033c0 .291.07.545.185.765l1.869-2.908 1.87 2.908c.114-.22.184-.474.184-.765v-.033Z"
        fill="#FFDA44"
      />
      <Path
        d="M13.5 0v1.611l-2.382 1.324H13.5v3.13h-3.117L13.5 7.797V9h-1.407L8.217 6.847V9H5.283V6.438L.672 9H0V7.389l2.382-1.324H0v-3.13h3.117L0 1.203V0h1.407l3.876 2.153V0h2.934v2.561L12.828 0h.672Z"
        fill="#fff"
      />
      <Path
        d="M7.594 0H5.906v3.656H0v1.688h5.906V9h1.688V5.344H13.5V3.656H7.594V0Z"
        fill="#D80027"
      />
      <Path d="M8.217 6.065 13.5 9v-.83L9.711 6.065H8.217Z" fill="#0052B4" />
      <Path d="M8.217 6.065 13.5 9v-.83L9.711 6.065H8.217Z" fill="#fff" />
      <Path
        d="M8.217 6.065 13.5 9v-.83L9.711 6.065H8.217Zm-4.428 0L0 8.17V9l5.283-2.935H3.789Z"
        fill="#D80027"
      />
      <Path d="M5.283 2.935 0 0v.83l3.789 2.105h1.494Z" fill="#0052B4" />
      <Path d="M5.283 2.935 0 0v.83l3.789 2.105h1.494Z" fill="#fff" />
      <Path
        d="M5.283 2.935 0 0v.83l3.789 2.105h1.494Zm4.428 0L13.5.83V0L8.217 2.935h1.494Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default PN
