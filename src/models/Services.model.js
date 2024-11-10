'use strict';
var dbConn = require('../../config/db.config');
var table_name = 'm_services';
//woSerial object create
var woSerial = function (woSerial) {
    if (woSerial.id)
        this.id = woSerial.id;
    if (woSerial.name)
        this.name = woSerial.name;
    if (woSerial.category)
        this.category = woSerial.category;
    if (woSerial.season)
        this.season = woSerial.season;
    if (woSerial.active_status)
        this.active_status = woSerial.active_status;
    if (woSerial.created_by)
        this.created_by = woSerial.created_by;
    if (woSerial.created_dt)
        this.created_dt = woSerial.created_dt;
    if (woSerial.lastupdate_ts)
        this.lastupdate_ts = woSerial.lastupdate_ts;
    if (woSerial.status)
        this.status = woSerial.status;
};
woSerial.create = function (newServices, result) {
    var query_ = "INSERT INTO "+table_name+" set  ?";
    dbConn.query(query_, [newServices], function (err, res) {
        if (err) {
            console.log("creating dash Config error: ", err);
            result(err, null);
        }
        else {
            // console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
woSerial.findById = function (id, result) {
    var query_ = "Select * from " + table_name + " where id = ? ";
    dbConn.query(query_, id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
woSerial.findAll = function (result) {
    var query_ = "Select * from " + table_name + " where status != -1";
    dbConn.query(query_, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            //console.log('wo serial : ', res);
            result(null, res);
        }
    });
};

woSerial.update = function (id, woSerial, result) {
    var query_ = "UPDATE " + table_name + " SET  ? WHERE id = ?";
    dbConn.query(query_, [woSerial, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
woSerial.delete = function (id, result) {
    //var query_ = "DELETE FROM "+table_name+" WHERE id = ?";
    var query_ = "UPDATE " + table_name + " SET status=-1 WHERE id = ?";
    dbConn.query(query_, [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = woSerial;