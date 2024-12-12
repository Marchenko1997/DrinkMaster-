import { SectionTitle, SubmitButton, AddForm } from "./AddDrinkForm.styled";

const AddDrinkForm = () => {
    return <section>
        <>
            <SectionTitle>Add Drink</SectionTitle>
            <AddForm>
                <SubmitButton type="submit">Add</SubmitButton>
            </AddForm>
        </>
  </section>;
};

export default AddDrinkForm;
