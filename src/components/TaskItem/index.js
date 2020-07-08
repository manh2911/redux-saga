import React, {Component} from 'react';
import styles from "./style";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';

class TaskItem extends Component {
    render() {
        const {classes, task, status, id} = this.props;
        const {title, description} = task;
        return (
            <Card key={id} className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={10}>
                            <Typography component="h2">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item md={2} >
                            {status.label}
                        </Grid>
                        <p>{description}</p>
                    </Grid>
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <Fab color="primary" className={classes.fab} size="small">
                        <AddIcon />
                    </Fab>
                    <Fab color="secondary" className={classes.fab} size="small">
                        <EditIcon />
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);