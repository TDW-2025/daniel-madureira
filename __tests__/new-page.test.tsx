import { render, screen } from "@testing-library/react";
import NewPage from "../src/pages/new-page";
import "@testing-library/jest-dom";

describe("renders a heading", () => {
  it("renders the heading", () => {
    render(<NewPage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
