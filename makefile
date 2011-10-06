src = src/
files = 
combined = Mods.js
compiled = Mods.min.js

default: combine validate compile
develop: combine validate

combine:
	@@echo "Combining"
	@@cat ${files} > ${combined}

validate:
	@@echo "Validating
	@@node build/validate.js ${combined}

compile:
	java -jar build/compiler.jar --js ${combined} --js_output_file ${compiled}