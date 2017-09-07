const Task = require('../models/Task');

module.exports = {
    index: (req, res) => {
        Task.find().then(tasks=>{
		res.render('task/index', {'tasks': tasks})
        });
    },
	createGet: (req, res) => {
        res.render('task/create')
	},
	createPost: (req, res) => {
        let taskArg=req.body;

        if(!taskArg.title || !taskArg.comments){
            res.redirect('/');
            return;
        }

        Task.create(taskArg).then(taskArg=>{
        	res.redirect('/');
			return;
		})
	},
	deleteGet: (req, res) => {
        let id=req.params.id;

        Task.findById(id).then(task=>{
        	if(!task){
                res.redirect('/');
                return;
			}
            res.render('task/delete',task);
		});
	},
	deletePost: (req, res) => {
		let id=req.params.id;

		Task.findByIdAndRemove(id).then(task=>{
            res.redirect('/');
		})
	}
};