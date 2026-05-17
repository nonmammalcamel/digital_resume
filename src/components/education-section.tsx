type EducationItem = {
  id: string;
  credential: string;
  institution: string;
};

type EducationSectionProps = {
  title: string;
  items: readonly EducationItem[];
};

export function EducationSection({ title, items }: EducationSectionProps) {
  return (
    <section className="content-section" aria-labelledby="education-title">
      <div className="section-label">05</div>

      <div className="section-body">
        <h2 id="education-title" className="section-title">
          {title}
        </h2>

        <div className="experience-list">
          {items.map((item) => (
            <article className="experience-item" key={item.id}>
              <header className="experience-item-header">
                <div>
                  <h3 className="experience-role">{item.credential}</h3>
                  <p className="experience-organization">{item.institution}</p>
                </div>
              </header>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}