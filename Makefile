build-cli:
	npx tsc ./src/app/cli/main.ts --outDir build
run-cli:
	node ./build/app/cli/main.js
test: 
	node --loader tsx --test src/**/*test.ts

