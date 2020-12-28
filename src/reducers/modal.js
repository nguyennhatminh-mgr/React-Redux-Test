import * as ModalType from '../constants/modal';

const initialState = {
    showModal: false,
    component: null,
    title: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ModalType.SHOW_MODAL: {
            return {
                ...state,
                showModal: true
            }
        }
        case ModalType.HIDE_MODAL: {
            return {
                ...state,
                showModal:false,
                title: '',
                component: null
            }
        }
        case ModalType.CHANGE_MODAL_TITLE: {
            const {title} = action.payload;
            return {
                ...state,
                title
            }
        }
        case ModalType.CHANGE_MODAL_CONTENT: {
            const {component} = action.payload;
            return {
                ...state,
                component
            }
        }
        default: 
            return state
    }
}

export default reducer;