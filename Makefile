install:
		npm install

start1:
		npm run babel-node -- src/bin/brain-even.js

start2:
		npm run babel-node -- src/bin/brain-calc.js

start3:
		npm run babel-node -- src/bin/brain-gcd.js

start4:
		npm run babel-node -- src/bin/brain-balance.js

lint:
		npm run eslint .

build:
	rm -rf dist
	npm run build

publish:
		npm publish

.PHONY: test
