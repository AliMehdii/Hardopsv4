// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// /*Importing the reducers */
// import {
//     productListReducer,
//     productDetailsReducer,
//     productReviewCreateReducer,
//     productTopRatedReducer
// } from './reducers/productReducers'
// import { latestVersionReducer, listVersionsReducer } from './reducers/softwareReducers'
// import { courseListReducer, latestCourseReducer } from './reducers/courseReducers'
// import {
//     userLoginReducer,
//     userRegisterReducer,
//     userDetailsReducer,
//     userUpdateProfileReducer
// } from './reducers/userReducers'
// import {
//     orderCreateReducer,
//     orderDetailsReducer,
//     orderPayReducer, orderListMyReducer
// } from './reducers/orderReducers'
// import { cartReducer } from './reducers/cartReducers'


// const reducer = combineReducers({
//     productList: productListReducer,
//     productDetails: productDetailsReducer,
//     productReviewCreate: productReviewCreateReducer,
//     productTopRated: productTopRatedReducer,

//     latestVersion: latestVersionReducer,
//     listVersions: listVersionsReducer,

//     courseList: courseListReducer,
//     latestCourse: latestCourseReducer,

//     cart: cartReducer,

//     userLogin: userLoginReducer,
//     userRegister: userRegisterReducer,
//     userDetails: userDetailsReducer,
//     userUpdateProfile: userUpdateProfileReducer,
//     orderCreate: orderCreateReducer,

//     orderDetails: orderDetailsReducer,
//     orderPay: orderPayReducer,
//     orderListMy: orderListMyReducer,
// })

// const cartItemsFromStorage = localStorage.getItem('cartItems') ?
//     JSON.parse(localStorage.getItem('cartItems')) : []

// const userInfoFromStorage = localStorage.getItem('userInfo') ?
//     JSON.parse(localStorage.getItem('userInfo')) : null

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
//     JSON.parse(localStorage.getItem('shippingAddress')) : {}


// const initialState = {
//     cart: {
//         cartItems: cartItemsFromStorage,
//         shippingAddress: shippingAddressFromStorage
//     },
//     userLogin: { userInfo: userInfoFromStorage }
// }


// const store = createStore(reducer, initialState,
//     composeWithDevTools(applyMiddleware(thunk)))


// export default store








import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

/*Importing the reducers */
import {
    productListReducer,
    productDetailsReducer,
    productReviewCreateReducer,
    productTopRatedReducer
} from './reducers/productReducers'
import { latestVersionReducer, listVersionsReducer } from './reducers/softwareReducers'
import { courseListReducer, latestCourseReducer } from './reducers/courseReducers'
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from './reducers/userReducers'
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer, orderListMyReducer
} from './reducers/orderReducers'
import { cartReducer } from './reducers/cartReducers'

import {
    blogListReducer,
    blogDetailsReducer,
    blogTopRatedReducer
} from './reducers/blogReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,

    blogList: blogListReducer,
    blogDetails: blogDetailsReducer,
    blogTopRated: blogTopRatedReducer,

    latestVersion: latestVersionReducer,
    listVersions: listVersionsReducer,

    courseList: courseListReducer,
    latestCourse: latestCourseReducer,

    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,

    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage
    },
    userLogin: { userInfo: userInfoFromStorage }
}


const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(thunk)))


export default store