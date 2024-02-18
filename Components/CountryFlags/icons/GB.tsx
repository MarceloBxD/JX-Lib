import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const GB = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#fff" />
      <Path
        d="M15.188 0h-3.376v7.312H0v3.375h11.813V18h3.374v-7.313H27V7.313H15.187V0Z"
        fill="#D80027"
      />
      <Path
        d="M20.766 12.13 27 15.593V12.13h-6.234Zm-4.331 0L27 18v-1.66l-7.578-4.21h-2.987Zm7.75 5.87-7.75-4.307v4.306h7.75Z"
        fill="#0052B4"
      />
      <Path d="M16.435 12.13 27 18v-1.66l-7.578-4.21h-2.987Z" fill="#fff" />
      <Path d="M16.435 12.13 27 18v-1.66l-7.578-4.21h-2.987Z" fill="#D80027" />
      <Path
        d="M4.764 12.13 0 14.777V12.13h4.764Zm5.801.746V18h-9.22l9.22-5.124Z"
        fill="#0052B4"
      />
      <Path d="M7.578 12.13 0 16.34V18l10.565-5.87H7.578Z" fill="#D80027" />
      <Path
        d="M6.234 5.87 0 2.406V5.87h6.234Zm4.331 0L0 0v1.66l7.578 4.21h2.987ZM2.815 0l7.75 4.306V0h-7.75Z"
        fill="#0052B4"
      />
      <Path d="M10.565 5.87 0 0v1.66l7.578 4.21h2.987Z" fill="#fff" />
      <Path d="M10.565 5.87 0 0v1.66l7.578 4.21h2.987Z" fill="#D80027" />
      <Path
        d="M22.236 5.87 27 3.223V5.87h-4.764Zm-5.801-.747V0h9.22l-9.22 5.123Z"
        fill="#0052B4"
      />
      <Path d="M19.422 5.87 27 1.66V0L16.435 5.87h2.987Z" fill="#D80027" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default GB
