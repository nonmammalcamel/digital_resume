import type { ReactNode } from 'react';

type SectionBlockProps = {
  id: string;
  label: string;
  title: string;
  meta?: string;
  children: ReactNode;
};

export function SectionBlock({ id, label, title, meta, children }: SectionBlockProps) {
  return (
    <section id={id} className="section-block" aria-labelledby={`${id}-title`}>
      <div className="section-block__header">
        <p className="section-label">{label}</p>
        <div className="section-block__title-row">
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          {meta ? <p className="section-meta">{meta}</p> : null}
        </div>
      </div>
      <div className="section-block__body">{children}</div>
    </section>
  );
}
