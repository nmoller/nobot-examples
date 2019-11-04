# Automating with Node JS - Nobot Examples

**Minimum Node version**: 6.9.1

1. Make sure you have Node installed https://nodejs.org/en
1. Run `npm install`
1. Follow along in the book to work on examples in `develop` branch
1. Complete versions are on `master` branch.

https://nodejs.org/docs/v6.9.1/api/

# Running on docker

Version 12 taggé comme `Active LTS (Erbium)`.

```bash
docker run -it --rm -v $(pwd):/opt/nodejs \
-w /opt/nodejs \
-u 1000:1000 \
node:12-slim \
npm install
```

Juste pour comprendre les args:

```bash
docker run -it --rm -v $(pwd):/opt/nodejs \
-w /opt/nodejs \
-u 1000:1000 \
node:12-slim \
node examples/001/hello.js 'Test001'
```

On peut utiliser ce qui a été configuré dans `package.json` :

```bash
docker run -it --rm \
-v $(pwd):/opt/nodejs \
-w /opt/nodejs \
-u 1000:1000 \
node:12-slim \
npm run 003_2
```