import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import LoadingIcon from '../../assets/images/loading.gif';
import PropTypes from 'prop-types';

import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';

import * as UIAction from '../../actions/ui';

const GlobalLoading = props => {
    const {classes, showLoading} = props;
    let xhtml = null;
    if (showLoading) {
        xhtml = (
            <div className={classes.globalLoading}>
                <img src={LoadingIcon} alt="loading" className={classes.icon}/>
            </div>
        );
    }
    return xhtml;        
}

GlobalLoading.prototype = {
    classes: PropTypes.object,
    showLoading: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        showLoading: state.ui.showLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        UIAction: bindActionCreators(UIAction, dispatch)
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles),withConnect)(GlobalLoading);