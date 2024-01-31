import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const users = [
    {
      name: "Rajesh Kumar",
      description: "I enjoy exploring new things",
      interests: ["hiking", "cooking", "photography"],
      socials: [
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/rajeshkumar" },
        { platform: "Twitter", link: "https://www.twitter.com/rajeshkumar" },
        { platform: "Github", link: "https://www.github.com/rajeshkumar" },
      ],
    },
    {
      name: "Anjali Sharma",
      description: "I love reading and writing",
      interests: ["reading", "writing", "painting"],
      socials: [
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/anjalisharma" },
        { platform: "Twitter", link: "https://www.twitter.com/anjalisharma" },
        { platform: "Github", link: "https://www.github.com/anjalisharma" },
      ],
    },
    {
      name: "Amit Patel",
      description: "I'm passionate about technology",
      interests: ["coding", "gaming", "music"],
      socials: [
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/amitpatel" },
        { platform: "Twitter", link: "https://www.twitter.com/amitpatel" },
        { platform: "Github", link: "https://www.github.com/amitpatel" },
      ],
    },
    {
      name: "Pooja Singh",
      description: "Nature lover and adventure seeker",
      interests: ["traveling", "photography", "yoga"],
      socials: [
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/poojasingh" },
        { platform: "Twitter", link: "https://www.twitter.com/poojasingh" },
        { platform: "Github", link: "https://www.github.com/poojasingh" },
      ],
    },
    {
      name: "Arjun Gupta",
      description: "Fitness enthusiast and sports lover",
      interests: ["gym", "cricket", "swimming"],
      socials: [
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/arjungupta" },
        { platform: "Twitter", link: "https://www.twitter.com/arjungupta" },
        { platform: "Github", link: "https://www.github.com/arjungupta" },
      ],
    },
    {
      name: "Neha Kapoor",
      description: "Aspiring artist and creative mind",
      interests: ["painting", "writing", "crafting"],
      socials: [
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/neha-kapoor" },
        { platform: "Twitter", link: "https://www.twitter.com/neha_kapoor" },
        { platform: "Github", link: "https://www.github.com/neha-kapoor" },
      ],
    },
    {
      name: "Vivek Verma",
      description: "Tech geek and avid reader",
      interests: ["technology", "books", "gaming"],
      socials: [
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/vivekverma" },
        { platform: "Twitter", link: "https://www.twitter.com/vivekverma" },
        { platform: "Github", link: "https://www.github.com/vivekverma" },
      ],
    },
    {
      name: "Aisha Khan",
      description: "Passionate about social causes",
      interests: ["activism", "volunteering", "photography"],
      socials: [
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/aisha-khan" },
        { platform: "Twitter", link: "https://www.twitter.com/aishakhan" },
        { platform: "Github", link: "https://www.github.com/aishakhan" },
      ],
    },
    {
      name: "Suresh Sharma",
      description: "Family person and outdoor enthusiast",
      interests: ["family", "hiking", "gardening"],
      socials: [
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/sureshsharma" },
        { platform: "Twitter", link: "https://www.twitter.com/sureshsharma" },
        { platform: "Github", link: "https://www.github.com/sureshsharma" },
      ],
    },
    {
      name: "Meera Desai",
      description: "Adventurous soul and foodie",
      interests: ["traveling", "food", "adventure sports"],
      socials: [
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/meeradesai" },
        { platform: "Twitter", link: "https://www.twitter.com/meeradesai" },
        { platform: "Github", link: "https://www.github.com/meeradesai" },
      ],
    },
  ];

  return (
    <div className="app">
      {users.map(user=><BusinessCard user={user}/>)}
    </div>
  );
}

function BusinessCard({ user }) {
  return (
    <div className="business-card">
      <h1>{user.name}</h1>
      <p>{user.description}</p>
      <h3>Interests</h3>
      <ul className="interests-list">
        {user.interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <div className="socials">
        {user.socials.map((social) => (
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <button className="social-button">{social.platform}</button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
