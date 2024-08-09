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

    
  });

  it("should call addUser after submiting form", () => {
    
    // render in DOM
    const mock = jest.fn();
    render(<UserForm addUser={mock} />);
      
    // select name input
    
    // clik on name input
     
      
    // type in name input
   

    // selecct email input
   
   
    // click on email input
      
      
    // type in email input
   

    // select button 
      

    // click on btn to submit form 
      
  });
});
