import { combineReducers } from 'redux';
import postReducer from './postsReducers';
import userReducers from './userReducers';

export default combineReducers({
    posts: postReducer,
    users: userReducers
});