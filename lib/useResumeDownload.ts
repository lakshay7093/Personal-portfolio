export const useResumeDownload = () => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Simplest and fastest - direct open in new tab
    // Works on all browsers including mobile
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return handleDownload;
};
