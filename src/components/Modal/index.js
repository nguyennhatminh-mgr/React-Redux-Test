import React from 'react'
import PropTypes from 'prop-types'
import { Modal, withStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Clear';
import styles from './styles';
import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';

import * as ModalActions from '../../actions/modal';

const CommonModal = props => {
    const {classes, open, component, title, modalActionCreators } = props;
    const {hideModal} = modalActionCreators;
    return (
        <Modal open={open} onClose={hideModal}>
            <div className={classes.modal}>
                <div className={classes.header}>
                    <span className={classes.title}>{title}</span>
                    <CloseIcon className={classes.icon} onClick={hideModal}/>
                </div>
                <div className={classes.content}>
                    {component}
                </div>
            </div>
        </Modal>
    )
}

CommonModal.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    component: PropTypes.object,
    title: PropTypes.string,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func
    })
}

const mapStateToProps = state => ({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title
})

const mapDispatchToProps = dispatch => ({
    modalActionCreators: bindActionCreators(ModalActions, dispatch)
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect,
)(CommonModal);
