import Request from 'superagent';

class ApiService {
    static getUsers(payload, done) {
        let q = Request.get('https://api.github.com/users?since=135&per_page=3');
        q.query(payload.form).end(function (err, r) {
            done && done(r.body, done);
        });
    }
}

export default ApiService;
