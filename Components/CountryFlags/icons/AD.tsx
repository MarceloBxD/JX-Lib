import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AD = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M27 0H0v18h27V0Z" fill="#FFDA44" />
    <Path d="M0 0h9v18H0V0Z" fill="#0052B4" />
    <Path
      d="M18 0h9v18h-9V0Zm-7.531 5.98h3.004v3.41h-3.004V5.98Z"
      fill="#D80027"
    />
    <Path
      d="M14.086 5.98v3.403V5.98Zm.871 0v3.403V5.98Zm.875 0v3.403Z"
      fill="#000"
    />
    <Path
      d="M15.832 5.98v3.403M14.086 5.98v3.403V5.98Zm.871 0v3.403V5.98Z"
      stroke="#D80027"
      strokeWidth={0.368}
    />
    <Path
      d="M13.02 9.39v3.403-3.402Zm-.7 0v3.403-3.402Zm-.699.005v2.835-2.835Zm-.723 0v2.48Z"
      fill="#000"
    />
    <Path
      d="M10.898 9.395v2.48m2.122-2.484v3.402-3.402Zm-.7 0v3.402-3.402Zm-.699.004v2.835-2.835Z"
      stroke="#D80027"
      strokeWidth={0.263}
    />
    <Path
      d="m10.52 7.684 1.453-1.704 1.5 1.7-1.477 1.703-1.476-1.7Z"
      fill="#FFDA44"
    />
    <Path
      d="M9.59 5.047v4.851c0 1.809 1.437 2.856 2.558 3.395-.043.074 1.32.438 1.32.438s1.364-.364 1.321-.438c1.125-.54 2.559-1.582 2.559-3.395V5.047H9.59Zm6.836 4.851c0 .891-.528 1.551-1.727 2.313-.453.289-.922.473-1.226.578a5.9 5.9 0 0 1-1.227-.578c-1.2-.762-1.726-1.473-1.726-2.313V5.98h5.906v3.918Z"
      fill="#BC8B00"
    />
    <Path
      d="M13.914 9.941h1.555v.454h-1.555V9.94Zm0 .926h1.555v.453h-1.555v-.453Z"
      fill="#D80027"
    />
  </Svg>
)

export default AD
