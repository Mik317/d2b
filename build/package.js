export var name = "d2b";
export var version = "0.0.41";
export var description = "A d3-based reusable chart library.";
export var keywords = ["d3","d3-module","chart","charts","pie","axis","line","area","bar","stacked","tooltip"];
export var license = "MIT";
export var main = "build/d2b.cjs.js";
export var homepage = "http://d2bjs.org";
export var repository = {"type":"git","url":"https://github.com/d2bjs/d2b"};
export var scripts = {"build:dev":"npm run build:package && rollup -c -g d3:d3,d3-sankey:d3,d3-interpolate-path:d3,d3-svg-annotation:d3 && npm run test","build:prod":"npm run build:package && NODE_ENV=production rollup -c -g d3:d3,d3-sankey:d3,d3-interpolate-path:d3,d3-svg-annotation:d3","build:server":"http-server -a 0.0.0.0 -p 8000","build:watcher":"npm-watch","build:package":"json2module package.json > build/package.js","build:watch":"npm-run-all --parallel build:watcher build:server","start":"npm run build:server","test":"jasmine","docs:prepare":"gitbook install","docs:watch":"npm run docs:prepare && gitbook serve","docs:build":"npm run docs:prepare && rm -rf _book && gitbook build","docs:publish":"npm run docs:build && cp docs/cname _book && cd _book && git init && git commit --allow-empty -m 'Update docs' && git checkout master && git add . && git commit -am 'Update docs' && git push git@github.com:d2bjs/d2bjs.github.io master --force"};
export var dependencies = {"d3":"^4.5.0","d3-interpolate-path":"^2.0.1","d3-sankey":"^0.7.1","d3-svg-annotation":"^2.1.0","flubber":"^0.4.0"};
export var devDependencies = {"babel-preset-es2015-rollup":"^3.0.0","cssnano":"^3.10.0","http-server":"^0.9.0","jasmine":"^2.5.3","jsdom-no-contextify":"^3.1.0","npm-run-all":"^4.0.1","npm-watch":"^0.1.8","postcss-cssnext":"^2.9.0","postcss-triangle":"^1.0.1","precss":"^1.4.0","rollup":"0.27","rollup-plugin-babel":"^2.7.1","rollup-plugin-eslint":"^3.0.0","rollup-plugin-postcss":"^0.2.0","rollup-plugin-uglify":"^1.0.1","rollup-watch":"^3.2.2","uglify-js":"^3.2.2"};
export var watch = {"build:dev":{"patterns":["src","spec"],"extensions":"js,css,scss"}};
