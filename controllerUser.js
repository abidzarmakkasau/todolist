var data = {};

exports.get = (req, res) => {
	res.send(data);
};

exports.post = (req, res) => {
	const body = req.body;
	const text = req.body.text;
	if (text == '' || text == undefined || body == '' || body == undefined) {
		res.status(400).send('Error: text is empty');
		return;
	}
	const id = Math.floor(Math.random() * 100 + 1);
	data[id] = {
		text: text,
		done: false,
	};

	res.send('Success: todo added');
};

exports.put = (req, res) => {
	const body = req.body;
	const id = req.params.id;
	if (id in data) {
		if (body == undefined || body == '') {
			res.status(400).send('Error: text is empty');
			return;
		} else if (body.text == undefined || body.text == '') {
			data[id].done = req.body.done;
			res.send('Success: done data updated');
			return;
		} else if (req.body.done == undefined || req.body.done == '') {
			data[id].text = req.body.text;
			res.send('Success: text data updated');
			return;
		} else {
			data[id].done = req.body.done;
			data[id].text = req.body.text;
			res.send('Success: data updated');
			return;
		}
	}
	res.status(400).send('Error: ID not found');
};

exports.delete = (req, res) => {
	const id = req.params.id;
	if (id in data) {
		delete data[id];
		res.send('data deleted');
		return;
	}
	res.status(400).send('Error: ID not found');
};

