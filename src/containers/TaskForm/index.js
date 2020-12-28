import { Box, Grid, withStyles } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import {reduxForm, Field} from 'redux-form';

import * as ModalActions from '../../actions/modal';

import styles from './styles';
import renderTextField from '../../components/FormHelper/TextField';

function TaskForm(props) {
    const {classes, modalActionCreators, handleSubmit} = props;
    const {hideModal} = modalActionCreators;

    const handleChange = (event) => {
        
    }

    const handleSubmitForm = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Grid container>
                <Grid item md={12}>
                    <Field 
                    id="title"
                    label="Title"
                    className={classes.textField}
                    margin="normal"
                    name="title"
                    component={renderTextField}/>
                </Grid>
                <Grid item md={12}>
                    <Field
                    id="description"
                    label="Description"
                    multiline
                    rowsMax={4}
                    className={classes.textField}
                    component={renderTextField}
                    name="description"
                    />
                </Grid>
            </Grid>
            <Grid item md={12} className={classes.actionButton}>
                <Box display="flex" flexDirection="row-reverse">
                    <Box ml={1}>
                        <Button variant="contained" onClick={hideModal}>
                            Cancel
                        </Button>
                    </Box>
                    <Button variant="contained" color="primary" type="submit">
                        Save
                    </Button>
                </Box>
            </Grid>
        </form>
    )
}

TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func
    }),
    handleSubmit: PropTypes.func
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
    modalActionCreators: bindActionCreators(ModalActions, dispatch)
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
    form: FORM_NAME
});

export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm
)(TaskForm);

