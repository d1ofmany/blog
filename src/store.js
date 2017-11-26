import { createStore } from 'redux';

import postsReducer from './reducers/posts';

const store = createStore(postsReducer);

export default store;