#!/usr/bin/env node

const path = require('path')
const { writeFileSync, existsSync, unlinkSync } = require('fs')
const sort = require('sort-package-json')
const xo = require('./package.json')

try {
	const workDir = process.env.INIT_CWD

	let modified = false
	let target = path.join(workDir, 'package.json')

	const pkg = require(target)

	for (const tool of ['prettier', 'husky', 'xo']) {
		if (typeof pkg[tool] === 'undefined') {
			pkg[tool] = xo[tool]
			modified = true
		}
	}

	if (modified) {
		writeFileSync(target, JSON.stringify(sort(pkg), null, '\t') + '\n', 'utf8')
	}

	for (const file of ['.prettierrc', 'prettier.config.js']) {
		target = path.join(workDir, file)
		if (existsSync(target)) {
			unlinkSync(target)
		}
	}
} catch (error) {
	console.error('xo-quick postinstall failed :', error)
}
