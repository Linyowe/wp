function vectoradd(a,b){
  if (a.length !== b.length) return null;
  let result[];
  for (let i=0;i<a.length;i++){
    result.push(a[i]+b[i]);}
    return result;
