"use strict";

var mysql = require('mysql'); // 用mysql.createConnection创建一个连接对象


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'yuan'
}); // 执行连接

connection.connect(); // let id = 1;
// connection.query(`SELECT * FROM login`, function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });
// connection.query(`SELECT * FROM student WHERE ?`, [{
//     id: 1
// }], function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });
// connection.query(`UPDATE student SET ? WHERE ?`, [{
//     uname: 'eno'
// }, {
//     id: 1
// }], function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is:', results);
// });

var select = function select() {
  var t;
  return regeneratorRuntime.async(function select$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          t = '5';
          connection.query("SELECT * FROM login WHERE ?", [{
            userID: 'Admin'
          }], function (error, results, fields) {
            if (error) throw error; // console.log('The solution is: ', results);
            // return results;

            t = results;
          });
          console.log(t);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  select: select
}; // 执行关闭
// connection.end();