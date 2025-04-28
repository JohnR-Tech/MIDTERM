import React from "react";
import { QRCode } from "react-qrcode-logo";
import schoolLogo from "/Images/earistlogo.png";
import studentPhoto from "/Images/my1x1.png";
import freeTuition from "/Images/freetuition.png";

const CertificateOfRegistration = ({ studentNo }) => {
  const subjects = [
    { code: "INTHCILC", subject_title: "Introduction to Human Computer Interaction (Lecture)", lec: 2, lab: 0, credit: 2, tuition: 2, section: "BSINFOTEC H2C", schedule: "T 01:00PM-03:00PM", faculty: "Macasil, Ma. Jasmine Rose" },
    { code: "NETWKLB1", subject_title: "Networking 1 (Laboratory)", lec: 0, lab: 1, credit: 1, tuition: 1, section: "BSINFOTEC H2C", schedule: "TH 03:00PM-06:00PM", faculty: "Almazan, Edmund" },
    { code: "DBMSLAB2", subject_title: "Database Management System 2 (Laboratory)", lec: 0, lab: 1, credit: 1, tuition: 1, section: "BSINFOTEC H2C", schedule: "TH 06:00PM-09:00PM", faculty: "Carlos, Ernanie" },
    { code: "WEBDVLC2", subject_title: "Web Development 2 (Lecture)", lec: 2, lab: 0, credit: 2, tuition: 2, section: "BSINFOTEC H2C", schedule: "T 11:00AM-01:00PM", faculty: "Sison, Edgardo" },
    { code: "NETWKLC1", subject_title: "Networking 1 (Lecture)", lec: 2, lab: 0, credit: 2, tuition: 2, section: "BSINFOTEC H2C", schedule: "T 03:00PM-05:00PM", faculty: "Almazan, Edmund" },
    { code: "WEBDVLB2", subject_title: "Web Development 2 (Laboratory)", lec: 0, lab: 1, credit: 1, tuition: 1, section: "BSINFOTEC H2C", schedule: "W 01:00PM-04:00PM", faculty: "Sison, Edgardo" },
    { code: "GEELECCP", subject_title: "Communicative Proficiency in Business Correspondence and Research Writing", lec: 3, lab: 0, credit: 3, tuition: 3, section: "BSINFOTEC H2C", schedule: "TH 08:00AM-11:00AM", faculty: "Pardito, Ranilo" },
    { code: "DBMSLEC2", subject_title: "Database Management System 2 (Lecture)", lec: 2, lab: 0, credit: 2, tuition: 2, section: "BSINFOTEC H2C", schedule: "T 06:00PM-08:00PM", faculty: "Carlos, Ernanie" },
    { code: "INTHCILB", subject_title: "Introduction to Human Computer Interaction (Laboratory)", lec: 0, lab: 0, credit: 1, tuition: 1, section: "BSINFOTEC H2C", schedule: "W 10:00AM-01:00PM", faculty: "Macasil, Ma. Jasmine Rose" },
    { code: "GEPEHEF2", subject_title: "Physical Activity Towards Health and Fitness II", lec: 2, lab: 0, credit: 2, tuition: 2, section: "BSINFOTEC H2C", schedule: "W 07:00AM-09:00AM", faculty: "Barizo Jr., Crisanto" },
    { code: "IPATLAB1", subject_title: "Integrative Programming and Technologies 1 (Laboratory)", lec: 0, lab: 2, credit: 2, tuition: 2, section: "BSINFOTEC H2C", schedule: "TH 11:00AM-02:00PM", faculty: "San Jose, Dhani" },
    { code: "IPATLEC1", subject_title: "Integrative Programming and Technologies 1 (Lecture)", lec: 1, lab: 0, credit: 1, tuition: 1, section: "BSINFOTEC H2C", schedule: "T 08:00AM-10:00AM", faculty: "San Jose, Dhani" },
  ];

  return (
    <div style={{ width: "900px", margin: "30px auto", padding: "20px", border: "2px solid black", fontFamily: "Arial, sans-serif" }}>
      {}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <img src={schoolLogo} alt="School Logo" style={{ width: "90px" }} />
        <div style={{ textAlign: "center", flex: 1 }}>
          <h4 style={{ margin: "0" }}>Republic of the Philippines</h4>
          <h3 style={{ margin: "0" }}>Eulogio "Amang" Rodriguez Institute of Science and Technology</h3>
          <p style={{ margin: "0" }}>Nagtahan St. Sampaloc, Manila</p>
          <h2 style={{ margin: "5px 0 0 0" }}>Certificate of Registration</h2>
        </div>
        <img src={studentPhoto} alt="Student" style={{ width: "90px", height: "110px", objectFit: "cover", border: "1px solid black" }} />
      </div>

      {}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px", fontSize: "14px" }}>
        <div>Registration No: <span style={{ color: "red" }}>2147483647</span></div>
        <div>Academic Year/Term: <span style={{ color: "red" }}>Second Semester AY 2024-2025</span></div>
      </div>

      {}
      <table style={{ width: "100%", border: "1px solid black", borderCollapse: "collapse", marginBottom: "0" }}>
        <thead>
          <tr>
            <th colSpan={6} style={{ background: "#ccc", textAlign: "center", padding: "6px", border: "1px solid black" }}>STUDENT GENERAL INFORMATION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.studentInfoLeft}><b>Student No</b> : 234-02164M</td>
            <td style={styles.studentInfoRight}><b>College</b> : College of Computing Studies</td>
          </tr>
          <tr>
            <td style={styles.studentInfoLeft}><b>Name</b> : MENDOZA, JOHN RAY M</td>
            <td style={styles.studentInfoRight}><b>Program</b> : Bachelor of Science in Information Technology</td>
          </tr>
          <tr>
            <td style={styles.studentInfoLeft}><b>Gender</b> : Male</td>
            <td style={styles.studentInfoRight}><b>Major</b> : </td>
            <td style={styles.studentInfoRight}><b>Curriculum</b> : 2018-2019</td>
          </tr>
          <tr>
            <td style={styles.studentInfoLeft}><b>Age</b> : 21</td>
            <td style={styles.studentInfoRight}><b>Year Level</b> : Second Year-Regular</td>
            <td style={styles.studentInfoRight}><b>Scholarship/Discount</b> : UNIFAST-FHE</td>
          </tr>
          <tr>
            <td colSpan={6} style={styles.studentInfoLeft}><b>Email Address</b> : markjaymendoza7@gmail.com</td>
          </tr>
        </tbody>
      </table>

      {}
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
        <thead>
          <tr>
            <th style={styles.th}>CODE</th>
            <th style={styles.th}>SUBJECT TITLE</th>
            <th style={styles.th}>Lec</th>
            <th style={styles.th}>Lab</th>
            <th style={styles.th}>Credit</th>
            <th style={styles.th}>Tuition</th>
            <th style={styles.th}>SECTION</th>
            <th style={styles.th}>SCHEDULE / ROOM</th>
            <th style={styles.th}>FACULTY</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td style={styles.td}>{subject.code}</td>
              <td style={styles.td}>{subject.subject_title}</td>
              <td style={styles.td}>{subject.lec}</td>
              <td style={styles.td}>{subject.lab}</td>
              <td style={styles.td}>{subject.credit}</td>
              <td style={styles.td}>{subject.tuition}</td>
              <td style={styles.td}>{subject.section}</td>
              <td style={styles.td}>{subject.schedule}</td>
              <td style={styles.td}>{subject.faculty}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <img src={freeTuition} alt="Free Tuition Stamp" style={{ width: "120px" }} />
        <QRCode value={`Student No: ${studentNo}`} size={100} />
      </div>
    </div>
  );
};

const styles = {
  th: {
    border: "1px solid black",
    padding: "5px",
    backgroundColor: "#ccc",
    fontWeight: "bold",
    textAlign: "center",
  },
  td: {
    border: "1px solid black",
    padding: "5px",
    textAlign: "center",
  },
  studentInfoLeft: {
    border: "1px solid black",
    padding: "4px",
    fontSize: "13px",
  },
  studentInfoRight: {
    border: "1px solid black",
    padding: "4px",
    fontSize: "13px",
  },
};

export default CertificateOfRegistration;
