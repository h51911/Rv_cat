"use strict";

var express = require('express');

var router = express.Router();

var mysql = require('mysql'); // 用mysql.createConnection创建一个连接对象


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'yuan'
}); // 执行连接

connection.connect(); //登录

router.post('/login', function _callee(req, res, next) {
  var _req$body, userID, password, role;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, userID = _req$body.userID, password = _req$body.password, role = _req$body.role; //解决跨域

          res.append('Access-Control-Allow-Origin', '*'); //访问数据库

          connection.query("SELECT * FROM login WHERE ? AND ? AND ?", [{
            userID: userID
          }, {
            password: password
          }, {
            role: role
          }], function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results); //响应

            res.json(results);
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}); //获取学生个人信息

router.get('/smessage', function _callee2(req, res, next) {
  var userID;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          userID = req.query.userID; //解决跨域

          res.append('Access-Control-Allow-Origin', '*'); //访问数据库

          connection.query("SELECT * FROM student WHERE ? ", [{
            userID: userID
          }], function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results); //响应

            res.json(results);
          });

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //修改密码

router.post('/repass', function _callee3(req, res, next) {
  var _req$body2, userID, password;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, userID = _req$body2.userID, password = _req$body2.password; //解决跨域

          res.append('Access-Control-Allow-Origin', '*');
          console.log(req.body); //访问数据库

          connection.query("UPDATE login SET ? WHERE ?", [{
            password: password
          }, {
            userID: userID
          }], function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results); //响应

            res.json(results);
          });

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}); //展现学生所有课程

router.get('/course', function _callee4(req, res, next) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          //解决跨域
          res.append('Access-Control-Allow-Origin', '*'); //访问数据库

          connection.query("SELECT * FROM course", function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results); //响应

            res.json(results);
          });

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
}); //已选课程

router.get('/selectcourse', function _callee6(req, res, next) {
  var studentID, sce, yuan;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          yuan = function _ref2(res) {
            return new Promise(function (resolve, reject) {
              var arr = [];
              res.map(function (item, index) {
                connection.query("SELECT * FROM course WHERE ?", [{
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
          };

          sce = function _ref() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM selectedcourse WHERE ?", [studentID], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          //解决跨域
          res.append('Access-Control-Allow-Origin', '*');
          studentID = req.query; //访问数据库selectedcourse

          ;

          (function _callee5() {
            var cid, arr;
            return regeneratorRuntime.async(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return regeneratorRuntime.awrap(sce());

                  case 2:
                    cid = _context5.sent;
                    _context5.next = 5;
                    return regeneratorRuntime.awrap(yuan(cid));

                  case 5:
                    arr = _context5.sent;
                    res.json(arr);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            });
          })();

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  });
}); //学生成绩

router.get('/score', function _callee8(req, res, next) {
  var studentID, score1, score2;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          score2 = function _ref4(scores1) {
            return new Promise(function (resolve, reject) {
              var arr = [];
              scores1.map(function (item, index) {
                connection.query("SELECT * FROM course WHERE ?", [{
                  courseID: item.courseID
                }], function (error, results, fields) {
                  if (error) throw error;
                  results[0].mark = item.mark;
                  arr.push(results[0]);

                  if (scores1.length == index + 1) {
                    resolve(arr);
                  }
                });
              });
            });
          };

          score1 = function _ref3() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM selectedcourse WHERE ?", [studentID], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          //解决跨域
          res.append('Access-Control-Allow-Origin', '*');
          studentID = req.query; //访问数据库selectedcourse

          ;

          (function _callee7() {
            var scores1, scores2, arr;
            return regeneratorRuntime.async(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return regeneratorRuntime.awrap(score1());

                  case 2:
                    scores1 = _context7.sent;
                    _context7.next = 5;
                    return regeneratorRuntime.awrap(score2(scores1));

                  case 5:
                    scores2 = _context7.sent;
                    arr = scores2.filter(function (item, index) {
                      return item.mark > 0;
                    });
                    res.json(arr);

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            });
          })();

        case 6:
        case "end":
          return _context8.stop();
      }
    }
  });
}); //学生插入课程

router.get('/insertcourse', function _callee9(req, res, next) {
  var data, _req$query, courseID, userID, mark, _req$query2, _courseID, _userID;

  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          data = req.query;

          if (data.yuan * 1) {
            //判断
            _req$query = req.query, courseID = _req$query.courseID, userID = _req$query.userID, mark = _req$query.mark;
            connection.query("INSERT INTO selectedcourse (courseID, studentID, mark) VALUES (".concat(courseID * 1, ", ").concat(userID, ",").concat(mark * 1, ")"), function (error, results, fields) {
              if (error) throw error;
              res.json(results);
            });
          } else {
            _req$query2 = req.query, _courseID = _req$query2.courseID, _userID = _req$query2.userID;
            connection.query("SELECT * FROM selectedcourse WHERE ? AND ?", [{
              courseID: _courseID
            }, {
              studentID: _userID
            }], function (error, results, fields) {
              if (error) throw error;
              res.json(results);
            });
          }

        case 3:
        case "end":
          return _context9.stop();
      }
    }
  });
}); //获取老师个人信息

router.get('/tmessage', function _callee11(req, res, next) {
  var userID, yuan, chao;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          chao = function _ref6(Tname) {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM teacher WHERE ? ", [{
                userID: userID
              }], function (error, results, fields) {
                if (error) throw error;
                results[0].Tname = Tname;
                resolve(results);
              });
            });
          };

          yuan = function _ref5() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM login WHERE ? ", [{
                userID: userID
              }], function (error, results, fields) {
                if (error) throw error;
                resolve(results[0].userName);
              });
            });
          };

          userID = req.query.userID; //解决跨域

          res.append('Access-Control-Allow-Origin', '*'); //访问数据库

          ;

          (function _callee10() {
            var Tname, T;
            return regeneratorRuntime.async(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return regeneratorRuntime.awrap(yuan());

                  case 2:
                    Tname = _context10.sent;
                    _context10.next = 5;
                    return regeneratorRuntime.awrap(chao(Tname));

                  case 5:
                    T = _context10.sent;
                    res.json(T);

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            });
          })();

        case 6:
        case "end":
          return _context11.stop();
      }
    }
  });
}); //老师的课程

router.get('/tcourse', function _callee12(req, res, next) {
  var teacherID;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          //解决跨域
          res.append('Access-Control-Allow-Origin', '*');
          teacherID = req.query;
          console.log(teacherID); //访问数据库

          connection.query("SELECT * FROM course WHERE ?", [teacherID], function (error, results, fields) {
            if (error) throw error; // console.log('The solution is: ', results);
            //响应

            res.json(results);
          });

        case 4:
        case "end":
          return _context12.stop();
      }
    }
  });
}); //老师最终得分

router.get('/tscore', function _callee14(req, res, next) {
  var _req$query3, teacherID, panduan, yuan, chao, gui;

  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          gui = function _ref9(stuobj, courseID, courseName, courseType) {
            return new Promise(function (resolve, reject) {
              var arr = [];
              stuobj.map(function (item, index) {
                connection.query("SELECT * FROM student WHERE ?", [{
                  userID: item.studentID
                }], function (error, results, fields) {
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
          };

          chao = function _ref8(courseID) {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM selectedcourse WHERE ?", [{
                courseID: courseID
              }], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          yuan = function _ref7() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM course WHERE ?", [{
                teacherID: teacherID
              }], function (error, results, fields) {
                if (error) throw error;
                resolve([results[0].courseID, results[0].courseName, results[0].courseType]);
              });
            });
          };

          //解决跨域
          res.append('Access-Control-Allow-Origin', '*');
          _req$query3 = req.query, teacherID = _req$query3.teacherID, panduan = _req$query3.panduan; //访问数据库

          ;

          (function _callee13() {
            var strarr, stuobj, mobj, T;
            return regeneratorRuntime.async(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return regeneratorRuntime.awrap(yuan());

                  case 2:
                    strarr = _context13.sent;
                    _context13.next = 5;
                    return regeneratorRuntime.awrap(chao(strarr[0]));

                  case 5:
                    stuobj = _context13.sent;
                    _context13.next = 8;
                    return regeneratorRuntime.awrap(gui(stuobj, strarr[0], strarr[1], strarr[2]));

                  case 8:
                    mobj = _context13.sent;
                    // //筛选过滤
                    T = mobj.filter(function (item) {
                      if (panduan * 1) {
                        return item.mark > 0;
                      } else {
                        return item.mark == 0;
                      }
                    }); // console.log(T);

                    res.json(T);

                  case 11:
                  case "end":
                    return _context13.stop();
                }
              }
            });
          })();

        case 7:
        case "end":
          return _context14.stop();
      }
    }
  });
}); //老师评分

router.get('/tpingfeng', function _callee15(req, res, next) {
  var _req$query4, courseID, studentID, mark;

  return regeneratorRuntime.async(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          //解决跨域
          res.append('Access-Control-Allow-Origin', '*');
          _req$query4 = req.query, courseID = _req$query4.courseID, studentID = _req$query4.studentID, mark = _req$query4.mark; //访问数据库

          connection.query("UPDATE selectedcourse SET ? WHERE ? AND ?", [{
            mark: mark
          }, {
            courseID: courseID
          }, {
            studentID: studentID
          }], function (error, results, fields) {
            if (error) throw error; // console.log('The solution is: ', results);
            //响应

            res.json(results);
          });

        case 3:
        case "end":
          return _context15.stop();
      }
    }
  });
}); //管理员add学生

router.get('/axuehao', function _callee17(req, res, next) {
  var _req$query5, userName, userID, sex, birthyear, grade, college, yuan, chao, gui;

  return regeneratorRuntime.async(function _callee17$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          gui = function _ref12() {
            return new Promise(function (resolve, reject) {
              connection.query("INSERT INTO login (userID, userName, password, role) VALUES ( ".concat(userID, ",'").concat(userName, "',123, 1 )"), function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          chao = function _ref11() {
            return new Promise(function (resolve, reject) {
              connection.query("INSERT INTO student (userID, sex, birthyear, grade, college,userName) VALUES ( ".concat(userID, ",'").concat(sex, "',").concat(birthyear, ", ").concat(grade, ",'").concat(college, "','").concat(userName, "' )"), function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          yuan = function _ref10() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM student WHERE ?", [{
                userID: userID
              }], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          //解决跨域
          res.append('Access-Control-Allow-Origin', '*');
          _req$query5 = req.query, userName = _req$query5.userName, userID = _req$query5.userID, sex = _req$query5.sex, birthyear = _req$query5.birthyear, grade = _req$query5.grade, college = _req$query5.college; //访问数据库

          ;

          (function _callee16() {
            var panID, chaID;
            return regeneratorRuntime.async(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return regeneratorRuntime.awrap(yuan());

                  case 2:
                    panID = _context16.sent;

                    if (!panID.length) {
                      _context16.next = 7;
                      break;
                    }

                    res.json(1);
                    _context16.next = 14;
                    break;

                  case 7:
                    _context16.next = 9;
                    return regeneratorRuntime.awrap(chao());

                  case 9:
                    chaID = _context16.sent;

                    if (!(chaID.affectedRows * 1)) {
                      _context16.next = 14;
                      break;
                    }

                    _context16.next = 13;
                    return regeneratorRuntime.awrap(gui());

                  case 13:
                    res.json(0);

                  case 14:
                  case "end":
                    return _context16.stop();
                }
              }
            });
          })();

        case 7:
        case "end":
          return _context17.stop();
      }
    }
  });
}); //管理员add教师

router.get('/agonghao', function _callee19(req, res, next) {
  var _req$query6, userName, userID, sex, degree, title, birthyear, grade, college, yuan, chao, gui;

  return regeneratorRuntime.async(function _callee19$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          gui = function _ref15() {
            return new Promise(function (resolve, reject) {
              connection.query("INSERT INTO login (userID, userName, password, role) VALUES ( '".concat(userID, "','").concat(userName, "',123, 2 )"), function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          chao = function _ref14() {
            return new Promise(function (resolve, reject) {
              connection.query("INSERT INTO teacher (userID, sex, birthyear,degree, title , grade, college) VALUES ( '".concat(userID, "','").concat(sex, "',").concat(birthyear, ",'").concat(degree, "', '").concat(title, "',").concat(grade, ",'").concat(college, "' )"), function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          yuan = function _ref13() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM teacher WHERE ?", [{
                userID: userID
              }], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          //解决跨域
          res.append('Access-Control-Allow-Origin', '*');
          _req$query6 = req.query, userName = _req$query6.userName, userID = _req$query6.userID, sex = _req$query6.sex, degree = _req$query6.degree, title = _req$query6.title, birthyear = _req$query6.birthyear, grade = _req$query6.grade, college = _req$query6.college;
          console.log(userName, userID, sex, degree, title, birthyear, grade, college); //访问数据库

          ;

          (function _callee18() {
            var panID, chaID;
            return regeneratorRuntime.async(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return regeneratorRuntime.awrap(yuan());

                  case 2:
                    panID = _context18.sent;

                    if (!panID.length) {
                      _context18.next = 7;
                      break;
                    }

                    res.json(1);
                    _context18.next = 14;
                    break;

                  case 7:
                    _context18.next = 9;
                    return regeneratorRuntime.awrap(chao());

                  case 9:
                    chaID = _context18.sent;

                    if (!(chaID.affectedRows * 1)) {
                      _context18.next = 14;
                      break;
                    }

                    _context18.next = 13;
                    return regeneratorRuntime.awrap(gui());

                  case 13:
                    res.json(0);

                  case 14:
                  case "end":
                    return _context18.stop();
                }
              }
            });
          })();

        case 8:
        case "end":
          return _context19.stop();
      }
    }
  });
}); //管理员修改密码

router.post('/arepass', function _callee21(req, res, next) {
  var _req$body3, userID, password, yuan, chao;

  return regeneratorRuntime.async(function _callee21$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          chao = function _ref17() {
            return new Promise(function (resolve, reject) {
              connection.query("UPDATE login SET ? WHERE ?", [{
                password: password
              }, {
                userID: userID
              }], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          yuan = function _ref16() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM login WHERE ?", [{
                userID: userID
              }], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          _req$body3 = req.body, userID = _req$body3.userID, password = _req$body3.password; //解决跨域

          res.append('Access-Control-Allow-Origin', '*'); //访问数据库

          ;

          (function _callee20() {
            var pan, gai;
            return regeneratorRuntime.async(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return regeneratorRuntime.awrap(yuan());

                  case 2:
                    pan = _context20.sent;

                    if (!pan.length) {
                      _context20.next = 10;
                      break;
                    }

                    _context20.next = 6;
                    return regeneratorRuntime.awrap(chao());

                  case 6:
                    gai = _context20.sent;
                    res.json(gai);
                    _context20.next = 11;
                    break;

                  case 10:
                    //如果此号码不存在，就把0响应回去
                    res.json(0);

                  case 11:
                  case "end":
                    return _context20.stop();
                }
              }
            });
          })();

        case 6:
        case "end":
          return _context21.stop();
      }
    }
  });
}); //查看老师信息

router.get('/atm', function _callee23(req, res, next) {
  var userID, yuan, chao;
  return regeneratorRuntime.async(function _callee23$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          chao = function _ref19(teacherID) {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM course WHERE ? ", [{
                teacherID: teacherID
              }], function (error, results, fields) {
                if (error) throw error; // console.log('The solution is: ', results);
                //响应

                resolve(results);
              });
            });
          };

          yuan = function _ref18() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM teacher WHERE ? ", [{
                userID: userID
              }], function (error, results, fields) {
                if (error) throw error; // console.log('The solution is: ', results);
                //响应

                resolve(results);
              });
            });
          };

          userID = req.query.userID; //解决跨域

          res.append('Access-Control-Allow-Origin', '*'); //访问数据库

          ;

          (function _callee22() {
            var pan, gai;
            return regeneratorRuntime.async(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return regeneratorRuntime.awrap(yuan());

                  case 2:
                    pan = _context22.sent;

                    if (!pan.length) {
                      _context22.next = 12;
                      break;
                    }

                    _context22.next = 6;
                    return regeneratorRuntime.awrap(chao(userID));

                  case 6:
                    gai = _context22.sent;
                    pan[0].userName = gai[0].userName;
                    gai.unshift(pan[0]); // console.log(gai);

                    res.json(gai);
                    _context22.next = 13;
                    break;

                  case 12:
                    //如果此号码不存在，就把0响应回去
                    res.json(0);

                  case 13:
                  case "end":
                    return _context22.stop();
                }
              }
            });
          })();

        case 6:
        case "end":
          return _context23.stop();
      }
    }
  });
}); //查看学生信息

router.get('/stm', function _callee25(req, res, next) {
  var userID, yuan, chao, gui;
  return regeneratorRuntime.async(function _callee25$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          gui = function _ref22(arr) {
            return new Promise(function (resolve, reject) {
              var oarr = [];
              arr.map(function (item, index) {
                connection.query("SELECT * FROM course WHERE ? ", [{
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
          };

          chao = function _ref21(studentID) {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM selectedcourse WHERE ? ", [{
                studentID: studentID
              }], function (error, results, fields) {
                if (error) throw error; // console.log('The solution is: ', results);
                //响应

                resolve(results);
              });
            });
          };

          yuan = function _ref20() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM student WHERE ? ", [{
                userID: userID
              }], function (error, results, fields) {
                if (error) throw error; // console.log('The solution is: ', results);
                //响应

                resolve(results);
              });
            });
          };

          userID = req.query.userID; //解决跨域

          res.append('Access-Control-Allow-Origin', '*'); //访问数据库

          ;

          (function _callee24() {
            var arr, pan, gai, ke;
            return regeneratorRuntime.async(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    arr = [];
                    _context24.next = 3;
                    return regeneratorRuntime.awrap(yuan());

                  case 3:
                    pan = _context24.sent;

                    if (!pan.length) {
                      _context24.next = 16;
                      break;
                    }

                    _context24.next = 7;
                    return regeneratorRuntime.awrap(chao(userID));

                  case 7:
                    gai = _context24.sent;
                    _context24.next = 10;
                    return regeneratorRuntime.awrap(gui(gai));

                  case 10:
                    ke = _context24.sent;
                    arr.push(pan[0]);
                    arr.push(ke);
                    res.json(arr);
                    _context24.next = 17;
                    break;

                  case 16:
                    //如果此号码不存在，就把0响应回去
                    res.json(0);

                  case 17:
                  case "end":
                    return _context24.stop();
                }
              }
            });
          })();

        case 7:
        case "end":
          return _context25.stop();
      }
    }
  });
}); //给教师添加课程

router.get('/acourse', function _callee27(req, res, next) {
  var _req$query7, userName, teacherID, courseName, courseTime, classRoom, courseWeek, courseType, score, yuan, chao, gui;

  return regeneratorRuntime.async(function _callee27$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          gui = function _ref25(arr) {
            return new Promise(function (resolve, reject) {
              var oarr = [];
              arr.map(function (item, index) {
                connection.query("SELECT * FROM course WHERE ? ", [{
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
          };

          chao = function _ref24() {
            return new Promise(function (resolve, reject) {
              connection.query("INSERT INTO course (userName, teacherID, courseName,courseTime, classRoom , courseWeek, courseType,score) VALUES ( '".concat(userName, "','").concat(teacherID, "','").concat(courseName, "','").concat(courseTime, "', '").concat(classRoom, "',").concat(courseWeek, ",'").concat(courseType, "',").concat(score, " )"), function (error, results, fields) {
                if (error) throw error; // console.log('The solution is: ', results);
                //响应

                resolve(results);
              });
            });
          };

          yuan = function _ref23() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM login WHERE ? AND ?", [{
                userID: teacherID
              }, {
                userName: userName
              }], function (error, results, fields) {
                if (error) throw error; // console.log('The solution is: ', results);
                //响应

                resolve(results);
              });
            });
          };

          _req$query7 = req.query, userName = _req$query7.userName, teacherID = _req$query7.teacherID, courseName = _req$query7.courseName, courseTime = _req$query7.courseTime, classRoom = _req$query7.classRoom, courseWeek = _req$query7.courseWeek, courseType = _req$query7.courseType, score = _req$query7.score; //解决跨域

          res.append('Access-Control-Allow-Origin', '*'); // console.log(req.query);
          //访问数据库

          ;

          (function _callee26() {
            var arr, pan, gai;
            return regeneratorRuntime.async(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    arr = [];
                    _context26.next = 3;
                    return regeneratorRuntime.awrap(yuan());

                  case 3:
                    pan = _context26.sent;

                    if (!pan.length) {
                      _context26.next = 12;
                      break;
                    }

                    _context26.next = 7;
                    return regeneratorRuntime.awrap(chao());

                  case 7:
                    gai = _context26.sent;
                    console.log(gai.affectedRows);

                    if (gai.affectedRows) {
                      res.json(1);
                    }

                    _context26.next = 13;
                    break;

                  case 12:
                    //如果此工号不存在，或工号与姓名不匹配
                    res.json(0);

                  case 13:
                  case "end":
                    return _context26.stop();
                }
              }
            });
          })();

        case 7:
        case "end":
          return _context27.stop();
      }
    }
  });
}); //学生评论老师

router.get('/scomment', function _callee29(req, res, next) {
  var _req$query8, studentID, teacherID, id, yuan, chao, gui;

  return regeneratorRuntime.async(function _callee29$(_context29) {
    while (1) {
      switch (_context29.prev = _context29.next) {
        case 0:
          gui = function _ref28() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM student WHERE ? ", [{
                userID: studentID
              }], function (error, results, fields) {
                if (error) throw error; //响应

                resolve(results);
              });
            });
          };

          chao = function _ref27() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM comment WHERE ? AND ? ", [{
                studentID: studentID
              }, {
                teacherID: teacherID
              }], function (error, results, fields) {
                if (error) throw error; //响应

                resolve(results);
              });
            });
          };

          yuan = function _ref26() {
            return new Promise(function (resolve, reject) {
              connection.query("INSERT INTO comment (studentID, teacherID, text) VALUES ( '".concat(studentID, "','").concat(teacherID, "','").concat(req.query.text, "' )"), function (error, results, fields) {
                if (error) throw error; //响应

                resolve(results);
              });
            });
          };

          _req$query8 = req.query, studentID = _req$query8.studentID, teacherID = _req$query8.teacherID, id = _req$query8.id; //解决跨域

          res.append('Access-Control-Allow-Origin', '*'); //访问数据库

          ;

          (function _callee28() {
            var data, _data, name;

            return regeneratorRuntime.async(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    if (!(id == 1)) {
                      _context28.next = 7;
                      break;
                    }

                    _context28.next = 3;
                    return regeneratorRuntime.awrap(yuan());

                  case 3:
                    data = _context28.sent;
                    res.json(data);
                    _context28.next = 17;
                    break;

                  case 7:
                    if (!(id == 2)) {
                      _context28.next = 17;
                      break;
                    }

                    _context28.next = 10;
                    return regeneratorRuntime.awrap(chao());

                  case 10:
                    _data = _context28.sent;
                    _context28.next = 13;
                    return regeneratorRuntime.awrap(gui());

                  case 13:
                    name = _context28.sent;

                    // console.log(name);
                    _data.map(function (item, index) {
                      item.userName = name[0].userName;
                      item.url = name[0].url;
                    });

                    console.log(_data);
                    res.json(_data);

                  case 17:
                  case "end":
                    return _context28.stop();
                }
              }
            });
          })();

        case 7:
        case "end":
          return _context29.stop();
      }
    }
  });
}); //老师查看评论

router.get('/tcomment', function _callee31(req, res, next) {
  var teacherID, yuan, chao;
  return regeneratorRuntime.async(function _callee31$(_context31) {
    while (1) {
      switch (_context31.prev = _context31.next) {
        case 0:
          chao = function _ref30(data) {
            return new Promise(function (resolve, reject) {
              data.map(function (item, index) {
                connection.query("SELECT * FROM student WHERE ? ", [{
                  userID: item.studentID
                }], function (error, results, fields) {
                  if (error) throw error;
                  data[index].student = results[0].userName;
                  data[index].url = results[0].url;

                  if (data.length == index + 1) {
                    resolve(data);
                  }
                });
              });
            });
          };

          yuan = function _ref29() {
            return new Promise(function (resolve, reject) {
              connection.query("SELECT * FROM comment WHERE ? ", [{
                teacherID: teacherID
              }], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
              });
            });
          };

          teacherID = req.query.teacherID;
          console.log(teacherID); //解决跨域

          res.append('Access-Control-Allow-Origin', '*'); //访问数据库

          ;

          (function _callee30() {
            var data, data1;
            return regeneratorRuntime.async(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return regeneratorRuntime.awrap(yuan());

                  case 2:
                    data = _context30.sent;
                    console.log(data);
                    _context30.next = 6;
                    return regeneratorRuntime.awrap(chao(data));

                  case 6:
                    data1 = _context30.sent;
                    res.json(data1);

                  case 8:
                  case "end":
                    return _context30.stop();
                }
              }
            });
          })();

        case 7:
        case "end":
          return _context31.stop();
      }
    }
  });
});
module.exports = router;