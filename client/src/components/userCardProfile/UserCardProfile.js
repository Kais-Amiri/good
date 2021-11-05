import React from "react";
import profile from "../../image/profile/profile.png";
function UserCardProfile() {
  return (
    <div
      className="d-none d-md-flex col-3 col-lg-2"
      style={{
        width: "210px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        border: "2px solid lightgrey",
        borderRadius: "7px",
        position: "fixed",
        top: "15%",
        right: "2%",
      }}
    >
      <img
        src={profile}
        alt="Profile picture"
        style={{ width: "120px", height: "120px", borderRadius: "50%" }}
      />
      <div style={{ textAlign: "start", whiteSpace: "nowrap" }}>
        <p>
          {`<Firstname> `}
          <span
            style={{
              fontSize: "1.2rem",
              textDecorationLine: "underline",
              letterSpacing: "2px",
              margin: "0",
              textTransform: "capitalize",
            }}
          >
            kais
          </span>
        </p>
        <p>
          {`<Lastname> `}
          <span
            style={{
              fontSize: "1.2rem",
              letterSpacing: "2px",
              margin: "0",
              textTransform: "capitalize",
            }}
          >
            amiri
          </span>
        </p>
        <button
          type="button"
          class="btn btn-outline-light"
          style={{ color: "rgb(1, 28, 46)" }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default UserCardProfile;
