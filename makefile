default: validate compile

validate:
	@@echo "Validating"
	@@node build/validate.js Structure.js

compile:
	@@echo "Compiling"
	@@java -jar build/compiler.jar --js Structure.js --js_output_file Structure.min.js