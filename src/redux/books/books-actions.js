import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('books/changeFilter');
const signOutAction = createAction('books/signOut');
const bookRefreshAction = createAction('books/bookRefresh');

export default { changeFilter, signOutAction, bookRefreshAction };
