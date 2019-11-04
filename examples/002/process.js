process.stdout.write('Type something then hit enter: \n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`You enter: ${chunk}`);
    process.exit(0);
  }
});

process.on('exit', (code) => {
  process.stdout.write(`Finish with exit code: ${code} \n`);
});
