import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCertificatesDropdownOpen, setIsCertificatesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find(user => user.isLoggedIn);
    setIsLoggedIn(!!currentUser);
  }, []);

  const handleLogout = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map(user => ({ ...user, isLoggedIn: false }));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setIsLoggedIn(false);
    navigate("/login");
  };

  const toggleProfileDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) setIsCertificatesDropdownOpen(false); // Close certificates dropdown if profile dropdown opens
  };

  const toggleCertificatesDropdown = () => {
    setIsCertificatesDropdownOpen(!isCertificatesDropdownOpen);
    if (!isCertificatesDropdownOpen) setIsDropdownOpen(false); // Close profile dropdown if certificates dropdown opens
  };

  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#343a40",
      color: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      position: "sticky",
      top: "0",
      zIndex: "1000",
    },
    logo: {
      fontSize: "28px",
      fontWeight: "bold",
      cursor: "pointer",
      color: "#6a0dad",
      textDecoration: "none",
    },
    nav: {
      display: "flex",
      gap: "20px",
      listStyle: "none",
      margin: "0",
      padding: "0",
    },
    navItem: {
      fontSize: "16px",
      cursor: "pointer",
      color: "#fff",
      textDecoration: "none",
      transition: "color 0.3s",
      position: "relative",
    },
    dropdownContainer: {
      position: "relative",
    },
    certificatesDropdown: {
      position: "absolute",
      top: "100%",
      left: "0",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginTop: "10px",
      padding: "10px",
      width: "150px",
      display: isCertificatesDropdownOpen ? "block" : "none",
    },
    profileDropdown: {
      position: "absolute",
      top: "100%",
      left: "0",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginTop: "10px",
      padding: "10px",
      width: "150px",
      display: isDropdownOpen ? "block" : "none",
    },
    dropdownItem: {
      padding: "8px",
      cursor: "pointer",
      color: "#343a40",
      textDecoration: "none",
      borderRadius: "4px",
      transition: "background-color 0.2s",
    },
    profileContainer: {
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    profileIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#007bff",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    buttonContainer: {
      display: "flex",
      gap: "12px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    loginButton: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    signupButton: {
      backgroundColor: "#28a745",
      color: "#fff",
    },
  };

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>
        OrcadeHub LMS
      </Link>

      <nav>
        <ul style={styles.nav}>
          <Link to="/assessment" style={styles.navItem}><li>Assessments</li></Link>
          <Link to="/onlinecourses" style={styles.navItem}><li>Online Courses</li></Link>
          <Link to="/payments" style={styles.navItem}><li>Payments</li></Link>
          <Link to="/codingplatform" style={styles.navItem}><li>Coding Platform</li></Link>
          <Link to="/progress" style={styles.navItem}><li>Progress Tracking</li></Link>
          <Link to="/profile" style={styles.navItem}><li>User Profile</li></Link>
          <div
            style={styles.dropdownContainer}
            onClick={toggleCertificatesDropdown}
          >
            <span style={styles.navItem}>Certificates</span>
            <div style={styles.certificatesDropdown}>
              <div> <Link to="/certificate/verify" style={styles.dropdownItem}>Verify</Link> </div>
              <div> <Link to="/certificate/download" style={styles.dropdownItem}>Download</Link></div>
            </div>
          </div>
        </ul>
      </nav>

      <div style={styles.profileContainer}>
        {isLoggedIn ? (
          <div
            style={styles.profileIcon}
            onClick={toggleProfileDropdown}
          >
            <span>P</span>
            <div style={styles.profileDropdown}>
              <Link to="/profile" style={styles.dropdownItem}>Dashboard</Link>
              <div onClick={handleLogout} style={styles.dropdownItem}>Logout</div>
            </div>
          </div>
        ) : (
          <div style={styles.buttonContainer}>
            <Link to="/login">
              <button style={{ ...styles.button, ...styles.loginButton }}>Log In</button>
            </Link>
            <Link to="/sign">
              <button style={{ ...styles.button, ...styles.signupButton }}>Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
