import ApiService from '../services/ApiService';

class HomeAction {
    static getUsers (context, payload, done) {
        ApiService.getUsers(payload, function (data) {
            context.dispatch('LOAD_SUCCESS', data);
            done && done();
        });
    }
}

export default HomeAction;
