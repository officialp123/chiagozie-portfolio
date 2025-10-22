import Image from 'next/image';

import SagarFullPose from '/public/images/chiagozie-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={SagarFullPose}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
  I&apos;m a strategic,{' '}
  <Link
    noCustomization
    externalLink
    withUnderline
    href={EXTERNAL_LINKS.LINKEDIN}
  >
    product and project manager
  </Link>{' '}
  with a strong technical foundation and over 7 years of experience in the digital product space, including 5 years working with Webflow and modern frontend technologies. I specialize in leading cross-functional teams to deliver user-centered, scalable solutions — from concept to deployment. My approach blends design thinking, agile execution, and technical fluency to build products that meet real-world needs.
</Typography>
<Typography>
  I&apos;m committed to delivering outcomes through a balance of user empathy, roadmap clarity, and technical oversight. I actively drive accessibility, performance optimization, and team collaboration — ensuring that what we ship is fast, functional, and loved by users. With hands-on skills in HTML, CSS, JavaScript, TypeScript, and React, I’m equally comfortable managing timelines as I am jumping into code reviews.
</Typography>
<Typography>
  I take pride in working end to end — from strategic ideation and sprint planning to execution and launch. Whether leading a 0→1 product or scaling an existing platform, I bring structured thinking, curiosity, and energy to every phase of the product lifecycle.
</Typography>
<Typography>
  I&apos;m always exploring new ways to improve delivery, increase impact, and inspire great teams. Technology should solve real problems — and I’m excited to contribute my skills to products that do exactly that. Feel free to explore my{' '}
  <Link
    noCustomization
    externalLink
    withUnderline
    href={EXTERNAL_LINKS.LINKEDIN}
  >
    LinkedIn
  </Link>{' '}
  for my latest projects or connect via{' '}
  <Link
    noCustomization
    externalLink
    withUnderline
    href={EXTERNAL_LINKS.GITHUB}
  >
    GitHub
  </Link>
  .
</Typography>

         <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.Sc. in Computer Science
              </Typography>
              <Typography component="li">Detail-oriented and Problem solving</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Aspiring creative Individual</Typography>
            </ul>
          </div>
     
          <Typography>
            One last thing, I&apos;m available for full time or contract work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
          </div>
      
      </div>
    </Container>
  );
};

export default AboutMeSection;

