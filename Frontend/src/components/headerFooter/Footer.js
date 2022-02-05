import React from "react";
export const Footer = (props) => {
  return (
    <footer>
      <h2>
      About
      </h2>
      <span className="insFacebook" to={"/press"}>
					&copy;{new Date().getFullYear()} Community Recipes
				</span>
    </footer>
  )
}