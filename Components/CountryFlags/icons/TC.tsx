import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const TC = (props) => (
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
        d="M17.51 5.625V9.75c0 2.01 2.74 2.625 2.74 2.625s2.74-.616 2.74-2.625V5.625h-5.48Z"
        fill="#FFDA44"
      />
      <Path
        d="M19.859 7.125c0 .414-.35 1.5-.783 1.5-.432 0-.782-1.086-.782-1.5 0-.414.782-.75.782-.75s.783.336.783.75Z"
        fill="#FF9811"
      />
      <Path
        d="M21.935 7.942c.127-.295.225-.727.225-.942 0-.345-.47-.625-.47-.625s-.47.28-.47.625c0 .215.099.647.225.942l-.27.586a1.418 1.418 0 0 0 1.031 0l-.27-.586Z"
        fill="#A2001D"
      />
      <Path
        d="M19.663 9.75s-.391.75-.391 1.5h1.956c0-.75-.391-1.5-.391-1.5l-.587-.375-.587.375Z"
        fill="#6DA544"
      />
      <Path
        d="M20.837 9.75v-.188A.575.575 0 0 0 20.25 9a.575.575 0 0 0-.587.562v.188h1.174Z"
        fill="#D80027"
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

export default TC
