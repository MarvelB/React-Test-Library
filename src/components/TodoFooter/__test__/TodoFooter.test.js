import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    );
};

it("should render a correct amount of task to do", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 Tasks Left/i);
    expect(paragraphElement).toBeInTheDocument();
});

it('should render "task" when onle 1 task left to do', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 Task Left/i);
    expect(paragraphElement).toBeInTheDocument();
});

// it('should render "task" when onle 1 task left to do', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 Task Left/i);
//     expect(paragraphElement).toBeVisible();
// });

// it('should render "task" when onle 1 task left to do', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 Task Left/i);
//     expect(paragraphElement).toContainHTML("p");
// });

// it('should render "task" when onle 1 task left to do', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement).toHaveTextContent("1 task left");
// });

// it('should render "task" when onle 1 task left to do', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement).not.toBeFalsy();
// });

// it('should render "task" when onle 1 task left to do', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement.textContent).toBe("1 task left");
// });
