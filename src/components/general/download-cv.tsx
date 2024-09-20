"use client";

import Button from "@/components/general/button";

const DownloadCV = () => {
  return (
    <Button
      onClick={() =>
        window?.open("/files/Chiagozie_Uchenna_senior_frontend_Developer.pdf "_blank")
      }
    >
      Download CV
    </Button>
  );
};

export default DownloadCV;
