function takeANumber(line, customer) {
  line.push(customer);
  return `Welcome, ${customer}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length == 0) {
    return `The line is currently empty`;
  }
}