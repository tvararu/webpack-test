# webpack-test

Install the dependencies:

```
npm i -g webpack webpack-dev-server
```

To test the project, on the `master`/`prefetch` branch:

```
git clone git@github.com:tvararu/webpack-test.git
cd webpack-test
webpack-dev-server
```

On the `dll` branch:

```
git checkout dll
webpack --config webpack.dll.config.js
webpack-dev-server
```
