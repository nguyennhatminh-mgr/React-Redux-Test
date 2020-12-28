import { withStyles, Box } from '@material-ui/core'
import React from 'react'
import Grid from '@material-ui/core/Grid';

import styles from './styles';
import TaskItem from '../TaskItem';

function TaskList(props) {
    const {classes, tasks, status} = props;
    return (
        <Grid item md={4} xs={12}>
            <Box mt={2} mb={2}>
                <div className={classes.status}>{status.label}</div>
            </Box>
            <div className={classes.wrapperListTask}>
            {
                tasks.map((task, index) =>{
                    return <TaskItem key={index} task={task} status={status}/>
                })
            }
            </div>
        </Grid>
    )
}

export default withStyles(styles)(TaskList);

