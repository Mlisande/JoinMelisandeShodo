import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonContact from "@/app/components/ButtonContact";

describe("ButtonContact Commponent", () => {
  // ici tous les test liées au composant
  // premier cas : renders the button with default text
  test("renders the button with default text", () => {
    // render pour simuler un environnement de test
    render(<ButtonContact />);
    expect(screen.getByText("Activer le bouton magique")).toBeInTheDocument();
  });

  test("changes text and scales on hover", () => {
    render(<ButtonContact />);

    const button = screen.getByRole("button");

    expect(screen.getByText("Activer le bouton magique")).toBeInTheDocument();

    fireEvent.mouseEnter(button);
    expect(screen.getByText("C'est parti !")).toBeInTheDocument();

    fireEvent.mouseLeave(button);
    expect(screen.getByText("Activer le bouton magique")).toBeInTheDocument();
  });

  test("has correct mailto link", () => {
    render(<ButtonContact />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute(
      "href",
      "mailto:melisande.malonga@gmail.com"
    );
  });

  test("applies hober styling", () => {
    render(<ButtonContact />);

    const button = screen.getByRole("button");
    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle("transform:scale(1.1)");

    fireEvent.mouseLeave(button);
    expect(button).toHaveStyle("transform: scale(1)");
  });
});
