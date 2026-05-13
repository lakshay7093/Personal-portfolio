export const useResumeDownload = () => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Force download using fetch + blob for all browsers
    fetch('/resume.pdf')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch resume');
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Lakshay_Saini_Resume.pdf';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        
        // Cleanup
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 100);
      })
      .catch((error) => {
        console.error('Download failed:', error);
        // Fallback: open in new tab
        window.open('/resume.pdf', '_blank');
      });
  };

  return handleDownload;
};
