export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const addNote = (payload: any, date: any) => ({
  type: 'ADD_NOTE',
  payload: { noteText: payload, date: date }
})

export const deleteNote = (payload: any) => ({
  type: 'DELETE_NOTE',
  payload
})
