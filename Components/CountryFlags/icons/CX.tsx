import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const CX = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v17.998H0V0Z" fill="#0021AD" />
      <Path d="M0 0h27v17.998" fill="#1C8A42" />
      <Path
        d="m4.092 14.344.3.628.676-.159-.3.628.542.427-.675.153v.696l-.543-.438-.538.438v-.696l-.675-.153.543-.427-.305-.628.68.159.295-.628ZM2.136 9.129l.3.627.675-.158-.3.622.543.432-.68.154.005.696-.543-.438-.543.438.005-.697-.68-.152.548-.433-.306-.622.675.158.3-.627Zm1.956-4.267.3.623.676-.153-.3.622.542.432-.675.153v.691l-.543-.432-.538.432v-.69l-.675-.154.543-.432-.305-.622.68.153.295-.623ZM6.523 8.18l.3.628.676-.158-.3.627.542.427-.675.153v.696l-.543-.432-.538.432v-.696l-.675-.153.544-.427-.301-.627.675.158.295-.628Zm-1.735 2.848.232.722h.765l-.617.449.237.722-.617-.443-.617.443.238-.722-.617-.449h.759l.237-.722Z"
        fill="#fff"
      />
      <Path
        d="M14.085 12.93a3.929 3.929 0 1 0 0-7.857 3.929 3.929 0 0 0 0 7.858Z"
        fill="#FFC639"
      />
      <Path
        d="M14.085 11.617h1.308s.57-1.002 0-1.961l1.308-1.308-.654-1.308h-.654s-.327.98-1.635.98c-1.307 0-1.634-.98-1.634-.98h-.654l.654 1.308-.654 1.308.654.654s.653-1.308 1.961-.654c0 0 .554.817 0 1.961Z"
        fill="#1C8A42"
      />
      <Path
        d="M24.49 4.862c.032-.153-.01-.928-.01-1.092a2.537 2.537 0 0 0-1.752-2.41 4.718 4.718 0 0 1 .428 2.837 2.601 2.601 0 0 0-3.644-.796c.706.153 1.387.47 1.988.95.474.374.854.885 1.144 1.376 0 0-.938.575-1.635.796-.696.222-2.23.417-2.23.417 3.797.632 6.96-1.899 6.96-1.899-.342-.706-.832-.21-1.25-.18Z"
        fill="#FFC639"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v17.998H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default CX
