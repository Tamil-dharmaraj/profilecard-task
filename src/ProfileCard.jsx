// ProfileCard.js
import React from "react";

const ProfileCard = ({ image, name, role, bio }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{bio}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "5px solid",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "250px",
    textAlign: "center",
  },
  image: {
    width: "100px",
    borderRadius: "50%",
  },
};

export default ProfileCard;
