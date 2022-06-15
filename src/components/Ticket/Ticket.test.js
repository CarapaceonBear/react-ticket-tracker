import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Ticket from "./Ticket";

describe("should render elements", () => {
    it("should render header elements", () => {
        render(<Ticket />);
        const headings = screen.getAllByRole("heading");
        headings.forEach(heading => {
            expect(heading).toBeInTheDocument();
        })
    }) 

    it("should render buttons", () => {
        render(<Ticket />);
        const buttons = screen.getAllByRole("button");
        buttons.forEach(button => {
            expect(button).toBeInTheDocument();
        })
    })
})

describe("should increment/decrement the counter on button presses", () => {
    it("should increment the counter with the plus button", () => {
        render(<Ticket />);
        let counter = screen.getByRole("heading", {name:"0"});
        expect(counter).toBeInTheDocument();
        
        const plusButton = screen.getByRole("button", {name:"+"});
        userEvent.click(plusButton);
        counter = screen.getByRole("heading", {name:"1"});
        expect(counter).toBeInTheDocument();
    })

    it("should decrement the counter with the minus button", () => {
        render(<Ticket />);
        const plusButton = screen.getByRole("button", {name:"+"});
        userEvent.click(plusButton);
        let counter = screen.getByRole("heading", {name:"1"});
        expect(counter).toBeInTheDocument();
        
        const minusButton = screen.getByRole("button", {name:"-"});
        userEvent.click(minusButton);
        counter = screen.getByRole("heading", {name:"0"});
        expect(counter).toBeInTheDocument();
    })

    it("should not decrement the counter if it is already 0", () => {
        render(<Ticket />);
        const minusButton = screen.getByRole("button", {name:"-"});
        userEvent.click(minusButton);
        const counter = screen.getByRole("heading", {name:"0"});
        expect(counter).toBeInTheDocument();

        const invalidCounter = screen.queryByRole("heading", {name:"-1"})
        expect(invalidCounter).not.toBeInTheDocument();
    })
})