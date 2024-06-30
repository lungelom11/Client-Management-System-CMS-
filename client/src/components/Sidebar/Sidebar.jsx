import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSection = () => {
    setIsActive(!isActive);
  };

  const navigationLinks = [
    {
      href: "/dashboard",
      iconClass: "fa-regular fa-building",
      text: "Home",
      isActive: true,
    },
    {
      href: "/active",
      iconClass: "fa-regular fa-hard-drive",
      text: "Active",
    },
    {
      href: "/dashboard/pending",
      iconClass: "fa-regular fa-lightbulb",
      text: "Pending",
      count: 11,
    },
    {
      href: "/profile",
      iconClass: "fa-regular fa-user",
      text: "Profile",
    },
    {
      href: "/logout",
      iconClass: "fa-solid fa-right-from-bracket",
      text: "Logout",
    },
  ];

  return (
    <>
      <section className={isActive ? "active" : ""}>
        <div className="button" onClick={toggleSection}>
          <i className="fa-solid fa-bars" />
        </div>
        <div className="sidebar">
          <div className="profile">
            <div className="pro_img">
              <img
                src="https://i.imgur.com/rgiY5VZ.png"
                alt="profile_picture"
              />
            </div>
            <div className="pro_info">
              <h3>Admin Account</h3>
              <p>admin@cms.com</p>
            </div>
          </div>
          <ul>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className={link.isActive ? "active" : ""}>
                  <span className="icon">
                    <i className={link.iconClass} />
                  </span>
                  <span className="item">{link.text}</span>
                  {link.count && <span className="count">{link.count}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
