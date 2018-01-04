# Week One - Classes

I'm going to start off this week by writing about classes.  For my examples I'm going to be using both JavaScript and GoLang.  I will use the descriptor GoLang because have you ever tried googling Go?  It doesn't work very well!

## Description & Summary

Previous to classes, Javascript was using a prototype-based creation of classes.  In all actuality a base class is an function containing several literals:

### A pre-es15 class
*(and model for further code examples in this setion)*

[1a.](1a)  So, let's get into the code!  Looking at the code examples in [1a](1a) we can see that we first create our base class `BallGame`, and then within that class it receives two parameters.  We assume from those parameters that the statistics for each team will be delivered in these objects.

[1b.](1b)  Now that we have defined our object we know what the scores will be based off the expected results of `this.awayScore` and `this.homeScore` as they add up the results of the halves.

[1c.](1c)  We Construct based off of what we know the objects that we would like to have passed into our object.

### Post-es15 Class with
As Javascript goes on we gather new and new tools in order to help us create bigger, badder, faster functions.  [Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) was introduced in order to make setting up classes easier.  There's a lot of work to and a lot of understanding that has to go on in order to understand how classes are working and where the namespaces are.

You can use a lot of [Method Definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Class_body_and_method_definitions) in order to make the code more sleak and slimmed down if needed.  In fact in some frameworks and API's that is their guidance; however, the guidance is not the law, so choose the method that seems to fit your style!  It's_**just**_ JavaScript afterall!

**Common Sugars**
* *Binding `this` to a function* - This can be used quite frequently in react; however it's not necessary.
* *Deconstruction* - Deconstructing an object is probably my most favorite part of es6.
* *Getters* - Sometimes it doesn't make sense to bind a function, then use the function.  Use a getter to bind a function to a value.

## GoLang Classes
Alright, so classes arrrren't really a thing in GoLang, because it's strictly type though we can do a lot with this language to maneuver what we want our data to do.  In our third section of code we are going to go through setting up our data structure properly to achieve all of the things that we did with javascript