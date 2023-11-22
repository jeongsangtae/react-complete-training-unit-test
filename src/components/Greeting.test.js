import { render, screen } from "@testing-library/react";
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
});
