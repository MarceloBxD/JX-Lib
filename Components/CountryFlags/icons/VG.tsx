import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const VG = (props) => (
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
        d="M13.5 0v6.187h-2.43l2.43 1.62V9h-1.193l-3.87-2.58V9H5.063V6.42L1.192 9H0V7.807l2.43-1.62H0V2.812h2.43L0 1.192V0h1.193l3.87 2.58V0h3.375v2.58L12.306 0H13.5Z"
        fill="#fff"
      />
      <Path
        d="M7.594 0H5.906v3.656H0v1.688h5.906V9h1.688V5.344H13.5V3.656H7.594V0Z"
        fill="#D80027"
      />
      <Path
        d="M0 0v.795l3.026 2.018h1.193L0 0Zm13.5 0v.795l-3.026 2.018H9.281L13.5 0Z"
        fill="#D80027"
      />
      <Path d="M13.5 1.192v1.62h-2.43l2.43-1.62Z" fill="#2E52B2" />
      <Path
        d="M0 0v.795l3.026 2.018h1.193L0 0Zm13.5 0v.795l-3.026 2.018H9.281L13.5 0Z"
        fill="#D80027"
      />
      <Path d="M13.5 1.192v1.62h-2.43l2.43-1.62Z" fill="#2E52B2" />
      <Path
        d="M0 9v-.795l3.026-2.018h1.193L0 9Zm13.5 0v-.795l-3.026-2.018H9.281L13.5 9Z"
        fill="#D80027"
      />
      <Path
        d="m20.25 9.195-2.433 2.433a2.738 2.738 0 0 0 4.866 0L20.25 9.195Z"
        fill="#FFDA44"
      />
      <Path
        d="M17.51 4.892v4.304c0 2.097 2.74 2.74 2.74 2.74s2.74-.643 2.74-2.74V4.892h-5.48Z"
        fill="#6DA544"
      />
      <Path d="M19.663 6.848h1.174v3.13h-1.174v-3.13Z" fill="#fff" />
      <Path
        d="M20.25 7.435a.587.587 0 1 0 0-1.174.587.587 0 0 0 0 1.174Z"
        fill="#A2001D"
      />
      <Path
        d="M18.294 5.674h.782v.782h-.782v-.782Zm0 1.76h.782v.783h-.782v-.782Zm0 1.762h.782v.782h-.782v-.782Zm3.13-3.522h.782v.782h-.782v-.782Zm0 1.76h.782v.783h-.782v-.782Zm0 1.762h.782v.782h-.782v-.782Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default VG
