import React from 'react';
import { render, screen } from '@testing-library/react';
import EmailPasswordLogin from "./emailPassword";

describe("<EmailPasswordLogin />", () => {
    it("should shows email,password input field and a login btn", () => {
        render(<EmailPasswordLogin />)
           
        const emailInput = screen.getByRole('textbox', {
            name: /email/i
        });

        expect(emailInput).toBeInTheDocument()
     })
})
