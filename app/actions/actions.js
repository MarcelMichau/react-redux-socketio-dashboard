export const FLAG_ERROR = 'FLAG_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';

export function addErrorFlag() {
  return { type: FLAG_ERROR }
}

export function removeErrorFlag() {
  return { type: REMOVE_ERROR }
}
