import React from 'react'

function DownloadFile() {
    const downloadCSV = async () => {
        const response = await fetch('http://localhost:8000/submissions/download', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/csv',
            },
        });
    
        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'submissions.csv';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } else {
            alert('Error downloading the file');
        }
    };
    
   
  return (
    <div>

    <button onClick={downloadCSV}>Download Submissions</button>
    
    </div>
  )
}

export default DownloadFile
