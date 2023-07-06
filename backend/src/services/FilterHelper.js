function searchFilterGenerator(tableName, filter) {
    let like = '';
    for (const index in keys = Object.keys(filter)) {
      like += `${keys[index]} LIKE ? ${keys.length !== Number(index) + 1 ? 'OR ' : ''}`;
    }
  
    return {
      sql: `SELECT * FROM ${tableName} WHERE ${like}`,
      values: Object.values(filter).map(item => `%${item}%`)
    };
  }
  
  function checkKindOfFilter(tableName, filter) {
    switch (false) {
      case !filter.search:
        return searchFilterGenerator(tableName, filter.search);
      default:
        return null; // Gérer d'autres types de filtres si nécessaire
    }
  }
  
  module.exports = {
    checkKindOfFilter
  };
  