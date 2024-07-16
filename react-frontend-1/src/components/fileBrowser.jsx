import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

function FileBrowser() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [analyse, setAnalyse] = useState(false);
  const [resp, setResp] = useState(false);
  const [reply, setReply] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const handleResponse = () => {
    setResp(true);
  };
  const handleLoading = (state) => {
    if ((state = true)) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      setAnalyse(false);
      setResp(false);
      const response = await fetch("http://127.0.0.1:8000/Home", {
        method: "POST",
        body: formData,
      });
      handleLoading(true);

      if (response.ok) {
        const data = await response.json();
        setTimeout(() => {
          setAnalyse(true);
          setReply(data);
          setIsLoading(false);
        }, 5000);
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAnalyse(false);
      setSelectedFile(file);

      // Read file content
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Use useEffect to log the updated reply state
  useEffect(() => {
    console.log(reply);
  }, [reply]); // This will run whenever the 'reply' state changes

  return (
    <div className="flex justify-center items-center h-screen mx-">
      <div className="py-20">
        <div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-warning rounded-lg"
            style={{width:"500px"}}
            onChange={handleFileChange}
          />
          <button className="btn btn-warning mx-2 rounded-lg" onClick={handleUpload}>
            Upload
          </button>
        </div>

        {/* Display the selected image */}
        {fileContent && (
          <div className="my-2">
            <p>Selected Image:</p>
            <img
              src={fileContent}
              alt="Selected File"
              style={{ maxWidth: "100%", maxHeight: "512px" }}
            />
          </div>
        )}
        <div>{isLoading && <LoadingSpinner />}</div>
        <div>
          {analyse ? (
            <>
              <button className="btn btn-warning rounded-lg" onClick={handleResponse}>
                Analyse
              </button>
              <div>
                {/* Display the reply content */}
                {resp && reply && <p>Reply: {reply.message}</p>}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}


export default FileBrowser;