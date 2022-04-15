import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("<Header />", () => {
  test("should render title and subtitle", () => {
    render(<Header title="Title" subtitle="Sub" />);
    const title = screen.getByText(/Title/i);
    const subtitle = screen.getByText(/Sub/i);
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
