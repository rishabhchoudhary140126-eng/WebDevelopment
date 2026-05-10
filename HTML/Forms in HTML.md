
They are used to collect data.

# Attributes in Forms

### Action
![[Pasted image 20260508205639.png]]

### Input element

used to create multiple form controls.
there are multiple types of input, which can be created using type attribute.
```html
<form action = "action.php">
	<input type="text" />
</form>
```

We can also not define input type, if left, it will create a box, in which we can write anything.

==Different tyoe of avialavle input types are:==

![[Pasted image 20260508210440.png|207]]


## Placeholder

In forms input, we can have a faded text already present, which will fade away once the user starts typing.
That can be created with placeholders.
```html
<input type="text" placeholder="Enter Name" />
```

## Label

Using label, we can connect our input box with some text, like:
![[Pasted image 20260508222059.png]]
If we give input like this, our page will look similar to this:
![[Pasted image 20260508222137.png]]
Now as we click on username text, our textbock will be automatically active, and we can directly start typing.

#Always_keep_most_of_data_in_label

Later we will be using label like this:
![[Pasted image 20260508222807.png]]


## Button

We can also have buttons in our form, it can be written as: 
```html
<button>Text on Button</button>
```
When clicked on it, **by default** it will redirect every filed data in form towards action selected in form.

We can also define buttons same ways outside form.

We have 3 types of buttons in HTML:
![[Pasted image 20260508224507.png]]

We can create buttons using input element too, but it is generally avoided.
```html
<input type="submit" valu="Button Name" >
```


## Name Attribute

think of this as giving a name to input we are storing in our backend.

Like if user enters username, we give name as username, in backend username variable is created and then entered data is stored.

```html
<input type="text" placeholder="Enter username" id="username" name="username" />
```

Id is more for CSS and styling, and name is for storing data.

## Radio Button

![[Pasted image 20260509230636.png]]

Here name for each radio button should be same, this will make sure only one of them is selected at once, and they are grouped as they represent same entity. 

Here value attribute represents what is passed to backend  if t hat radio button is selected. If not present, it will pass on value, which is confusing as wwe cant know which among the buttons passed this value.

![[Pasted image 20260509230024.png]]

This is an example of radio buttons.


## Checkbox

![[Pasted image 20260509225344.png]]

here everything is as usual as the name suggests, in the end we have a ""Checked"" attribute, if written, out checkbox will be already checked from default, and the user can uncheck it if he wants, and if not written, by default it is unchecked.

If checkbox is ticked, ON will be passed in url with attached name, and if unchecked, NOTHING will be passed.

We can also link multiple checkboxes by keeping the name same. 
Difference between a radio button and a checkbox after linking, would be a radio button cant me multiselect, but checkboxes can be.


## Dropdowns

Dropdowns in html can be created using select element.

![[Pasted image 20260509235819.png|612]]

We can also have an option, preselected, there we add an attribute selected, e.g.,
```html
<option value="dev" selected>Developer</option>
```

## Range

![[Pasted image 20260510193940.png]]

We can take input fromm user from a large range of values.
E.g., Volume
![[Pasted image 20260510194102.png]]

we can have step attribute, which will tell by how much vol can be increased in each increase, or min amount by which value can be increase.

Value attribute can be used to pre select a value.
```html
<input type="range" min="0" max="100" name="vol" step="10" value="70" />
```

## Text Area

![[Pasted image 20260510195958.png]]

we can use name, placeholder and related attributes.
We can use rows and cols attribute to resize the text area.

