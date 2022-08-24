export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_REMOVED = "ITEM_REMOVED";
export const ITEM_PRICE_UPDATED = "ITEM_PRICE_UPDATED";
export const ITEM_QUANTITY_UPDATED = "ITEM_QUANTITY_UPDATED";

export const addedNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
});

export const removedItem = (uuid) => ({
  type: ITEM_REMOVED,
  payload: {
    uuid
  }
});

export const updatedPrice = (uuid, price) => {
  return {
    type: ITEM_PRICE_UPDATED,
    payload: {
      uuid,
      price
    }
  };
};

export const updatedQuantity = (uuid, quantity) => {
  return {
    type: ITEM_QUANTITY_UPDATED,
    payload: {
      uuid,
      quantity
    }
  };
};
