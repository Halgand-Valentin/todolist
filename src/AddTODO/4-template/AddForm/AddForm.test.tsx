//********** Imports **********//
import { render, screen, fireEvent } from "@testing-library/react";
import AddForm from "./AddForm";
import { AddFormProps } from "./AddForm.types";

const setup = (props: AddFormProps) => {
  const { ...queries } = render(<AddForm {...props} />);
  return {
    component: screen.getByTestId("AddTODOFormBox"),
    field: screen.getByTestId("AddTODOFormField"),
    button: screen.getByTestId("AddTODOFormButton"),
    ...queries,
  };
};

//********** Tests **********//
describe("AddForm component", () => {
  describe("basic", () => {
    it("should render correctly", () => {
      const { component, field, button } = setup({});
      expect(component).toBeInTheDocument();
      expect(field).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});

describe("AddForm submit button", () => {
  describe("basic", () => {
    it("should call the onCLick handler when submit button is clicked", () => {
      const onSubmitClick = jest.fn();
      const { button } = setup({ onSubmitClick: onSubmitClick });
      
      // Avant le clic, le handler ne doit pas avoir été appelé
      expect(onSubmitClick).not.toHaveBeenCalled();

      // On simule le clic sur le bouton
      fireEvent.click(button);
      
      // Après le clic, le handler DOIT avoir été appelé pour que le test soit valide (au vert)
      expect(onSubmitClick).toHaveBeenCalled();
    });
  });
});