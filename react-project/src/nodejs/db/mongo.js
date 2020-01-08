const {
  MongoClient
} = require('mongodb');

const {
  DBurl,
  DBname
} = require('../config.json');
console.log(DBurl, DBname);


async function connect() { //连接mongo数据库
  let client = await MongoClient.connect(DBurl);
  let db = client.db(DBname);
  return {
    db,
    client
  }
}

/**
 * @description: 增
 * @param {string} 集合名字 colname
 * @param {array} 数组      data
 * @return: object
 */

async function create(colname, data) {
  let {
    db,
    client
  } = await connect();

  let col = db.collection(colname);
  let result = await col.insertMany(data);
  // console.log(result);
  client.close();
  return result;
}
// create('user', [{
//   id: 7,
//   name: "燃烧我的卡路里",
//   password: '123456'
// }])


/**
 * @description: 删 
 * @param {string} 集合名字 colname
 * @param {object} 条件     query
 * @return: object
 */

async function remove(colname, query) {
  let {
    db,
    client
  } = await connect();
  let col = db.collection(colname);
  let result = await col.deleteMany(query);

  client.close();
  return result;
}

// /* 测试 */
// remove('user', {
//    name:"燃烧我的卡路里"
// })
// /* deletedCount: 1  删除一条数据（数字为几则删除几条数据） */

/**
 * @description: 改
 * @param {string} 集合名字 colname
 * @param {object} 条件     query
 * @param {object} 数据     newdata
 * @return: object
 */
async function update(colname, query, newdata) {
  let {
    db,
    client
  } = await connect();
  let col = db.collection(colname);

  let result = await col.updateMany(query, newdata);

  client.close();
  return result;
}


// update('user', {
//     id: 7
// }, {
//     $set: {
//         name: "林深时见鹿"
//     }
// })
// /*  modifiedCount: 1   表示一条数据被修改成功（数字为修改的条数） */



/**
 * @description: 查
 * @param {string} 集合名字 colname
 * @param {object} 条件     query
 * @return: object
 */

// async function find(colname, query) {
//   try {
//     let { db, client } = await connect();
//     let col = db.collection(colname);

//     let result = await col.find(query).toArray();

//     client.close();
//     return result;
//   } catch{
//     console.log(err);
//   }
// }

async function find(colname, qurey) {
  try {
    let {
      db,
      client
    } = await connect(); //await只能接收成功的回调resolve
    // obj.then().catch()
    let col = db.collection(colname); //无则自动创建
    //数据的CRUD操作
    let result = await col.find(qurey).toArray(); //查找数据
    // console.log(result);

    //关闭数据库
    client.close();
    return result; //返回查询结果,返回给入口
  } catch (ev) {
    console.log(err);
  }

}

// find('user', {
//   phone: 13866666666,
//   password: 123456
// });



module.exports = {
  create,
  remove,
  update,
  find
}