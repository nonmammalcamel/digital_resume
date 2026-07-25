import { AboutSection } from '@/components/about-section';
import { CertificationsSection } from '@/components/certifications-section';
import { ContactSection } from '@/components/contact-section';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import { HeroHeader } from '@/components/hero-header';
import { LoadingScreen } from '@/components/loading-screen';
import { ReferencesSection } from '@/components/references-section';
import { WorkSamplesSection } from '@/components/work-samples-section';
import { siteContent } from '@/content/site-content';

export default function HomePage() {
  return (
    <>
      <LoadingScreen />

      <main>
        <HeroHeader
          name={siteContent.identity.name}
          role={siteContent.identity.role}
          navItems={siteContent.navigation}
        />

        <div className="page-content">
          <AboutSection
            title={siteContent.about.title}
            paragraphs={siteContent.about.paragraphs}
          />

          <ExperienceSection
            title={siteContent.experience.title}
            items={siteContent.experience.items}
          />

          <CertificationsSection
            title={siteContent.certifications.title}
            intro={siteContent.certifications.intro}
            featured={siteContent.certifications.featured}
            categories={siteContent.certifications.categories}
          />

          <WorkSamplesSection
            title={siteContent.workSamples.title}
            intro={siteContent.workSamples.intro}
            items={siteContent.workSamples.items}
          />

          <EducationSection
            title={siteContent.education.title}
            items={siteContent.education.items}
          />

          <ReferencesSection
            title={siteContent.references.title}
            items={siteContent.references.items}
          />

          <ContactSection
            title={siteContent.contact.title}
            intro={siteContent.contact.intro}
            items={siteContent.contact.items}
          />
        </div>
      </main>
    </>
  );
}