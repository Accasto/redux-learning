import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';

// Criação da Store do Redux
const store = createStore(cartReducer);

export default store;