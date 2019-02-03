const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let StoreSchema = new Schema({
	title: {
		type: String,
		required: 'this field is required'
	},
	description: {
		type: String,
		default: null
	},
	lat: {
		type: Number,
		required: 'this field is required'
	},
	long: {
		type: Number,
		required: 'this field is required'
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports =  mongoose.model('Store', StoreSchema);
//or
// exports.Store = mongoose.model('Store', StoreSchema);

