import React, {Component} from "react";
import styles from './styles';
import {withStyles} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import {STATUSES} from "../../constants";


import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";

const listTask = [
    {
        id: 1,
        title: "t 1",
        description: "des 1",
        status: 0
    },
    {
        id: 2,
        title: "t 2",
        description: "des 2",
        status: 1
    },
    {
        id: 3,
        title: "t 3",
        description: "des 3",
        status: 2
    },

];

class TaskBoard extends Component {

    state = {
        open: false
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    openForm = () => {
        this.setState({
            open: true
        })
    }

    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={3}>
                {
                    STATUSES.map((status, index) => {
                        const taskFilltered = listTask.filter(task => task.status === status.value);
                        return (
                            <TaskList key={status.value} index={index} tasks={taskFilltered} status={status}/>
                        )
                    })
                }
            </Grid>
        );

        return xhtml;
    }

    renderForm() {
        const {open} = this.state;
        let xhtml = null;
        xhtml = (
            <TaskForm open={open} onClose={this.handleClose}/>
        );

        return xhtml;
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm}>
                    <AddIcon/>Thêm mới công việc
                </Button>
                {this.renderBoard()}
                {this.renderForm()}

            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);