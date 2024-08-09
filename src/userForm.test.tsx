import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./userForm";

const userName = "Abhishek Singh";
const userEmail = "abhiwebdev2718@gmail.com";
describe("<UserForm />", () => {
  it("should shows two inputs and a button", () => {
    const mock = jest.fn();
    render(<UserForm addUser={mock} />);
    screen.logTestingPlaygroundURL()
    const nameInput = screen.getByRole('textbox', {
      name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
      name: /email/i
    });
    const submitButton = screen.getByRole('button', {
      name: /submit/i
    });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("should call addUser after submiting form", () => {
    
    // render in DOM
    const mock = jest.fn();
    render(<UserForm addUser={mock} />);
    const nameInput = screen.getByRole('textbox', {
      name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
      name: /email/i
    });
    const submitButton = screen.getByRole('button', {
      name: /submit/i
    });
    // clik on name input
    user.click(nameInput);
      
    // type in name input
    user.keyboard(userName)

  
    // click on email input
      user.click(emailInput)
      
    // type in email input
     user.keyboard(userEmail)

    // click on btn to submit form 
    user.click(submitButton);

    expect(mock).toBeCalled();
    expect(mock).toBeCalledWith({
      name: userName,
      email:userEmail
    })
  });
});
