import { MenuItem } from "../components/MenuItem";
import { connect } from "react-redux";
import {
  removedItem,
  updatedPrice,
  updatedQuantity
} from "../store/items/actions";
import { selectItemTotal } from "../store/items/selectors";

const mapStateToProps = (state, props) => {
  return {
    total: selectItemTotal(state, props)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => {
      dispatch(removedItem(ownProps.uuid));
    },
    updatePrice: (price) => {
      dispatch(updatedPrice(ownProps.uuid, price));
    },
    updateQuantity: (quantity) => {
      dispatch(updatedQuantity(ownProps.uuid, quantity));
    }
  };
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
