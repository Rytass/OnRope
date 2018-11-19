export const SHOW_EQUIPMENT_MODAL = 'EQUIPMENT_MODAL/SHOW_EQUIPMENT_MODAL';
export const CLOSE_EQUIPMENT_MODAL = 'EQUIPMENT_MODAL/CLOSE_EQUIPMENT_MODAL';

export function showEquipModal(index) {
  return {
    type: SHOW_EQUIPMENT_MODAL,
    index,
  };
}

export function closeEquipModal() {
  return {
    type: CLOSE_EQUIPMENT_MODAL,
  };
}
