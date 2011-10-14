default: validate compile

validate:
	@@echo "Validating"
	@@node build/validate.js Package.js

compile:
	@@echo "Compiling"
	@@java -jar build/compiler.jar --js Package.js --js_output_file Package.min.js