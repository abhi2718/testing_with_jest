import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

const name = "Abhishek Singh";
const email = "abhiwebdev2718@gmail.com";
describe("<App />", () => {
  it("it should show created user in table", () => {
    render(<App />);
  });
});
