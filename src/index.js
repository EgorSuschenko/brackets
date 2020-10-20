
module.exports = function check(str, bracketsConfig) {
  // your solution
  while (str.length !== 0 && bracketsConfig.reduce(function (flag, item) {flag = flag || str.includes(item.join('')); return flag;}, flag = false)){
    for(let i = 0; i < bracketsConfig.length; i++)
    {
        while (str.includes(bracketsConfig[i].join(''))){
            str = str.replace(bracketsConfig[i].join(''), '')
        }
    }
}
return str.length === 0 ? true : false;
}
