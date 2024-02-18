import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const WS = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#D80027" />
      <Path d="M0 0h13.5v9H0V0Z" fill="#0052B4" />
      <Path
        d="m8.727 5.086.145.449h.472l-.382.277.146.448-.381-.277-.382.277.146-.448-.382-.277h.472l.146-.449ZM6.359 1.564l.243.748h.785l-.635.462.242.747-.635-.462-.636.462.243-.747-.636-.462h.786l.243-.748Zm2.347.783.243.747h.786l-.636.462.243.748-.636-.462-.635.462.243-.748-.636-.462h.786l.242-.747Zm-1.855 3.13.243.748h.785l-.635.462.242.747-.635-.462-.636.462.243-.747-.636-.462h.786l.243-.747ZM4.793 3.522l.243.747h.786l-.636.462.243.748-.636-.462-.635.462.243-.748-.636-.462h.786l.242-.747Z"
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

export default WS
