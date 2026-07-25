type AboutSectionProps = {
  title: string;
  paragraphs: readonly string[];
};

const aboutLinks = {
  'ask them': {
    href: '#references',
    openInNewTab: false
  },
  'here you go': {
    href: '/kirby-resume.pdf',
    openInNewTab: true
  }
} as const;

type AboutLinkPhrase = keyof typeof aboutLinks;

function renderLinkedText(text: string) {
  const parts = text.split(/(ask them|here you go)/gi);

  return parts.map((part, index) => {
    const normalizedPart = part.toLowerCase() as AboutLinkPhrase;
    const link = aboutLinks[normalizedPart];

    if (!link) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <a
        className="about-inline-link"
        href={link.href}
        key={`${part}-${index}`}
        target={link.openInNewTab ? '_blank' : undefined}
        rel={link.openInNewTab ? 'noreferrer' : undefined}
      >
        {part}
      </a>
    );
  });
}

function renderParagraphText(paragraph: string) {
  const lines = paragraph.split('\n');

  return lines.map((line, index) => (
    <span key={`${line}-${index}`}>
      {renderLinkedText(line)}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

function renderNumberedParagraph(paragraph: string) {
  const numberMatch = paragraph.match(/^([12]\.)\s(.+)$/);

  if (!numberMatch) {
    return renderLinkedText(paragraph);
  }

  return (
    <>
      <span style={{ color: 'var(--muted)', fontWeight: 700 }}>
        {numberMatch[1]}
      </span>{' '}
      {renderLinkedText(numberMatch[2])}
    </>
  );
}

export function AboutSection({ title, paragraphs }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="content-section"
      aria-labelledby="about-title"
    >
      <div className="section-label">01</div>

      <div className="section-body">
        <h2 id="about-title" className="section-title">
          {title}
        </h2>

        <div className="section-copy about-copy">
          {paragraphs.map((paragraph, index) => {
            const isNumberedParagraph =
              paragraph.startsWith('1. ') || paragraph.startsWith('2. ');

            return (
              <p
                className={isNumberedParagraph ? 'about-numbered' : undefined}
                key={`${paragraph}-${index}`}
              >
                {isNumberedParagraph
                  ? renderNumberedParagraph(paragraph)
                  : renderParagraphText(paragraph)}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}