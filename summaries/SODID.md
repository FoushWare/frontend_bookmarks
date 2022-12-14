<!-- @format -->

# SOLID

<p style="color:yellow;font-size:18px">
		is an acronym for five principles that help software developers design maintainable and extendable classes. It stands for 
		<strong style="color:red;background:#eee;">Single responsibility</strong>, 
		<strong style="color:red;background:#eee;">Open-closed </strong>
		<strong style="color:red;background:#eee;"> Liskov substitution</strong>,
		<strong style="color:red;background:#eee;"> Interface segregation and </strong>
		<strong style="color:red;background:#eee;">Dependency inversion. </strong>
</p>

    Single Responsibility Principle

- A class should have one, and only one, reason to change.

> Example

A ScoreCounter class is only responsible for counting the score of a game according to the scoring rules. This class should only change if the scoring rules change.

    	Open-Closed Principle

- Software entities (classes, modules, functions, etc.)
  should be open for extension, but closed for modification.
- This can be achieved by inheritance

> Example

<p style="font-size:16px;">
Imagine you use an external library which contains a class <strong style="background:#eee;padding:3px">Car</strong>. The Car has a method<strong style="background:#eee;padding:3px"> brake</strong>. In its base implementation, this method only slows down the car but you also want to turn on the brake<strong style="background:#eee;padding:3px"> lights</strong>. You would create a subclass of Car and override the method brake. After calling the original method of the super class, you can call your own <strong style="background:#eee;padding:3px">turnOnBrakeLights</strong> method. This way you have extended the Car‘s behavior without touching the original class from the library.
</p>
    		Liskov Substitution Principle
