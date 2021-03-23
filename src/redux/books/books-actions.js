import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('books/changeFilter');
const signOutAction = createAction('books/signOut');

export default { changeFilter, signOutAction };
