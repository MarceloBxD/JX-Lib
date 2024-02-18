import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CK = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M27 0H0v18h27V0Z" fill="#01237A" />
    <Path
      d="m20.21 3.758.278.855h.899l-.727.528.277.855-.726-.527-.727.527.278-.855-.73-.528h.902l.277-.855Zm-3.694 1.527.8.41.637-.636-.14.89.8.406-.886.141-.141.89-.41-.804-.887.14.633-.632-.406-.805ZM14.984 8.98l.856-.277v-.898l.527.726.856-.277-.528.726.528.73-.856-.276-.527.726v-.898l-.856-.282Zm1.532 3.696.406-.801-.633-.637.887.14.41-.8.14.89.887.141-.8.407.14.89-.637-.636-.8.406Zm3.695 1.531-.277-.855h-.903l.73-.528-.277-.855.727.527.727-.527-.278.855.727.528h-.899l-.277.855Zm3.695-1.531-.8-.406-.637.636.14-.89-.8-.407.886-.14.14-.89.411.8.887-.14-.637.636.41.8Zm1.532-3.696-.856.282v.898l-.531-.726-.856.277.532-.73-.532-.727.856.277.531-.726v.898l.855.277Zm-1.532-3.695-.41.805.637.633-.887-.141-.41.805-.14-.89-.887-.142.8-.406-.14-.89.636.636.801-.41ZM0 5.332v.844h2.426L0 7.793v.394l3.02-2.011h1.19L0 8.98h5.895V5.332H0ZM5.05 8.98H1.192l3.86-2.574V8.98ZM9.263 2.81 13.472 0H7.579v3.648h5.895v-.84H11.05l2.422-1.617V.793l-3.02 2.016H9.262ZM8.422 0h3.86l-3.86 2.574V0Zm-.844 8.98h5.895L9.262 6.176h1.191l3.02 2.011v-.394L11.05 6.176h2.422v-.844H7.578V8.98Zm.844-2.574 3.86 2.574h-3.86V6.406ZM5.895 0H0l4.21 2.809H3.02L0 .793v.398L2.426 2.81H0v.84h5.895V0ZM5.05 2.574 1.19 0h3.86v2.574Z"
      fill="#fff"
    />
    <Path
      d="M7.578 0H5.895v3.648H0v1.684h5.895V8.98h1.683V5.332h5.895V3.648H7.578V0Z"
      fill="#D80027"
    />
    <Path
      d="M4.21 2.809 0 0v.793l3.02 2.016h1.19Zm5.052 0h1.191l3.02-2.016V0L9.262 2.809ZM3.02 6.176 0 8.187v.793l4.21-2.804H3.02Zm6.242 0 4.21 2.804v-.793l-3.019-2.011H9.262Z"
      fill="#D80027"
    />
  </Svg>
)

export default CK
