import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
    it("should render header with passed props", () => {
        render(<Header title="My Header" />);
        const headerElement = screen.getByText(/My Header/i);
        expect(headerElement).toBeInTheDocument();
    });
});

// it("should render header with passed props", () => {
//     render(<Header title="My Header" />);
//     const headerElement = screen.getByRole("heading");
//     expect(headerElement).toBeInTheDocument();
// });

// it("should render header with passed props", () => {
//     render(<Header title="My Header" />);
//     // property name is case sensitive and it represents the text of the element
//     const headerElement = screen.getByRole("heading", { name: "My Header" });
//     expect(headerElement).toBeInTheDocument();
// });

// it("should render header with passed props", () => {
//     render(<Header title="My Header" />);
//     const headerElement = screen.getByTitle("Header");
//     expect(headerElement).toBeInTheDocument();
// });

// it("should render header with passed props", () => {
//     render(<Header title="My Header" />);
//     const headerElement = screen.getByTestId("Header-3");
//     expect(headerElement).toBeInTheDocument();
// });

// // Find By
// it("should render header with passed props", async () => {
//     render(<Header title="My Header" />);
//     const headerElement = await screen.findByText(/My Header/i);
//     expect(headerElement).toBeInTheDocument();
// });

// // Query By
// it("should render header with passed props", async () => {
//     render(<Header title="My Header" />);
//     const headerElement = screen.queryByText(/dogs/i);
//     expect(headerElement).not.toBeInTheDocument();
// });

// // Get All By
// it("should render header with passed props", async () => {
//     render(<Header title="My Header" />);
//     const headerElements = screen.getAllByRole("heading");
//     expect(headerElements.length).toBe(2);
// });
