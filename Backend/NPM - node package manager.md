
# npm

The full form of NPM is node package manager. 
It is a package manager for JavaScript, primarily used for managing libraries and dependencies in Node.js projects. 



![[Pasted image 20260616003817.png]]



![[Pasted image 20260616003041.png]]

running 
```json
npm init -y
```
will give us this new package.json file as shown above.

Here, keywords, author, license and description are metadata related.
name, version are initially not important, name can be anything.

scripts section runs functions and script files. e.g.;

![[Pasted image 20260616003440.png]]
here, for running this script, we do
```json
npm run start
```

and this will be equivalent to typing ```
```
node index.js
```
 in terminal.

This approach can later be used for running different scripts in different scenarios.

