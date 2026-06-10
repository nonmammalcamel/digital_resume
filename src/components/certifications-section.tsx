type FeaturedCertification = {
  id: string;
  title: string;
  issuer: string;
  description: string;
  href: string;
};

type CertificationItem = {
  id: string;
  title: string;
  href?: string;
};

type CertificationCategory = {
  id: string;
  title: string;
  items: readonly CertificationItem[];
};

type CertificationsSectionProps = {
  title: string;
  intro: string;
  featured?: FeaturedCertification;
  categories: readonly CertificationCategory[];
};

export function CertificationsSection({
  title,
  intro,
  featured,
  categories
}: CertificationsSectionProps) {
  return (
    <section
      id="certifications"
      className="content-section"
      aria-labelledby="certifications-title"
    >
      <div className="section-label">03</div>

      <div className="section-body">
        <h2 id="certifications-title" className="section-title">
          {title}
        </h2>

        <p className="section-intro">{intro}</p>

        <div className="certification-groups">
          {featured ? (
            <details className="certification-category">
              <summary className="certification-summary">
                <span className="certification-marker" aria-hidden="true" />
                <span>{featured.title}</span>
              </summary>

              <div className="certification-feature-copy">
                <p>{featured.description}</p>
              </div>

              <div className="certification-document-grid">
                <a
                  className="document-tile certification-document-tile"
                  href={featured.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${featured.title} certification`}
                >
                  <span className="document-icon" aria-hidden="true">
                    <span className="document-corner" />
                    <span className="document-lines">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="document-title">{featured.title}</span>
                  </span>
                </a>
              </div>
            </details>
          ) : null}

          {categories.map((category) => (
            <details className="certification-category" key={category.id}>
              <summary className="certification-summary">
                <span className="certification-marker" aria-hidden="true" />
                <span>{category.title}</span>
              </summary>

              <div className="certification-document-grid">
                {category.items.map((item) => {
                  const documentContent = (
                    <span className="document-icon" aria-hidden="true">
                      <span className="document-corner" />
                      <span className="document-lines">
                        <span />
                        <span />
                        <span />
                      </span>
                      <span className="document-title">{item.title}</span>
                    </span>
                  );

                  if (item.href) {
                    return (
                      <a
                        className="document-tile certification-document-tile"
                        href={item.href}
                        key={item.id}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${item.title} certification`}
                      >
                        {documentContent}
                      </a>
                    );
                  }

                  return (
                    <button
                      className="document-tile certification-document-tile"
                      key={item.id}
                      type="button"
                      aria-label={`${item.title} certification coming soon`}
                      disabled
                    >
                      {documentContent}
                    </button>
                  );
                })}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}