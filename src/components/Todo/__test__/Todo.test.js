import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    );
};

const addTodos = (todos) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /add/i });

    todos.forEach((todo) => {
        fireEvent.change(inputElement, {
            target: { value: todo },
        });

        fireEvent.click(buttonElement);
    });
};

describe("Todo", () => {
    it("Should add a todo to the todo list", () => {
        render(<MockTodo />);

        addTodos(["Go Grocery Shopping"]);

        const todoElement = screen.getByText(/Go Grocery Shopping/i);

        expect(todoElement).toBeInTheDocument();
    });

    it("Should add an array of tasks to the todo list", () => {
        render(<MockTodo />);

        addTodos(["Go Grocery Shopping", "Play with dog", "Take a nap"]);

        const todoListElement = screen.getAllByTestId("todo-item-container");

        expect(todoListElement.length).toBe(3);
    });

    it("Should make sure a todo is not completed", () => {
        render(<MockTodo />);

        addTodos(["Go Grocery Shopping"]);

        const todoElement = screen.getByText(/Go Grocery Shopping/i);

        expect(todoElement.className).not.toContain("todo-item-active");
    });

    it("Should make sure a todo is completed", () => {
        render(<MockTodo />);

        addTodos(["Go Grocery Shopping"]);

        const todoElement = screen.getByText(/Go Grocery Shopping/i);

        fireEvent.click(todoElement);

        expect(todoElement.className).toContain("todo-item-active");
    });
});
