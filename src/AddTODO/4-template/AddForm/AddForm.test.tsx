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
      expect(onSubmitClick).not.toHaveBeenCalled();

      fireEvent.click(button);
      expect(onSubmitClick).toHaveBeenCalled();
    });
  });
});
