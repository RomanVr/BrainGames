install:
		npm install

start:
		npm run babel-node -- src/bin/brain-even.js

lint:
	npm run eslint ./src/*/* ./src/*

publish:
		npm publish

.PHONY: test
