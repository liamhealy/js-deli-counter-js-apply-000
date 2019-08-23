function takeANumber(line, customer) {
  line.push(customer);
  return `Welcome, ${customer}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var nextCustomer = `Nobody`;
  if(line.length == 0) {
    return `There is nobody waiting to be served!`;
  }
  else {
    nextCustomer = line[0];
    line.splice(0, 1);
    return nextCustomer;
  }
}

function currentLine(line) {
  var currentLine = `The line is currently`;
  if(line.length == 0) {
    return currentLine + ` empty.`;
  }
  else {
    currentLine = currentLine + `:`;
    for(var i = 0; i < line.length; i++) {
      if(line[i] == line.length - 1) {
        currentLine += ` ${i}. ${line[i]}`;
      }
      else {
        currentLine += ` ${i}. ${line[i]},`;
      }
      return currentLine;
    }
  }
}