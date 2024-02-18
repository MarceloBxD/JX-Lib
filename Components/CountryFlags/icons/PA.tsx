import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PA = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M13.5 9v9H0V9h13.5Z" fill="#0052B4" />
    <Path d="M27 0v9H13.5V0H27Z" fill="#D80027" />
    <Path
      d="m6.75 1.988.624 1.92H9.39L7.76 5.092l.623 1.92L6.75 5.825 5.118 7.012l.623-1.919L4.11 3.907h2.017l.624-1.919Z"
      fill="#0052B4"
    />
    <Path
      d="m20.25 10.988.623 1.92h2.018l-1.632 1.185.623 1.92-1.632-1.187-1.632 1.186.623-1.919-1.632-1.186h2.017l.624-1.919Z"
      fill="#D80027"
    />
  </Svg>
)

export default PA
