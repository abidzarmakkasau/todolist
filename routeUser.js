const express = require('express');
const router = express();

router.use(express.json());

const UserController = require('./controllerUser');

router.get('/api/todolist', UserController.get);
router.put('/api/todolist/:id', UserController.put);
router.post('/api/todolist', UserController.post);
router.delete('/api/todolist/:id', UserController.delete);

router.listen(5000, () => {
	console.log('Server Running');
});

