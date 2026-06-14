![[Pasted image 20260612215736.png]]



If we want just the first element, we go with queryselector, and if we want some 2nd third or Nth element we do querySelectorAll[ n ] 


![[Pasted image 20260613211926.png]]


We cant delete the item selected(SELF DESTROY not possible). We have to select the parent element and then with zero based indexing, we delete one of its children.

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);
```


![[Pasted image 20260614080527.png]]


Example:
![[Pasted image 20260614093903.png]]

# Adding attributes to elements:

![[Pasted image 20260614094856.png]]


