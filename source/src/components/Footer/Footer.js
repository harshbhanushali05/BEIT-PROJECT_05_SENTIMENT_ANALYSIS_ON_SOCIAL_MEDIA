import React from "react";

export default function Footer() {
  return (
    <section id="footer">
      <ul className="icons">
        <li>
          <a href="#" className="icon brands fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-facebook-f">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon solid fa-rss">
            <span className="label">RSS</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon solid fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
