import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

import styles from './styles';

const SearchBox = props => {
    const {classes, handleChange} = props;

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField className={classes.textField} id="outlined-search" label="Enter your key word" type="search" variant="outlined" onChange={handleChange}/>
        </form>
    )
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func
}

export default withStyles(styles)(SearchBox);
