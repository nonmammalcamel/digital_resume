type AboutSectionProps = {
  title: string;
  paragraphs: readonly string[];
};

function renderParagraphText(paragraph: string, shouldUnderlineFinalYou: boolean) {
  const lines = paragraph.split('\n');

  return lines.map((line, index) => {
    const isLastLine = index === lines.length - 1;

    if (line.includes('Travis')) {
      return (
        <span key={`${line}-${index}`}>
          {line.split('Travis').map((part, partIndex, parts) => (
            <span key={`${part}-${partIndex}`}>
              {part}
              {partIndex < parts.length - 1 ? (
                <strong style={{ color: 'var(--muted)' }}>Travis</strong>
              ) : null}
            </span>
          ))}
          {index < lines.length - 1 ? <br /> : null}
        </span>
      );
    }

    if (shouldUnderlineFinalYou && isLastLine) {
      const finalYouMatch = line.match(/^(.*?)(you)([.!?]?)$/i);

      if (finalYouMatch) {
        return (
          <span key={`${line}-${index}`}>
            {finalYouMatch[1]}
            <strong
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '0.18em'
              }}
            >
              you
            </strong>
            {finalYouMatch[3]}
            {index < lines.length - 1 ? <br /> : null}
          </span>
        );
      }
    }

    return (
      <span key={`${line}-${index}`}>
        {line}
        {index < lines.length - 1 ? <br /> : null}
      </span>
    );
  });
}

function renderNumberedParagraph(paragraph: string) {
  const numberMatch = paragraph.match(/^([12]\.)\s(.+)$/);

  if (!numberMatch) {
    return paragraph;
  }

  return (
    <>
      <span style={{ color: 'var(--muted)', fontWeight: 700 }}>
        {numberMatch[1]}
      </span>{' '}
      {numberMatch[2]}
    </>
  );
}

export function AboutSection({ title, paragraphs }: AboutSectionProps) {
  return (
    <section id="about" className="content-section" aria-labelledby="about-title">
      <div className="section-label">01</div>

      <div className="section-body">
        <h2 id="about-title" className="section-title">
          {title}
        </h2>

        <div className="section-copy about-copy">
          {paragraphs.map((paragraph, index) => {
            const isNumberedParagraph =
              paragraph.startsWith('1. ') || paragraph.startsWith('2. ');

            const shouldUnderlineFinalYou = index === paragraphs.length - 1;

            return (
              <p
                className={isNumberedParagraph ? 'about-numbered' : undefined}
                key={`${paragraph}-${index}`}
              >
                {isNumberedParagraph
                  ? renderNumberedParagraph(paragraph)
                  : renderParagraphText(paragraph, shouldUnderlineFinalYou)}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}