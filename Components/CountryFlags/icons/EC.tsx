import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const EC = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v17.998H0V0Z" fill="#FFDA44" />
      <Path d="M0 9.002h27V13.5H0V9.002Z" fill="#0052B4" />
      <Path d="M0 13.5h27v4.498H0V13.5Z" fill="#D80027" />
      <Path
        d="M13.5 12.134a3.132 3.132 0 1 0 0-6.265 3.132 3.132 0 0 0 0 6.265Z"
        fill="#FFDA44"
      />
      <Path
        d="M19.47 4.214s-1.435-.728-1.788-.844c-.354-.116-2.59-.696-2.59-.369 0 .543-.711.633-.817.633-.105 0-.105-.28-.78-.28s-.723.254-.833.254c-.117 0-.765-.053-.765-.607 0-.274-2.262.211-2.59.37-.321.163-1.787.843-1.787.843s2.415.142 2.842.327c.428.184 2.31.87 2.31.87l-.148.701h1.994l-.2-.701s1.85-.67 2.31-.87c.458-.2 2.841-.327 2.841-.327Z"
        fill="#4C1F00"
      />
      <Path
        d="M11.48 9.055c0 1.112.907 2.02 2.02 2.02s2.02-.908 2.02-2.02v-.607h-4.034v.607h-.006Z"
        fill="#57BA17"
      />
      <Path
        d="M13.5 5.827c-1.113 0-2.02.907-2.02 2.02v.606h4.034v-.606a2.015 2.015 0 0 0-2.014-2.02Z"
        fill="#338AF3"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v17.998H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default EC
