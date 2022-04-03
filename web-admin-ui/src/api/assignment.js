export class Assignment {
    static getAssignments = (cb, err) => {
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
