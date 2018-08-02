install:
		npm install

start:
		npm run babel-node -- src/bin/brain-calc.js

lint:
		npm run eslint ./src/*/* ./src/*

publish:
		npm publish

.PHONY: test
