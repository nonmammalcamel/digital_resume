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
  children?: readonly CertificationItem[];
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

function DocumentIcon({
  title,
  showToggle = false
}: {
  title: string;
  showToggle?: boolean;
}) {
  return (
    <span className="document-icon" aria-hidden="true">
      {showToggle ? <span className="document-plus" aria-hidden="true" /> : null}

      <span className="document-corner" />
      <span className="document-lines">
        <span />
        <span />
        <span />
      </span>
      <span className="document-title">{title}</span>
    </span>
  );
}

function CertificationDocumentTile({ item }: { item: CertificationItem }) {
  const documentContent = <DocumentIcon title={item.title} />;

  if (item.href) {
    return (
      <a
        className="document-tile certification-document-tile"
        href={item.href}
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
      type="button"
      aria-label={`${item.title} certification coming soon`}
      disabled
    >
      {documentContent}
    </button>
  );
}

function CertificationDocumentDropdown({ item }: { item: CertificationItem }) {
  return (
    <details className="certification-document-dropdown-tile">
      <summary
        className="certification-document-dropdown-summary"
        aria-label={`Expand ${item.title} certification group`}
      >
        <DocumentIcon title={item.title} showToggle />

        {item.href ? (
          <a
            className="document-link-corner"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${item.title} PDF`}
            title={`Open ${item.title} PDF`}
          >
            ↗
          </a>
        ) : (
          <span
            className="document-link-corner document-link-corner-disabled"
            aria-hidden="true"
            title={`${item.title} PDF coming soon`}
          >
            ↗
          </span>
        )}
      </summary>

      <div className="certification-nested-document-grid">
        {item.children?.map((child) => (
          <CertificationDocumentTile item={child} key={child.id} />
        ))}
      </div>
    </details>
  );
}

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
                  <DocumentIcon title={featured.title} />
                </a>
              </div>
            </details>
          ) : null}

          {categories.map((category) => {
            const hasNestedItems = category.items.some(
              (item) => item.children && item.children.length > 0
            );

            return (
              <details className="certification-category" key={category.id}>
                <summary className="certification-summary">
                  <span className="certification-marker" aria-hidden="true" />
                  <span>{category.title}</span>
                </summary>

                <div
                  className={
                    hasNestedItems
                      ? 'certification-tree-grid'
                      : 'certification-document-grid'
                  }
                >
                  {category.items.map((item) =>
                    item.children && item.children.length > 0 ? (
                      <CertificationDocumentDropdown item={item} key={item.id} />
                    ) : (
                      <CertificationDocumentTile item={item} key={item.id} />
                    )
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}