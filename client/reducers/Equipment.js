import {
  SHOW_EQUIPMENT_MODAL,
  CLOSE_EQUIPMENT_MODAL,
} from '../actions/Equipment.js';

export default (state = {
  index: 'NOT_A_NUMBER',
}, action) => {
  switch (action.type) {
    case SHOW_EQUIPMENT_MODAL:
      return {
        ...state,
        index: action.index,
      };

    case CLOSE_EQUIPMENT_MODAL:
      return {
        ...state,
        index: 'NOT_A_NUMBER',
      };

    default:
      return state;
  }
};
