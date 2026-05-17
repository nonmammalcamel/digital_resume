type ReferenceItem = {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
};

type ReferencesSectionProps = {
  title: string;
  items: readonly ReferenceItem[];
};

export function ReferencesSection({ title, items }: ReferencesSectionProps) {
  return (
    <section
      id="references"
      className="content-section"
      aria-labelledby="references-title"
    >
      <div className="section-label">06</div>

      <div className="section-body">
        <h2 id="references-title" className="section-title">
          {title}
        </h2>

        <div className="references-grid">
          {items.map((item) => (
            <article className="reference-card" key={item.id}>
              <div className="reference-card-header">
                <h3 className="reference-name">{item.name}</h3>

                <p className="reference-role">
                  {item.role.split('\n').map((line, index, lines) => (
                    <span key={`${line}-${index}`}>
                      {line}
                      {index < lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              </div>

              <div className="reference-contact">
                <p>{item.phone}</p>
                <p>{item.email}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}