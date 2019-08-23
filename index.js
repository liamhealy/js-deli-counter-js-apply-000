function takeANumber(line, customer) {
  line.push(customer);
  return `Welcome, ${customer}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var currentLine = `The line is currently`;
  if(line.length == 0) {
    return currentLine + ` empty.`;
  }
  else {
    currentLine = currentLine + `:`;
    for(var i = 0; i < line.length; i++) {
      
    }
  }
}