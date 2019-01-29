var convertData = obj => {
  var csv = '';
  var keys = Object.keys(obj).filter(key => key !== 'children');
  csv += keys.join(',') + '\n';

  var traverseJSON = obj => {
    var keys = Object.keys(obj);
    var columns = [];
    var hasChildren = false;
    keys.forEach((key, index) => {
      if (key !== 'children') {
        columns.push(key);
      } else if (key === 'children') {
        hasChildren = true;
      }
    });
    var values = columns.map(key => obj[key]);
    csv += values.join(',') + '\n';
    if (hasChildren) {
      obj.children.forEach(child => {
        traverseJSON(child);
      });
    }
  };

  traverseJSON(obj);

  return csv;
};
