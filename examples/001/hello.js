const args = process.argv.slice(2);
const [name, surname] = args;

if (name === undefined) {
  console.error('Please pass a name, e.g. node hello.js Nelson');
  process.exit(0);
}

if (surname === undefined) {
  console.log(`Good morning ${name}`);
  process.exit(0);
}

console.log(`Good morning ${name} ${surname}`);
