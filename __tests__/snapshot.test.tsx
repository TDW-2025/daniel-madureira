import { render } from "@testing-library/react";
import Page from "../src/pages/new-page";

describe("Snapshot test for NewPage", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
});
