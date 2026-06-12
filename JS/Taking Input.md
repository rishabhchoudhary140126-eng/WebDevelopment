
# From external file:

![[Pasted image 20260608011639.png]]

 this is how we actually write this in js:
 
![[Pasted image 20260608213830.png]]


> Here "fs" is filesystem
> we should have a txt file in same folder to read input from it.
> "utf-8" is Unicode text encoding (most common encoding on the web)
 
#Note: `readFileSync()` blocks execution until the file has been completely read. Other JavaScript code cannot continue running during that time. 

![[Pasted image 20260609001925.png]]

using readFile generates two new variables, err and data.
> err is null if everything is good, and if there is any problem in reading the file, whatever error generated, stored in there.

>data is initially undefined, if readFile is successfull, then data contains file contents, else it remains undefined.