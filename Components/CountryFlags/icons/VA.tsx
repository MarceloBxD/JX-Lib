import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const VA = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#FFDA44" />
      <Path d="M13.5 0H27v18H13.5V0Z" fill="#fff" />
      <Path
        d="m16.946 7.831 1.692 2.238a1.174 1.174 0 1 0 .624-.472l-2.636-3.488-.624.472-.937.708.944 1.249.937-.707Zm2.435 2.572a.392.392 0 1 1 .473.625.392.392 0 0 1-.473-.625Z"
        fill="#ACABB1"
      />
      <Path
        d="m19.848 8.538.943-1.249-.936-.708-.624-.472-2.637 3.488a1.174 1.174 0 1 0 .625.472L18.91 7.83l.938.707ZM16.55 10.95a.391.391 0 1 1-.624-.472.391.391 0 0 1 .624.473Z"
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

export default VA
