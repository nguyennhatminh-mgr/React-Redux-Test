import * as ModalType from '../constants/modal';

export const showModal = () => ({
    type: ModalType.SHOW_MODAL
})

export const hideModal = () => ({
    type: ModalType.HIDE_MODAL
})

export const changeModalTitle = (title) => ({
    type: ModalType.CHANGE_MODAL_TITLE,
    payload: { title }
})

export const changeModalContent = (component) => ({
    type: ModalType.CHANGE_MODAL_CONTENT,
    payload: {component}
})