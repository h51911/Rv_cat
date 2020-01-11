// const token = require('./token')

/**
 * 
 * @param {Number} code  状态码（1：成功，0：失败）
 * @param {String} msg      提示消息
 * @param {Array} data      返回数据
 */
function formatData({ code = 1, msg = 'success', data = [] } = {}) {

    if (code === 0) {
        msg = 'fail'
    }

    return {
        code,
        msg,
        data
    }
}


module.exports = {
    formatData,

}