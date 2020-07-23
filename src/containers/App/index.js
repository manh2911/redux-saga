import React, {Component} from 'react';
import TaskBoard from "../Taskboard";
import styles from "./style";
import {withStyles} from '@material-ui/styles';
import {Provider} from 'react-redux';
import configureStore from "../../redux/configureStore";

const store = configureStore();

class Index extends Component {
    render() {
        return (
          <Provider store={store}>
            <TaskBoard></TaskBoard>
          </Provider>

        );
    }
}

export default withStyles(styles)(Index);
