type WorkSampleItem = {
  id: string;
  title: string;
};

type WorkSamplesSectionProps = {
  title: string;
  intro: string;
  items: readonly WorkSampleItem[];
};

export function WorkSamplesSection({
  title,
  intro,
  items
}: WorkSamplesSectionProps) {
  return (
    <section className="content-section" aria-labelledby="work-samples-title">
      <div className="section-label">04</div>

      <div className="section-body">
        <h2 id="work-samples-title" className="section-title">
          {title}
        </h2>

        <div className="work-sample-body">
          <p className="section-intro">{intro}</p>

          <div className="document-grid">
            {items.map((item) => (
              <button
                className="document-tile"
                key={item.id}
                type="button"
                aria-label={`Open ${item.title} work sample`}
              >
                <span className="document-icon" aria-hidden="true">
                  <span className="document-corner" />
                  <span className="document-lines">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className="document-title">{item.title}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}