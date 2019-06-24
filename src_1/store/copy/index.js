import { createStore,applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
const store = createStore(
    reducer,
    applyMiddleware(thunk),
    
    );
export default store;


//通过thunk方法
// import { createStore,applyMiddleware } from 'redux';
// import reducer from './reducer';
// import thunk from 'redux-thunk';
// const store = createStore(
//     reducer,
//     applyMiddleware(thunk),
    
//     );
// export default store;
