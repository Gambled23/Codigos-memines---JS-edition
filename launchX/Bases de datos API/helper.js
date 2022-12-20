const { listPerPage } = require("./config");

function getOffSet(currentPage = 1) {
    return (currentPage - 1) * [listPerPage];
}

function emptyorRows(rows) {
    if(!rows){
        return[];
    }
    return rows;
}

module.exports = {
    getOffSet,
    emptyorRows
}