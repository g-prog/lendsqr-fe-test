import { render, screen } from "@testing-library/react";
import UsersIndex from "../app/dashboard/users/components/UsersIndex";

jest.mock(
  "../app/dashboard/users/components/UserTable",
  () => () => <div>Mocked Table</div>
);

describe("UsersIndex", () => {
  beforeEach(() => {
    render(<UsersIndex />);
  });

  it("renders the page header", () => {
    expect(
      screen.getByRole("heading", { level: 4, name: "Users" })
    ).toBeInTheDocument();
  });

  it("renders all statistic cards except the duplicate header", () => {
    expect(screen.getByText("Active Users")).toBeInTheDocument();
    expect(screen.getByText("Users with Loans")).toBeInTheDocument();
    expect(screen.getByText("Users with Savings")).toBeInTheDocument();
  });

  it("renders the UsersTable", () => {
    expect(screen.getByText("Mocked Table")).toBeInTheDocument();
  });

  it("does not render unrelated text", () => {
    expect(screen.queryByText("Admins")).not.toBeInTheDocument();
  });
});