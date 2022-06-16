# React Library Template with CRA

### Before publish change name inside package.json in order to avoid conflicts with other npm libraries

- register on NPM 
- login with command `npm login` and insert your credentials
- To build your package run: `npm run compile`
- To publish to NPM run: `npm publish`

### Now in your Library:
- npm i your-library-name 
- import { Button } from 'your-library-name';

** N.B. remember to increase version inside package.json before each publish **

---------

**If:**
ERR! code ENOENT
ERR! syscall rename ... etc

delete node_modules
delete package-lock.json
change name inside package.json
run `npm install`