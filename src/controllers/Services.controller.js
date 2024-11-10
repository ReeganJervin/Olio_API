'use strict';
const Services = require('../models/Services.model');
const _ = require('underscore');
exports.findAll = function (req, res) {
    Services.findAll(function (err, services) {
        if (err)
            res.send({ status: "-1", error: err, message: "Unable to get Services!" });
        else
            res.send({ status: "1", error: false, message: "Available Services!", data: services });
    });
};
exports.create = function (req, res) {
    const newServices = new Services(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Services.create(newServices, function (err, Services) {
            if (err)
                res.send({ status: "-1", error: err, message: "Services created filed!" });
            res.send({ status: "1", error: false, message: "Services created successfully!", data: Services });
        });
    }
};
exports.findById = function (req, res) {
    Services.findById(req.params.id, function (err, services) {
        if (err){
            res.send({ status: "-1", error: err, message: "Unable to get Services!" });
        }else{
            res.send({ status: "1", error: false, message: "Available Services!", data: services });
        }
    });
};
exports.update = function (req, res) {
    console.log(">>>>>>>>>>>>>>", req.params.id, req.body)

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Services.update(req.params.id, new Services(req.body), function (err, services) {
            if (err)
                res.send({ status: "-1", error: err, message: "Unable to update Services!" });
            res.send({ status: "1", error: false, message: 'Services successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    Services.delete(req.params.id, function (err, services) {
        if (err)
            res.send({ status: "-1", error: err, message: "Unable to delete Services!" });
        res.json({ status: "1", error: false, message: 'Service successfully deleted' });
    });
};