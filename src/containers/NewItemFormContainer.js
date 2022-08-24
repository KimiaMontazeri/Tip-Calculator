import { connect } from "react-redux";
import { NewItemForm } from "../components/NewItemForm";
import { addedNewItem } from "../store/items/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name, price) => {
      dispatch(addedNewItem(name, price));
    }
  };
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
