"use client";

import Button from "@/components/general/button";

const DownloadCV: React.FC = () => {
  return (
    <Button
      onClick={() =>
        window?.open("/files/Chiagozie_Uchenna_Resume.pdf", "_blank")
      }
    >
      Download CV
    </Button>
  );
};

export default DownloadCV;

