import { withStyles } from '@material-ui/core';
import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import styles from './styles';

function TaskItem(props) {
    const {classes, task, status} = props;
    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item md={8}>
                        <Typography component="h2">{task.title}</Typography>
                    </Grid>
                    <Grid item md={4}>
                        {status.label}
                    </Grid>
                </Grid>
                <p>{task.description}</p>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton aria-label="edit" variant="contained" color="primary">
                    <Icon fontSize="small">edit_icon</Icon>
                </IconButton>
                <IconButton aria-label="delete" variant="contained" color="secondary">
                    <Icon fontSize="small">delete_icon</Icon>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(TaskItem);

