import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const CustomScanner = () => {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data) => {
    if (data && data?.text) {
      setScanResult(data.text); // Extract only the text property from the result
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Qr Code Scan by Web Cam</h2>
      
      {/* Scanner container */}
      <div style={{ 
        width: 300, 
        height: 300, 
        margin: '0 auto', 
        border: '8px solid red', 
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
      }}>
        <QrReader
          onError={handleError}
          onResult={handleScan}
          style={{ width: '100%', height: '100%' }}
          constraints={{
            facingMode: "user" // Rear camera
          }}
        />
      </div>

      {/* Scanned result display */}
      <div style={{ marginTop: '20px' }}>
        <h3>Scanned By WebCam Code:</h3>
        <p>{scanResult ? scanResult : "No code scanned yet"}</p>
      </div>
    </div>
  );
};

export default CustomScanner;
