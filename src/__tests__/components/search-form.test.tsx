import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import { SearchForm } from "../../components/search-form";

const onClick = jest.fn();

describe("rendering", () => {
  it("Should render SearchForm", () => {
    render(<SearchForm onClick={onClick} />);

    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
  });
});

describe("input form onChange event", () => {
  it("input test", async() => {
    render(<SearchForm onClick={onClick} />);

    // HTMLElementに型推論されているのでasで型アサーション
    const input = screen.getByRole("textbox") as HTMLInputElement;
    await userEvent.type(input, "test");
    expect(input.value).toBe("test");
  });
});

describe("input form onClick event", () => {
  it("click button", async() => {
    render(<SearchForm onClick={onClick} />);

    expect(onClick).toHaveBeenCalledTimes(0);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});