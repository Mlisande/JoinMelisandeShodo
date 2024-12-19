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
});
