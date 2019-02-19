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
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}
function currentLine(katzDeli,name){
  let i = 0;
  while (i <katzDeli.lenght){
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.lenght ===0){
    return 'The line is currently empty';
  } else
  return ('The line is currently empty ')
}