import { home as api } from '../services';

export default {

    namespace: 'home',

    state: {
        inputValue: 'ddddd',
        tableData: {
            data: [],
            total: 0
        }
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {

        *getTableData({ payload }, { call, put }) {  // eslint-disable-line
            const res = yield call(api.getUser);
			yield put({
                type: '_getTableData',
                tableData: {
                    data: res.data.data,
                    total: res.data.total
                }
             });
		},
	},

    reducers: {
        inputChange(state, action) {
            let newState = Object.assign({}, state);
            newState.inputValue = action.value;
            return newState;
        },
        _getTableData(state,action){
            let newState = Object.assign({}, state);
            newState.tableData = action.tableData;
            return newState;
        }
    },

};
