const connection = require("../config/connection.js");

function printQuestionMarks(num) {
  const arr = [];
  for (let i = 0; i < num; i++) arr.push("?");
  return arr.toString();
}

function objToSql(ob) {
  const arr = [];
  for (let key in ob) {
    const value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) value = "'" + value + "'";
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {

  all: function(table, cb) {
    const queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  create: function(table, cols, vals, cb) {
    const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;
    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  update: function(table, objColVals, condition, cb) {
    const queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
