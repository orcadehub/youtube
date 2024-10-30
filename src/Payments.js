import React from 'react';

function Payments() {
  const paymentHistory = [
    { date: '2024-08-15', amount: '$100', status: 'Completed' },
    { date: '2024-09-01', amount: '$150', status: 'Pending' },
    { date: '2024-09-15', amount: '$200', status: 'Completed' },
    { date: '2024-10-01', amount: '$250', status: 'Failed' },
  ];

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    th: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "12px",
      textAlign: "left",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
      textAlign: "left",
    },
    row: {
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    rowHover: {
      backgroundColor: "#f1f1f1",
    },
    statusCompleted: {
      color: "green",
      fontWeight: "bold",
    },
    statusPending: {
      color: "orange",
      fontWeight: "bold",
    },
    statusFailed: {
      color: "red",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Payment History</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Amount</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment, index) => (
            <tr
              key={index}
              style={styles.row}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.rowHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
            >
              <td style={styles.td}>{payment.date}</td>
              <td style={styles.td}>{payment.amount}</td>
              <td
                style={{
                  ...styles.td,
                  ...(payment.status === "Completed"
                    ? styles.statusCompleted
                    : payment.status === "Pending"
                    ? styles.statusPending
                    : styles.statusFailed),
                }}
              >
                {payment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payments;
