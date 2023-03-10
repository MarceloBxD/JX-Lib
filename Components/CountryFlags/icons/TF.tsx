import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TF = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h25.2v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v18H0V0Z" fill="#073AB6" />
    <Path d="M0 0h13.56v9H0V0Z" fill="#fff" />
    <Path d="M8.52 0h4.32v8.4H8.52V0Z" fill="#F44653" />
    <Path d="M0 0h4.32v8.4H0V0Z" fill="#1035BB" />
    <Path
      d="M4.32 0h4.32v8.4H4.32V0ZM17.4 7.2h6l-.6 1.2H21V9h1.2l-.6 1.2H21V12h-1.2V8.4H18l-.6-1.2Zm4.8 3 1.2 1.8H21l1.2-1.8Zm-3.6 0 1.2 1.8h-2.4l1.2-1.8Zm1.8 3.6L19.2 12h2.4l-1.2 1.8ZM24 9.6c-.36 0-.6-.24-.6-.6s.24-.6.6-.6.6.24.6.6-.24.6-.6.6Zm-7.2 0c-.36 0-.6-.24-.6-.6s.24-.6.6-.6.6.24.6.6-.24.6-.6.6Zm1.2 4.8c-.36 0-.6-.24-.6-.6s.24-.6.6-.6.6.24.6.6-.24.6-.6.6Zm4.8 0c-.36 0-.6-.24-.6-.6s.24-.6.6-.6.6.24.6.6-.24.6-.6.6Zm-2.4 1.2c-.36 0-.6-.24-.6-.6s.24-.6.6-.6.6.24.6.6-.24.6-.6.6Z"
      fill="#fff"
    />
  </Svg>
)

export default TF
