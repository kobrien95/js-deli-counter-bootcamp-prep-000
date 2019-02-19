var katzDeli =[];
function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeli,name){
  let i = 0;
  while (i <katzDeli.lenght){
    i++;
  }
  if (katzDeli.lenght ===0){
    return 'there is nobody waiting to be served';
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}