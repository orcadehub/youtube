import React, { useState } from 'react';

function Verify() {
  const [certificateId, setCertificateId] = useState('');

  const handleVerify = () => {
    // Add verification logic here, such as checking the ID against a database
    alert(`Verifying certificate with ID: ${certificateId}`);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f5',
      padding: '20px',
    },
    form: {
      width: '100%',
      maxWidth: '400px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2>Verify Certificate</h2>
        <input
          type="text"
          placeholder="Enter Certificate ID"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleVerify} style={styles.button}>
          Verify
        </button>
      </div>
    </div>
  );
}

export default Verify;
