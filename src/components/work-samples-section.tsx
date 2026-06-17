type WorkSampleItem = {
  id: string;
  title: string;
  href?: string;
};

type WorkSamplesSectionProps = {
  title: string;
  intro: string;
  items: readonly WorkSampleItem[];
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

export function WorkSamplesSection({
  title,
  intro,
  items
}: WorkSamplesSectionProps) {
  return (
    <section
      id="work-samples"
      className="content-section"
      aria-labelledby="work-samples-title"
    >
      <div className="section-label">04</div>

      <div className="section-body">
        <h2 id="work-samples-title" className="section-title">
          {title}
        </h2>

        <div className="work-sample-body">
          <p className="section-intro">{intro}</p>

          <div className="document-grid">
            {items.map((item) =>
              item.href ? (
                <a
                  className="document-tile"
                  href={item.href}
                  key={item.id}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.title} work sample`}
                  title={`Open ${item.title} work sample`}
                >
                  <DocumentIcon title={item.title} />
                </a>
              ) : (
                <span
                  className="document-tile document-tile-disabled"
                  key={item.id}
                  title={`${item.title} work sample coming soon`}
                >
                  <DocumentIcon title={item.title} />
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}