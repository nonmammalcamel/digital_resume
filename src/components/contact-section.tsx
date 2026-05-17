type ContactItem = {
  id: string;
  label: string;
  value: string;
  href?: string;
};

type ContactSectionProps = {
  title: string;
  intro: string;
  items: readonly ContactItem[];
};

export function ContactSection({ title, intro, items }: ContactSectionProps) {
  return (
    <section className="content-section" aria-labelledby="contact-title">
      <div className="section-label">07</div>

      <div className="section-body">
        <h2 id="contact-title" className="section-title">
          {title}
        </h2>

        <p className="section-intro">{intro}</p>

        <div className="experience-list">
          {items.map((item) => (
            <article className="experience-item" key={item.id}>
              <header className="experience-item-header">
                <div>
                  <h3 className="experience-role">{item.label}</h3>

                  {item.href ? (
                    <p className="experience-organization">
                      <a href={item.href}>{item.value}</a>
                    </p>
                  ) : (
                    <p className="experience-organization">{item.value}</p>
                  )}
                </div>
              </header>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}