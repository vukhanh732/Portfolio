import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vu Luu </span>
            from <span className="purple"> Sydney, NSW.</span>
            <br />
            I am currently a student at UNSW.
            <br />
            <br />
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Poker
            </li>
            <li className="about-activity">
              <ImPointRight /> Lifting Weights
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do the things that you don't want to do"{" "}
          </p>
          <footer className="blockquote-footer">Hamza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
