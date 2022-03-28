import { render, screen } from "@testing-library/react";
import { Primary } from "./home.stories";

describe("HomeTemplate", () => {
  it("renders a homepage", () => {
    render(<Primary />);

    const heading = screen.getByRole("heading", {
      name: /Hello/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

it("renders homepage unchanged", () => {
  const { container } = render(<Primary />);
  expect(container).toMatchSnapshot();
});
