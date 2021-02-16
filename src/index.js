
exports.min = function min (array) {
  if(!array || array.length == 0){return 0}
  let min_h =array[0];
  array.map((x)=>{
      x < min_h ? min_h=x : x; 
  });
  return min_h;
}
exports.max = function max (array) {
  if(!array || array.length == 0){return 0}
  let max =0;
  array.map((x)=>{
      x > max ? max=x : x; 
  });
  return max;
}

exports.avg = function avg (array) {
  if(!array || array.length == 0){return 0}
  let avg =0;
  array.map((x)=>{
    avg+=x;
  });
  return avg/array.length;
}