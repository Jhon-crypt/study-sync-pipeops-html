"use client"

import { useState } from "react";


const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    const reader = new FileReader();

    reader.onload = async () => {
      const base64Buffer = reader.result.split(';base64,')[1];

      try {
        const response = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 98c615784ccb5fe5936fbc0cbe9dfdb408d92f0f2062a204e958dda8e680d5f`
          },
          body: JSON.stringify({ image: base64Buffer }),
        });

        const result = await response.json();
        if (response.ok) {
          setUploadStatus('File uploaded successfully!');
          console.log(result); // Log the response data
        } else {
          setUploadStatus(`Error: ${result.error}`);
        }
      } catch (error) {
        setUploadStatus(`Error: ${error.message}`);
      }
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default ImageUpload;
