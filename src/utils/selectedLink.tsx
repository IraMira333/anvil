export const selectedLink = (locale: string): string => {
  switch (locale) {
    case "en":
      return "https://docs.google.com/document/d/1wfAKxyP-3I3JA4rfGEHxteL4JlBGfFA1W6Mr4PYRWkg/edit?usp=drive_link";
    default:
      return "https://docs.google.com/document/d/16KWE2QtL9kYSdB_Xf-0ks07lkqsjnvZJ/edit?usp=drive_link&ouid=107566800767548958131&rtpof=true&sd=true";
  }
};
