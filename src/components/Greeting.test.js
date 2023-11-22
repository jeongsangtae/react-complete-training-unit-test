import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // 준비 단계 (Arrage)
    render(<Greeting />);

    // 실행 단계 (Act)
    // 현재는 아무 것도 없다.

    // 단언 단계 (Assert)
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    // 준비 단계 (Arrage)
    render(<Greeting />);

    // 실행 단계 (Act)
    // 현재는 아무 것도 없다.

    // 단언 단계 (Assert)
    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  // test("renders Changed! if the button was clicked", () => {
  //   // 준비 단계 (Arrage)
  //   render(<Greeting />);

  //   // 실행 단계 (Act)
  //   const buttonElement = screen.getByRole("button");
  //   userEvent.click(buttonElement);

  //   // 단언 단계 (Assert)
  //   const outputElement = screen.getByText("Changed!");
  //   expect(outputElement).toBeInTheDocument();
  // });

  test("renders Changed! if the button was clicked", async () => {
    // 준비 단계 (Arrage)
    render(<Greeting />);

    // 실행 단계 (Act)
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // 단언 단계 (Assert)
    await waitFor(() => {
      const outputElement = screen.getByText("Changed!");
      expect(outputElement).toBeInTheDocument();
    });
  });

  // test("does not render good to see you if the button was clicked", () => {
  //   // 준비 단계 (Arrage)
  //   render(<Greeting />);

  //   // 실행 단계 (Act)
  //   const buttonElement = screen.getByRole("button");
  //   userEvent.click(buttonElement);

  //   // 단언 단계 (Assert)
  //   const outputElement = screen.queryByText("good to see you", {
  //     exact: false,
  //   });
  //   expect(outputElement).toBeNull();
  // });

  test("does not render good to see you if the button was clicked", async () => {
    // 준비 단계 (Arrage)
    render(<Greeting />);

    // 실행 단계 (Act)
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // 단언 단계 (Assert)
    await waitFor(() => {
      const outputElement = screen.queryByText("good to see you", {
        exact: false,
      });
      expect(outputElement).toBeNull();
    });
  });
});
