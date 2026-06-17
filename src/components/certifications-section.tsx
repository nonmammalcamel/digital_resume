import type { ReactNode } from 'react';

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

function DocumentIcon({ title }: { title: string }) {
  return (
    <span className="document-icon" aria-hidden="true">
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

function DocumentMainLink({
  title,
  href,
  isDisabled = false,
  children
}: {
  title: string;
  href?: string;
  isDisabled?: boolean;
  children: ReactNode;
}) {
  if (href) {
    return (
      <a
        className="document-main-link"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${title}`}
        title={`Open ${title}`}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      className={
        isDisabled
          ? 'document-main-link document-main-link-disabled'
          : 'document-main-link document-main-link-placeholder'
      }
      title={isDisabled ? `${title} coming soon` : undefined}
    >
      {children}
    </span>
  );
}

function CertificationDocumentTile({ item }: { item: CertificationItem }) {
  return (
    <div className="document-tile certification-document-tile">
      <DocumentMainLink
        title={`${item.title} certification`}
        href={item.href}
        isDisabled={!item.href}
      >
        <DocumentIcon title={item.title} />
      </DocumentMainLink>
    </div>
  );
}

function CertificationDocumentDropdown({ item }: { item: CertificationItem }) {
  return (
    <div className="certification-document-dropdown-tile">
      <div className="document-tile certification-document-tile certification-document-parent-tile">
        <DocumentMainLink title={`${item.title} PDF`} href={item.href}>
          <DocumentIcon title={item.title} />
        </DocumentMainLink>

        <details className="certification-document-dropdown-details">
          <summary
            className="document-expand-button"
            aria-label={`Expand ${item.title} certification group`}
            title={`Expand ${item.title} certification group`}
          />

          <div className="certification-nested-document-grid">
            {item.children?.map((child) => (
              <CertificationDocumentTile item={child} key={child.id} />
            ))}
          </div>
        </details>
      </div>
    </div>
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
                <CertificationDocumentTile item={featured} />
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