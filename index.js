function takeANumber(line, customer) {
  line.push(customer);
  return `Welcome, ${customer}. You are number ${line.length + 1} in line.`;
}