import * as taskApis from '../apis/task';

export const fetchListTask = () => {
    return dispatch => {
        taskApis.getList().then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    }
}
