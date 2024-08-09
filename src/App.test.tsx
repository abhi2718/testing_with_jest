import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";
const userName = "Abhishek Singh";
const userEmail = "abhiwebdev2718@gmail.com";
const name = "Abhishek Singh";
const email = "abhiwebdev2718@gmail.com";
describe("<App />", () => {
  it("it should show created user in table", () => {
    render(<App />);
  });
});
