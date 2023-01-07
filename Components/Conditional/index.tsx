import {FC, ReactNode} from 'react';
import {useDevice} from "@hooks/useDevice";

interface ConditionalProps {
  notOn?: 'desktop' | 'mobile';
  desktop?: JSX.Element | null;
  mobile?: JSX.Element | null;
  condition?: boolean;
  children: ReactNode;
}

const Conditional: FC<ConditionalProps> = ({
                                             notOn, mobile, desktop, condition, children
                                           }) => {
  const {isDesktop} = useDevice();

  if (condition !== null && condition) {
    return <>{children}</>;
  }
  if ((notOn === 'desktop' || !!mobile) && !isDesktop) {
    return (
        <>
          {children ?? mobile}
        </>
    );
  }
  if ((notOn === 'mobile' || !!desktop) && isDesktop) {
    return (
        <>
          {children ?? desktop}
        </>
    );
  }
  return null;
}

export default Conditional;