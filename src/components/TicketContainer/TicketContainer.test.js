import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TicketContainer from "./TicketContainer";
import team from '../../data/team';

describe("should render all elements", () => {

    it("should render title element", () => {
        render(<TicketContainer team={team}/>);
        const title = screen.getByRole("heading", {name:"Ticket Tracker"});
        expect(title).toBeInTheDocument();
    })

    it("should render all tickets", () => {
        render(<TicketContainer team={team}/>);
        const tickets = screen.getAllByRole("heading", {name:"Counter"})
        tickets.forEach(ticket => {
            expect(ticket).toBeInTheDocument();
        })
    })

})