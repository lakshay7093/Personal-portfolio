export const useResumeDownload = () => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    console.log('Resume download initiated...');
    
    // Force download using fetch + blob for all browsers
    fetch('/resume.pdf')
      .then(response => {
        console.log('Fetch response:', response.status);
        if (!response.ok) throw new Error('Failed to fetch resume');
        return response.blob();
      })
      .then(blob => {
        console.log('Blob created, size:', blob.size);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Lakshay_Saini_Resume.pdf';
        a.style.display = 'none';
        document.body.appendChild(a);
        
        console.log('Triggering download...');
        a.click();
        
        // Cleanup
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          console.log('Cleanup complete');
        }, 100);
      })
      .catch((error) => {
        console.error('Download failed:', error);
        alert('Download failed. Opening PDF in new tab...');
        // Fallback: open in new tab
        window.open('/resume.pdf', '_blank');
      });
  };

  return handleDownload;
};
