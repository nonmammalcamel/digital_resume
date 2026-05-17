import type { ReactNode } from 'react';

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return <div className="site-frame">{children}</div>;
}
