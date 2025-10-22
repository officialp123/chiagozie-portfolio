import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>
<Typography variant="h6" className="mt-4">
  🧭 Product Management & Delivery
</Typography>
<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-2">
  <li>Product Strategy</li>
  <li>Roadmapping</li>
  <li>Agile / Scrum</li>
  <li>Project Management</li>
  <li>Stakeholder Communication</li>
  <li>User Research</li>
  <li>Go-to-Market Planning</li>
  <li>Team Leadership</li>
  <li>Jira</li>
  <li>Amplitude</li>
  <li>Mixpanel</li>
  <li>Google Analytics</li>
</ul>
      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;

