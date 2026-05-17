type FeaturedCertification = {
  id: string;
  title: string;
  issuer: string;
  href: string;
};

type CertificationItem = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
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
            <a
              className="certification-feature-summary"
              href={featured.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${featured.title}`}
            >
              <span className="certification-feature-marker" aria-hidden="true" />
              <span>
                {featured.title}
                <span className="certification-feature-issuer">
                  {featured.issuer}
                </span>
              </span>
            </a>
          ) : null}

          {categories.map((category) => (
            <details className="certification-category" key={category.id}>
              <summary className="certification-summary">
                <span className="certification-marker" aria-hidden="true" />
                <span>{category.title}</span>
              </summary>

              <div className="certification-list">
                {category.items.map((item, index) => (
                  <article className="certification-item" key={item.id}>
                    <div className="certification-index">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="certification-content">
                      <h3 className="certification-name">{item.name}</h3>

                      <p className="certification-meta">
                        {item.issuer} · {item.date}
                      </p>

                      <p className="certification-description">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}