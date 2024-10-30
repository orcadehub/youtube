import React from "react";

function OnlineCourses() {
  const courses = [
    {
      title: "Full Stack Development",
      duration: "6 Months",
      startDate: "2024-11-01",
      benefits: ["Live Projects", "Certification", "Job Assistance"],
      price: "$299",
    },
    {
      title: "Data Science Bootcamp",
      duration: "4 Months",
      startDate: "2024-11-10",
      benefits: ["Hands-on Labs", "Career Support", "Mentorship"],
      price: "$399",
    },
    {
      title: "UI/UX Design",
      duration: "3 Months",
      startDate: "2024-11-15",
      benefits: ["Portfolio Building", "Case Studies", "1-on-1 Sessions"],
      price: "$249",
    },
    {
      title: "Python Programming",
      duration: "2 Months",
      startDate: "2024-12-01",
      benefits: ["Real-world Examples", "Certificate", "Q&A Sessions"],
      price: "$199",
    },
    {
      title: "Machine Learning",
      duration: "5 Months",
      startDate: "2024-12-10",
      benefits: ["Projects", "Certification", "Industry Mentors"],
      price: "$399",
    },
    {
      title: "Digital Marketing",
      duration: "3 Months",
      startDate: "2024-11-20",
      benefits: ["SEO Training", "Social Media Strategy", "Analytics"],
      price: "$279",
    },
    {
      title: "Cloud Computing",
      duration: "6 Months",
      startDate: "2024-11-25",
      benefits: ["AWS Training", "Hands-on Labs", "Certification"],
      price: "$499",
    },
    {
      title: "Cyber Security",
      duration: "4 Months",
      startDate: "2024-12-05",
      benefits: ["Ethical Hacking", "Certifications", "Live Labs"],
      price: "$450",
    },
    {
      title: "Blockchain Fundamentals",
      duration: "3 Months",
      startDate: "2024-12-15",
      benefits: ["Smart Contracts", "Real Projects", "Certification"],
      price: "$399",
    },
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
      textAlign: "center",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
    },
    card: {
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "transform 0.3s",
    },
    cardHover: {
      transform: "scale(1.03)",
    },
    courseTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "10px",
    },
    courseDetail: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "8px",
    },
    benefitsList: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "8px",
    },
    price: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#007bff",
      marginBottom: "10px",
    },
    button: {
      padding: "8px",
      fontSize: "14px",
      borderRadius: "4px",
      border: "none",
      color: "#fff",
      backgroundColor: "#007bff",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Available Online Courses</h1>
      <div style={styles.grid}>
        {courses.map((course, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = styles.cardHover.transform)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <div style={styles.courseTitle}>{course.title}</div>
            <div style={styles.courseDetail}>
              <strong>Duration:</strong> {course.duration}
            </div>
            <div style={styles.courseDetail}>
              <strong>Start Date:</strong> {course.startDate}
            </div>
            <div style={styles.benefitsList}>
              <strong>Benefits:</strong>
              <ul>
                {course.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div style={styles.price}>{course.price}</div>
            <button
              style={styles.button}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)
              }
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineCourses;
