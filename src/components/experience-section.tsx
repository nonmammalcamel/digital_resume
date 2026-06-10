type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  dates: string;
  details: readonly string[];
};

type ExperienceSectionProps = {
  title: string;
  items: readonly ExperienceItem[];
};

export function ExperienceSection({ title, items }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="content-section"
      aria-labelledby="experience-title"
    >
      <div className="section-label">02</div>

      <div className="section-body">
        <h2 id="experience-title" className="section-title">
          {title}
        </h2>

        <div className="experience-list">
          {items.map((item) => (
            <article className="experience-item" key={item.id}>
              <header className="experience-item-header">
                <div>
                  <h3 className="experience-role">{item.role}</h3>
                  <p className="experience-organization">{item.organization}</p>
                </div>

                <p className="experience-dates">{item.dates}</p>
              </header>

              <ul className="experience-details">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}