import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--label-color)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "#fff",
            fontSize: "6rem",
            letterSpacing: "1.4px",
            marginBottom: "1rem",
          }}
        >
          404 - Page Not Found
        </h1>
        <p style={{ fontSize: "1.4rem", marginBottom: "3rem" }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <button className="btn-back" onClick={() => navigate("/")}>
          Take me Back
        </button>
      </div>
    </section>
  );
};

export default NotFound;
