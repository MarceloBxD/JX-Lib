import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TJ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v6H0V0Z" fill="#D80027" />
    <Path d="M0 12h27v6H0v-6Z" fill="#6DA544" />
    <Path
      d="M11.935 11.347h3.13v-1.33l-.626.313-.939-.94-.94.94-.625-.313v1.33Zm-1.791-1.565.145.449h.472l-.382.277.146.448-.381-.277-.382.277.146-.448-.381-.277h.471l.146-.449Zm.451-1.565.146.448h.472l-.382.277.146.449-.382-.277-.381.277.146-.449-.382-.277h.472l.145-.448Zm1.292-1.174.146.448h.471l-.381.278.145.448-.381-.277-.382.277.146-.448-.381-.278h.471l.146-.448Zm4.97 2.74-.146.448h-.472l.382.277-.146.448.381-.277.382.277-.146-.448.382-.277h-.472l-.146-.449Zm-.452-1.566-.146.448h-.472l.382.277-.146.449.382-.277.381.277-.146-.449.382-.277h-.472l-.145-.448Zm-1.292-1.174-.146.448h-.471l.381.278-.145.448.381-.277.382.277-.146-.448.381-.278h-.471l-.146-.448ZM13.5 6.456l.146.448h.471l-.381.278.145.448-.381-.277-.381.277.145-.448-.381-.278h.471l.146-.448Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default TJ
