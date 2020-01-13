var mysql = require('mysql');

// 用mysql.createConnection创建一个连接对象
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'yuan'
});

// 执行连接
connection.connect();

// let id = 1;
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

let select = async () => {
    let t = '5';
    connection.query(`SELECT * FROM login WHERE ?`, [{
        userID: 'Admin'
    }], function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        // return results;
        t = results;
    });
    console.log(t);

}



module.exports = {
    select
}


// 执行关闭
// connection.end();
