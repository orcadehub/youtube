import React from "react";

// Collaborator logos as placeholders
const collaborators = [
  "https://via.placeholder.com/100x50",
  "https://via.placeholder.com/100x50",
  "https://via.placeholder.com/100x50",
  "https://via.placeholder.com/100x50",
  "https://via.placeholder.com/100x50",
];

function Home() {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
    },
    heroSection: {
      padding: "50px 20px",
      backgroundColor: "#f5f5f5",
    },
    heroImage: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    collaboratorSection: {
      padding: "20px",
      backgroundColor: "#fff",
      borderTop: "2px solid #e0e0e0",
      overflow: "hidden",
    },
    collaboratorContainer: {
      display: "flex",
      justifyContent: "space-around",
      gap: "20px",
      animation: "scroll 10s linear infinite",
    },
    collaboratorImage: {
      width: "100px",
      height: "50px",
      objectFit: "cover",
    },
    testimonialSection: {
      padding: "40px 20px",
      backgroundColor: "#f9f9f9",
    },
    testimonialCard: {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
    },
    footer: {
      padding: "20px",
      backgroundColor: "#343a40",
      color: "#fff",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <img
          src="https://via.placeholder.com/1200x400" // Replace with actual uploaded image
          alt="LMS Showcase"
          style={styles.heroImage}
        />
        <h1>Welcome to OrcadeHub LMS</h1>
        <p>Empowering students and educators with a comprehensive learning platform.</p>
      </section>

      {/* Collaborators Section */}
      <section style={styles.collaboratorSection}>
        <h2>Our Collaborators</h2>
        <div style={styles.collaboratorContainer}>
          {collaborators.map((logo, index) => (
            <img key={index} src={logo} alt="Collaborator Logo" style={styles.collaboratorImage} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialSection}>
        <h2>What People Are Saying</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <div style={styles.testimonialCard}>
            <p><strong>SVCET College</strong></p>
            <p>"OrcadeHub LMS has transformed our approach to education with a streamlined, easy-to-use platform for our students and faculty."</p>
          </div>
          <div style={styles.testimonialCard}>
            <p><strong>John Smith</strong> - Student</p>
            <p>"The coding platform and progress tracking have been invaluable for my learning journey. Thank you OrcadeHub!"</p>
          </div>
          <div style={styles.testimonialCard}>
            <p><strong>Jane Doe</strong> - Faculty</p>
            <p>"The LMS has allowed us to deliver courses online seamlessly and monitor student progress efficiently."</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2024 OrcadeHub LMS. All rights reserved.</p>
        <p>
          <a href="/privacy" style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}>
            Privacy Policy
          </a>
          |
          <a href="/terms" style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}>
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
