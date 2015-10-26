#Preparing Existing Services for Mobile

##Existing Systems are Complex
* Back-end systems of record are often too complex to expose directly to application
developers.
* they are stable, dependable, and crucial to the business
* often based on legacy technologies and not always easy to expose to Web standards like HTTP.
* these systems can also have complex interdependencies
* change can be difficult or impossible

##Secrity
* oAuth 1.0
* oAuth 2.0
* SSL
* Hardware

##Technology Choices
* node.js
* ASP.NET MVC (now) / ASP.NET 5
* Java w/ Spring MVC
* PHP

##Data Size & Format
* XML
* JSON


#Approaches to the Solution

##The Build Up Approach
In the build-up approach, a developer exposes the core objects of a big system and puts an
XML parsing layer on top.

###Pros
* can get you to market with version 1 quickly
* developers, internal, already know the system

###Cons
* detailed complexities of the objects make it confusing for consumers
* exposing unneeded or internal details of the system a bad idea
* approach inflexible

##Standards Committee Approach

###Pros
* getting to version 1 quickly.
* sense of unification across an organization and a comprehensive strategy
* stackeholder and contibutors buy in

###Cons
* slow.
* can lead to a mediocre design to meet compromises

##Borrow Thy Neighbors API Design
Same pros and cons as the previous approach, but with the addition of compromising your own specification to meet the
other document and not meeting the goals of your oen design.

#Solution - API Layer
This pattern gives you a buffer or virtual layer between the interface on top and the API
implementation on the bottom. You essentially create a façade – a comprehensive view of what
the API should be and importantly from the perspective of the app developer and end user of the apps they
create.
