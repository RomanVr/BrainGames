install:
		npm install

start:
		npm run babel-node -- src/bin/brain-calc.js

lint:
		npm run eslint .

build:
	rm -rf dist
	npm run build

publish:
		npm publish

.PHONY: test
