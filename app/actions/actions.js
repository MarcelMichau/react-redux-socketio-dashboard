export const FLAG_ERROR = 'FLAG_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';
export const ADD_LOG_ENTRY = 'ADD_LOG_ENTRY'
export const CLEAR_ALL_LOG_ENTRIES = 'CLEAR_ALL_LOG_ENTRIES'

export function addErrorFlag() {
  return { type: FLAG_ERROR };
}

export function removeErrorFlag() {
  return { type: REMOVE_ERROR };
}

export function addLogEntry(log) {
  return { type: ADD_LOG_ENTRY, data: log};
}

export function clearLogEntries() {
  return { type: CLEAR_ALL_LOG_ENTRIES };
}

