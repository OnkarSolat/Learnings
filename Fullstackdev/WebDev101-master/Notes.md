### Classes vs ID

#### Classes they represent the group of entities(elements)

multiple elements can have same class
barcode -> item name and price
Nike Air -> all the Nike air will have same bar code

#### id they represent the a unique entity

one element can only have one ID
serial number or unique code

\*\*\* Iphone8 imei number xxxxx

Let's talk about forms

used for getting the user data? yes

<form action="where to send the data" method="">
 elements here
</form>

action is basically telling the form where to put data for processing
-> backend

method = how you want to send the data

## Let's talk about CSS cascading style sheets

Primary function is to make things look beautiful(people like beauty)
Responsiveness

style is done by property and value

color: blue
background-color: #fff -> white

property: value

How can you style your elements

style attribute inside the element tag

 <div style="background-color: beige;">
        <p class="phoneName" style="color: red;">Iphone</p>
        <p class="phoneName" style="color: rosybrown;">Another Iphone</p>
        <p id="myIphone8">This is my iphone</p>
        <p class="phoneName" id="myIphone9">This is my iphone 9</p>
        <a href="#myIphone9">click iphone9</a>
        <!-- <p class="phoneName" id="myIphone9">This is my iphone</p> -->
        <!-- name is something which helps us with js -->
        <form action="#" method="GET" style="background-color: seashell;">
        </form>
</div>


#### while working with style tag

selector {
    properties: value;
    properties2: value2; 
}

why cascading cause it follows the order like this inline is applied at last and hence is always at top

best practice to do that is using a separate sheet for this has an extension of .css



<link rel="stylesheet" href="./index.css" >

and write all of your styles inside that sheet

#### classes are for groups and you can access your classes with 
.phoneName{
    font-size: medium;
    font-family: Arial, Helvetica, sans-serif;
    background-color: lightcyan;
    color: black;
}


#### id are for elements and you can access your elements with #

#hockeyCheckbox{
    color: red;
    font-size: large;

}

id's overrule the classes
