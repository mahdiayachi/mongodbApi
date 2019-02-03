module.exports = function(app){
	let controller = require('../controller/StoreController');

	app.route('/store/:id')
	.get(controller.detail)
	.put(controller.update)
	.delete(controller.delete);

	app.route('/stores')
	.get(controller.list)
	.post(controller.create);
}