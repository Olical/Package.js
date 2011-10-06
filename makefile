default: validate compile

validate:
	@@echo "Validating"
	@@node build/validate.js Mods.js

compile:
	@@echo "Compiling"
	@@java -jar build/compiler.jar --js Mods.js --js_output_file Mods.min.js