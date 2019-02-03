const mongoose = require('mongoose');
let Store = mongoose.model('Store');


exports.list = function(req, res){
	Store.find({}, function(stores, err){
		if(err) return res.send(err);
		return res.json(stores);
	});
};

exports.detail = function(req, res){
	Store.findById(req.params.id, function(store, err){
		if(err) return res.send(err);
		else if(!store) return res.json({message: `Store ${req.params.id} not found!`});
		return res.json(store);
	});
}

exports.create = function(req, res){
	Store.create(req.body, function(store, err){
		if(err) return res.send(err);
		return res.json(store);
	});
}

exports.update = function(req, res){
	Store.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function(store, err){
		if(err) return res.send(err);
		else if(!store) return res.json({message: `Store ${req.params.id} not found!`});
		return res.json(store);
	});
}

exports.delete = function(req, res){
	Store.findByIdAndRemove(req.params.id, {}, function(store, err){
		if(err) return res.send(err);
		else if(!store) return res.json({message: `Store ${req.params.id} not found!`});
		return res.json({message: `Store ${req.params.id} is deleted successfully!`});
	});
}