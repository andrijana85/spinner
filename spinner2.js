process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100, 900, 1700);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700, 1500);
