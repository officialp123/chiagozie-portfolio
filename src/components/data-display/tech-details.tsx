'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({ url, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails;

