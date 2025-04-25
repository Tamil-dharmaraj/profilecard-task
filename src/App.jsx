// App.js or ProfileList.js
import React from "react";
import ProfileCard from "./ProfileCard";
import profile1 from "./../src/assets/profile1.jpg";
import profile2 from "./../src/assets/profile2.avif";
import profile3 from "./../src/assets/profile3.jpg";

const profiles = [
  {
    image: profile1,
    name: "prithiviraj",
    role: "Frontend developer",
    bio: "BSc CS at Avvmspc college",
  },
  {
    image: profile2,
    name: "Rajavel",
    role: "Java developer",
    bio: "BE Mech at JJ Engineering college",
  },
  {
    image: profile3,
    name: "Tamil",
    role: "Frontend Developer",
    bio: "MSc CS Karpagam University",
  },
];

const App = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
};

export default App;
