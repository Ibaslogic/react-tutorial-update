import React from "react"

const Header = () => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }

  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "40px", marginBottom: "15px", lineHeight: "40px", color: "#7d7d7d" }}>Simple Todo App</h1>
      <p style={{ fontSize: "16px" }}>Please add to-dos item(s) through the input field</p>
    </header>
  )
}

export default Header