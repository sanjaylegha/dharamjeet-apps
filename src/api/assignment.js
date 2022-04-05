export class Assignment {
    static getAssignments = (cb, err) => {
        // https://run.mocky.io/v3/45f84dfe-a865-4841-ad4b-a7fecd5343cf
        // "http://5.161.42.108:5001/assignment"
        fetch("http://5.161.42.108:5001/assignment")
            .then(res => res.json())
            .then(
                (result) => {
                    if (!!cb) {
                        cb(result);
                    }
                },
                (error) => {
                    if (!!err) {
                        err(error);
                    }
                });
    }
}
