export const useResumeDownload = () => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Use API route which sends proper Content-Disposition: attachment header
    // This forces direct download on all browsers including mobile
    window.location.href = '/api/resume';
  };

  return handleDownload;
};
