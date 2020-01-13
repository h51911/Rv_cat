const express = require('express');
const router = express.Router();


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


//登录
router.post('/login', async function (req, res, next) {
  let { userID, password, role } = req.body;
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  //访问数据库
  connection.query(`SELECT * FROM login WHERE ? AND ? AND ?`, [{
    userID
  }, {
    password
  }, {
    role
  }], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    //响应
    res.json(results);
  });
});


//获取学生个人信息
router.get('/smessage', async function (req, res, next) {
  let { userID } = req.query;
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  //访问数据库
  connection.query(`SELECT * FROM student WHERE ? `, [{
    userID
  }], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    //响应
    res.json(results);
  });
});


//修改密码
router.post('/repass', async function (req, res, next) {
  let { userID, password } = req.body;
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  //访问数据库
  connection.query(`UPDATE login SET ? WHERE ?`, [{
    password
  }, {
    userID
  }], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    //响应
    res.json(results);
  });
});


//展现学生所有课程
router.get('/course', async function (req, res, next) {
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  //访问数据库
  connection.query(`SELECT * FROM course`, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    //响应
    res.json(results);
  });
});
//已选课程
router.get('/selectcourse', async function (req, res, next) {
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  let studentID = req.query;
  //访问数据库selectedcourse
  function sce() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM selectedcourse WHERE ?`, [studentID], function (error, results, fields) {
        if (error) throw error;
        resolve(results);
      });
    });
  }
  //访问数据库course
  function yuan(res) {
    return new Promise((resolve, reject) => {
      let arr = [];
      res.map(function (item, index) {
        connection.query(`SELECT * FROM course WHERE ?`, [{
          courseID: item.courseID
        }], function (error, results, fields) {
          if (error) throw error;
          arr.push(results[0]);
          if (index + 1 == res.length) {
            console.log(index + 1);
            resolve(arr);
          }
        });
      });
    });
  }
  ; (async function () {
    let cid = await sce();
    let arr = await yuan(cid);
    res.json(arr);
  })();
});


//学生成绩
router.get('/score', async function (req, res, next) {
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  let studentID = req.query
  //访问数据库selectedcourse
  function score1() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM selectedcourse WHERE ?`, [studentID], function (error, results, fields) {
        if (error) throw error;
        resolve(results)
      });
    });
  }
  //访问数据库course
  function score2(scores1) {
    return new Promise((resolve, reject) => {
      let arr = [];
      scores1.map(function (item, index) {
        connection.query(`SELECT * FROM course WHERE ?`, [{ courseID: item.courseID }], function (error, results, fields) {
          if (error) throw error;
          results[0].mark = item.mark;
          arr.push(results[0]);
          if (scores1.length == index + 1) {
            resolve(arr);
          }
        });
      });
    });
  }
  ; (async function () {
    let scores1 = await score1();
    // console.log(scores1);
    let scores2 = await score2(scores1);
    let arr = scores2.filter(function (item, index) {
      return item.mark > 0;
    });
    res.json(arr);
  })();
});


//学生插入课程
router.get('/insertcourse', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = req.query;
  if (data.yuan * 1) {//判断
    let { courseID, userID, mark } = req.query;
    connection.query(`INSERT INTO selectedcourse (courseID, studentID, mark) VALUES (${courseID * 1}, ${userID},${mark * 1})`, function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  } else {
    let { courseID, userID } = req.query;
    connection.query(`SELECT * FROM selectedcourse WHERE ? AND ?`, [{ courseID }, { studentID: userID }], function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  }
});


//获取老师个人信息
router.get('/tmessage', async function (req, res, next) {
  let { userID } = req.query;
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  //访问数据库
  function yuan() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM login WHERE ? `, [{
        userID
      }], function (error, results, fields) {
        if (error) throw error;
        resolve(results[0].userName);
      });
    });
  }
  function chao(Tname) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM teacher WHERE ? `, [{
        userID
      }], function (error, results, fields) {
        if (error) throw error;
        results[0].Tname = Tname;
        resolve(results);
      });
    });
  }
  ; (async function () {
    let Tname = await yuan();
    let T = await chao(Tname);
    res.json(T);
  })();
});


//老师的课程
router.get('/tcourse', async function (req, res, next) {
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  let teacherID = req.query;
  console.log(teacherID);

  //访问数据库
  connection.query(`SELECT * FROM course WHERE ?`, [teacherID], function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results);
    //响应
    res.json(results);
  });
});


//老师最终得分
router.get('/tscore', async function (req, res, next) {
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  let { teacherID, panduan } = req.query;

  //访问数据库
  function yuan() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM course WHERE ?`, [{ teacherID }], function (error, results, fields) {
        if (error) throw error;
        resolve([results[0].courseID, results[0].courseName, results[0].courseType]);
      });
    });
  }
  function chao(courseID) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM selectedcourse WHERE ?`, [{ courseID }], function (error, results, fields) {
        if (error) throw error;
        resolve(results);
      });
    });
  }
  function gui(stuobj, courseID, courseName, courseType) {
    return new Promise((resolve, reject) => {
      let arr = [];
      stuobj.map((item, index) => {
        connection.query(`SELECT * FROM student WHERE ?`, [{ userID: item.studentID }], function (error, results, fields) {
          if (error) throw error;
          results[0].mark = item.mark;
          results[0].courseName = courseName;
          results[0].courseType = courseType;
          results[0].courseID = courseID;
          arr.push(results[0]);
          if (index + 1 == stuobj.length) {
            resolve(arr);
          }
        });
      });
    });
  }
  ; (async function () {
    let strarr = await yuan();
    let stuobj = await chao(strarr[0]);
    let mobj = await gui(stuobj, strarr[0], strarr[1], strarr[2]);
    // //筛选过滤
    let T = mobj.filter((item) => {
      if (panduan * 1) {
        return item.mark > 0;
      } else {
        return item.mark == 0;
      }
    });
    // console.log(T);
    res.json(T);
  })();
});


//老师评分
router.get('/tpingfeng', async function (req, res, next) {
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  let { courseID, studentID, mark } = req.query;
  //访问数据库
  connection.query(`UPDATE selectedcourse SET ? WHERE ? AND ?`, [{ mark }, { courseID }, { studentID }], function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results);
    //响应
    res.json(results);
  });
});


//管理员add学生
router.get('/axuehao', async function (req, res, next) {
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  let { userName, userID, sex, birthyear, grade, college } = req.query;
  //访问数据库
  function yuan() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM student WHERE ?`, [{ userID }], function (error, results, fields) {
        if (error) throw error;
        resolve(results);
      });
    });
  }
  function chao() {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO student (userID, sex, birthyear, grade, college,userName) VALUES ( ${userID},'${sex}',${birthyear}, ${grade},'${college}','${userName}' )`, function (error, results, fields) {
        if (error) throw error;
        resolve(results);
      });
    });
  }
  function gui() {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO login (userID, userName, password, role) VALUES ( ${userID},'${userName}',123, 1 )`, function (error, results, fields) {
        if (error) throw error;
        resolve(results);
      });
    });
  }
  ; (async () => {
    let panID = await yuan();
    if (panID.length) {
      res.json(1);
    } else {
      let chaID = await chao();
      if (chaID.affectedRows * 1) {
        await gui();
        res.json(0);
      }
    }
  })();
});


//管理员add教师
router.get('/agonghao', async function (req, res, next) {
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  let { userName, userID, sex, degree, title, birthyear, grade, college } = req.query;
  console.log(userName, userID, sex, degree, title, birthyear, grade, college);

  //访问数据库
  function yuan() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM teacher WHERE ?`, [{ userID }], function (error, results, fields) {
        if (error) throw error;
        resolve(results);
      });
    });
  }
  function chao() {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO teacher (userID, sex, birthyear,degree, title , grade, college) VALUES ( '${userID}','${sex}',${birthyear},'${degree}', '${title}',${grade},'${college}' )`, function (error, results, fields) {
        if (error) throw error;
        resolve(results);
      });
    });
  }
  function gui() {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO login (userID, userName, password, role) VALUES ( '${userID}','${userName}',123, 2 )`, function (error, results, fields) {
        if (error) throw error;
        resolve(results);
      });
    });
  }
  ; (async () => {
    let panID = await yuan();
    if (panID.length) {
      res.json(1);
    } else {
      let chaID = await chao();
      if (chaID.affectedRows * 1) {
        await gui();
        res.json(0);
      }
    }
  })();
});


//管理员修改密码
router.post('/arepass', async function (req, res, next) {
  let { userID, password } = req.body;
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  //访问数据库
  function yuan() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM login WHERE ?`, [{ userID }], function (error, results, fields) {
        if (error) throw error;
        resolve(results);
      });
    });
  }
  function chao() {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE login SET ? WHERE ?`, [{
        password
      }, {
        userID
      }], function (error, results, fields) {
        if (error) throw error;
        resolve(results)
      });
    });
  }
  ; (async () => {
    let pan = await yuan();
    if (pan.length) {//号码存在
      let gai = await chao();
      res.json(gai);
    } else {//如果此号码不存在，就把0响应回去
      res.json(0);
    }
  })();

});


//查看老师信息
router.get('/atm', async function (req, res, next) {
  let { userID } = req.query;
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  //访问数据库
  function yuan() {
    return new Promise(function (resolve, reject) {
      connection.query(`SELECT * FROM teacher WHERE ? `, [{
        userID
      }], function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        //响应
        resolve(results);
      });
    });
  }
  function chao(teacherID) {
    return new Promise(function (resolve, reject) {
      connection.query(`SELECT * FROM course WHERE ? `, [{
        teacherID
      }], function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        //响应
        resolve(results);
      });
    });
  }

  ; (async () => {
    let pan = await yuan();
    if (pan.length) {//号码存在
      let gai = await chao(userID);
      pan[0].userName = gai[0].userName;
      gai.unshift(pan[0]);
      // console.log(gai);
      res.json(gai);
    } else {//如果此号码不存在，就把0响应回去
      res.json(0);
    }
  })();
});


//查看学生信息
router.get('/stm', async function (req, res, next) {
  let { userID } = req.query;
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  //访问数据库
  function yuan() {
    return new Promise(function (resolve, reject) {
      connection.query(`SELECT * FROM student WHERE ? `, [{
        userID
      }], function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        //响应
        resolve(results);
      });
    });
  }
  function chao(studentID) {
    return new Promise(function (resolve, reject) {
      connection.query(`SELECT * FROM selectedcourse WHERE ? `, [{
        studentID
      }], function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        //响应
        resolve(results);
      });
    });
  }
  function gui(arr) {
    return new Promise(function (resolve, reject) {
      let oarr = [];
      arr.map(function (item, index) {
        connection.query(`SELECT * FROM course WHERE ? `, [{
          courseID: item.courseID
        }], function (error, results, fields) {
          if (error) throw error;
          results[0].mark = arr[index].mark;
          oarr.push(results[0]);
          if (index + 1 == arr.length) {
            resolve(oarr);
          }
        });
      });
    });
  }
  ; (async () => {
    let arr = [];
    let pan = await yuan();
    if (pan.length) {//号码存在
      let gai = await chao(userID);
      let ke = await gui(gai);
      arr.push(pan[0]);
      arr.push(ke);
      res.json(arr);
    } else {//如果此号码不存在，就把0响应回去
      res.json(0);
    }
  })();
});


//给教师添加课程
router.get('/acourse', async function (req, res, next) {
  let { userName, teacherID, courseName, courseTime, classRoom, courseWeek, courseType, score } = req.query;
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  // console.log(req.query);

  //访问数据库
  function yuan() {
    return new Promise(function (resolve, reject) {
      connection.query(`SELECT * FROM login WHERE ? AND ?`, [{
        userID: teacherID
      }, {
        userName
      }], function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        //响应
        resolve(results);
      });
    });
  }
  function chao() {
    return new Promise(function (resolve, reject) {
      connection.query(
        `INSERT INTO course (userName, teacherID, courseName,courseTime, classRoom , courseWeek, courseType,score) VALUES ( '${userName}','${teacherID}','${courseName}','${courseTime}', '${classRoom}',${courseWeek},'${courseType}',${score} )`,
        function (error, results, fields) {
          if (error) throw error;
          // console.log('The solution is: ', results);
          //响应
          resolve(results);
        });
    });
  }
  function gui(arr) {
    return new Promise(function (resolve, reject) {
      let oarr = [];
      arr.map(function (item, index) {
        connection.query(`SELECT * FROM course WHERE ? `, [{
          courseID: item.courseID
        }], function (error, results, fields) {
          if (error) throw error;
          results[0].mark = arr[index].mark;
          oarr.push(results[0]);
          if (index + 1 == arr.length) {
            resolve(oarr);
          }
        });
      });
    });
  }
  ; (async () => {
    let arr = [];
    let pan = await yuan();
    // console.log(pan);
    if (pan.length) {//工号与姓名存在，匹配
      let gai = await chao();
      console.log(gai.affectedRows);
      if (gai.affectedRows) {
        res.json(1);
      }
    } else {//如果此工号不存在，或工号与姓名不匹配
      res.json(0);
    }
  })();
});


//学生评论老师
router.get('/scomment', async function (req, res, next) {
  let { studentID, teacherID, id } = req.query;
  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  //访问数据库
  function yuan() {
    return new Promise(function (resolve, reject) {
      connection.query(
        `INSERT INTO comment (studentID, teacherID, text) VALUES ( '${studentID}','${teacherID}','${req.query.text}' )`,
        function (error, results, fields) {
          if (error) throw error;
          //响应
          resolve(results);
        });
    });
  }
  function chao() {
    return new Promise(function (resolve, reject) {
      connection.query(
        `SELECT * FROM comment WHERE ? AND ? `, [{
          studentID
        }, { teacherID }], function (error, results, fields) {
          if (error) throw error;
          //响应
          resolve(results);
        });
    });
  }
  function gui() {
    return new Promise(function (resolve, reject) {
      connection.query(
        `SELECT * FROM student WHERE ? `, [{
          userID: studentID
        }], function (error, results, fields) {
          if (error) throw error;
          //响应
          resolve(results);
        });
    });
  }
  ; (async () => {
    if (id == 1) {
      let data = await yuan();
      res.json(data);
    } else if (id == 2) {
      let data = await chao();
      let name = await gui();
      // console.log(name);

      data.map(function (item, index) {
        item.userName = name[0].userName;
        item.url = name[0].url;
      });
      console.log(data);
      res.json(data);
    }
  })();
});

//老师查看评论
router.get('/tcomment', async function (req, res, next) {
  let { teacherID } = req.query;
  console.log(teacherID);

  //解决跨域
  res.append('Access-Control-Allow-Origin', '*');
  //访问数据库
  function yuan() {
    return new Promise(function (resolve, reject) {
      connection.query(
        `SELECT * FROM comment WHERE ? `, [{ teacherID }], function (error, results, fields) {
          if (error) throw error;
          resolve(results);
        });
    });
  }
  function chao(data) {


    return new Promise(function (resolve, reject) {
      data.map((item, index) => {
        connection.query(
          `SELECT * FROM student WHERE ? `, [{ userID: item.studentID }], function (error, results, fields) {
            if (error) throw error;
            data[index].student = results[0].userName;
            data[index].url = results[0].url;
            if (data.length == index + 1) {
              resolve(data);
            }
          });
      })
    });
  }
  ; (async () => {
    let data = await yuan();
    console.log(data);

    let data1 = await chao(data);
    res.json(data1);
  })();
});


module.exports = router;

