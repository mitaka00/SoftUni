const Task = require('../models/Task');

module.exports = {
    index: (req, res) => {
        Task.find().then(tasks => {
            res.render('task/index', {
                'openTasks': tasks.filter(t => t.status === "Open"),
                'inProgressTasks': tasks.filter(t => t.status === "In Progress"),
                'finishedTasks': tasks.filter(t => t.status === "Finished")
            });
        });
    },
    createGet: (req, res) => {
        res.render('task/create')
    },
    createPost: (req, res) => {
        let taskArg = req.body;

        if (taskArg.title == "" || taskArg.status == "") {
            res.redirect('/');
            return;
        }

        Task.create(taskArg).then(taskArg => {
            res.redirect('/');
            return;
        })
    },
    editGet: (req, res) => {
        let id = req.params.id;

        Task.findById(id).then(task => {
            if (!task) {
                res.redirect('/');
                return;
            }
            res.render('task/edit', task);
        }).catch(err => res.redirect('/'));
    },
    editPost: (req, res) => {
        let taskId = req.params.id;
        let task = req.body;

        if(task.title==="" || task.status===""){
            res.redirect('/');
            return;
        }

        Task.findByIdAndUpdate(taskId, task, {runValidatos: true}).then(tasks => {
            res.redirect('/');
        }).catch(err => {
            task.id = taskId;
            task.error = "Cannot edit task";
            return res.render("task/edit", task);
        });
    }
}