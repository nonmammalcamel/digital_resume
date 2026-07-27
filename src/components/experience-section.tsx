type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  dates: string;
  description: string;
  appliedSkills: string;
};

type ExperienceSectionProps = {
  title: string;
  items: readonly ExperienceItem[];
};

export function ExperienceSection({
  title,
  items
}: ExperienceSectionProps) {
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
              <div className="experience-item-header">
                <div>
                  <h3 className="experience-role">{item.role}</h3>

                  {item.organization ? (
                    <p className="experience-organization">
                      {item.organization}
                    </p>
                  ) : null}
                </div>

                <p className="experience-dates">{item.dates}</p>
              </div>

              <div className="experience-content">
                <p className="experience-description">
                  {item.description}
                </p>

                <p className="experience-applied-skills">
                  <strong>Applied Skills:</strong>{' '}
                  {item.appliedSkills}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}