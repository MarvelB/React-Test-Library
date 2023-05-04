import { render, screen, waitFor } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />;
        </BrowserRouter>
    );
};

describe("FollowersList", () => {
    it("Should be able to find first follower in the list", async () => {
        render(<MockFollowersList />);

        const followerElement = await waitFor(
            () => screen.findByTestId("follower-item-0"),
            { timeout: 5000 },
        );

        expect(followerElement).toBeInTheDocument();
    });

    it("Should be able to render multiple followers", async () => {
        render(<MockFollowersList />);

        const followersElement = await waitFor(
            () => screen.findAllByTestId(/follower-item/i),
            { timeout: 5000 },
        );

        expect(followersElement.length).toBe(5);
    });
});
