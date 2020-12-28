import { withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import styles from './styles';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../TaskForm';
import * as TaskActions from '../../actions/task';
import * as ModalActions from '../../actions/modal';

import SearchBox from '../../components/SearchBox';

function TaskBoard(props) {

    const [open, setOpen] = useState(false);

    const {classes} = props;

    useEffect(() => {
        const {taskActions} = props;
        const {fetchListTask} = taskActions;
        fetchListTask();
        // eslint-disable-next-line
    },[]); 

    const renderBoard = () => {
        const {listTask} = props;
        return (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                        return <TaskList key={index} tasks={taskFiltered} status={status}/>;
                    })
                }
            </Grid>
        )
    }

    const handleClose = () => {
        setOpen(false);
    }

    const renderForm = () => {
        return (
            <TaskForm open={open} handleClose={handleClose}/>
        );
    }

    const addNewTask = () => {
        // setOpen(true);
        const {modalActions} = props;
        const {showModal, changeModalTitle, changeModalContent} = modalActions;
        showModal();
        changeModalTitle("Add new task");
        changeModalContent(<TaskForm />);
    }

    const loadData = () => {
        const {taskActions} = props;
        const {fetchListTask} = taskActions;
        fetchListTask();
    }

    const handleFilter = (event) => {
        const {value} = event.target;
        const {taskActions} = props;
        const {filterTask} = taskActions;
        filterTask(value);
    }

    const renderSearchBox = () => {
        return (
            <SearchBox handleChange={handleFilter}/>
        );
    }

    return (
        <div className={classes.taskBoard}>
            <Button variant="contained" color="primary" className={classes.button} onClick={loadData} style={{marginRight: 10}}>
                <AddIcon /> Load data
            </Button>
            <Button variant="contained" color="primary" className={classes.button} onClick={addNewTask}>
                <AddIcon /> Add new task
            </Button>
            {renderSearchBox()}
            {renderBoard()}
        </div>
    )
}

TaskBoard.propTypes = {
    classes: PropTypes.object
}

const mapDispatchToProps = dispatch => {
    return {
        taskActions: bindActionCreators(TaskActions, dispatch),
        modalActions: bindActionCreators(ModalActions, dispatch)
    }
};

const mapStateToProps = state => {
    return {
        listTask: state.task.listTask
    }
};

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(TaskBoard));

