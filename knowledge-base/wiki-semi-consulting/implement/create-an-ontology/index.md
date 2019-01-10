---
layout: article-start
title: Create an Ontology
description: Your ontology to describe your data is the most important part of onboarding data. In this article, you will learn all best practices to achieve this.
topic: wiki-semi-consulting
category: implement
tags: ['technology']
video-link:
video-caption:
menu-order: 1
open-graph-type: article
---

## What is an ontology and why do you need it?
In computer science, an ontology is an explicit description of concepts in a domain (classes), with properties describing features, attributes, and interrelationships of the entities. As a decentralized ecosystem, SeMI connects graph-based [Weaviate](/knowledge-base/wiki-semi-consulting/implement/weaviate/) instances, where data is semantically stored. Semantic schemas or ontologies form the backbone of a semantic network and are required to link data in Weaviate. A well-formulated ontology is not only valuable for describing the meaning of data within Weaviate instances, it also enables linking data between them. Because ontologies of multiple Weaviate instances share structural elements and semantic definitions, they are ready for data enrichment.

An ontology together with a set of data instances form a knowledge base. To initialize a Weaviate instance for your knowledge base, all the data should be structured according to the semantic schema you created. A semantic schema supported by Weaviate consists of a list of classes in a domain of discourse, with properties for each concept describing features and attributes of the concept. Properties have datatype restrictions and may be references to other classes. Weaviate ontologies typically do not have a class hierarchy, which enables usage in multiple domains.


## How to build an ontology
Developing an ontology includes defining classes, properties and describing allowed values and references for the properties. The structure of the ontology is simple and straightforward as described, but building an ontology from scratch can be challenging. We suggested taking an iterative approach to ontology development. It is important to keep in mind that an ontology is a model of a part of the real world, so the classes should describe concepts and objects that reflect this reality (in your domain).

### Steps to build an ontology (inspired by [Ontology Development 101](https://protege.stanford.edu/publications/ontology_development/ontology101.pdf)):

1. **Determine the scope of the ontology.**
The domain of the ontology won’t be hard to define assuming you are going to describe an existing dataset. It is, however, important to keep the purpose of the ontology in mind. What kind of information should be in the ontology to provide answers to the questions you will ask?
2. **Consider reusing existing ontologies.**
There are open source libraries of reusable ontologies and knowledge bases available. Be inspired by the structure and definitions of names in these ontologies. Assuming that have your own (non-semantic) dataset as a basis, you might be able to enrich existing ontologies with your classes.
3. **Define the classes.**
The important terms, objects and concepts in your domain are classes. Give them a name and a definition.
4. **Define the properties of classes.**
The properties are the semantics of the instances in a database. Properties have a name, a description and also a description of possible data value formats. Supported data types are integers, numbers, date, boolean and string. Additionally, cross-references to classes are also supported as datatype for a property.


### Common practices and tips

#### Schema structure

- Keep the distinction between a class and its name in mind. Classes don’t represent the words of the concepts in your domain, but the concepts itself. Therefore, synonyms for the same concept represent the same class.
- Sometimes it’s hard to decide whether a specific distinction should be modeled as a property value or as a new class. Some tips:
	- If a concept with different property values becomes a restriction for properties in other classes, then the concepts should be a new class.
	- If a distinction is important in the domain, then create a new class.
	- Classes of individual instances don't change often, so if the concept you have in mind is rather static, then create a new class for it.

#### Naming

- Class name labelling: use CamelCase (an uppercase working as delimiter) notation and the use of the singular form of nouns. e.g. WineGrape.
- Property name labelling: property labels should always start with lowercase, but should still use uppercase word delimitation. e.g. madeFromGrape. Property names referring to classes often need prefixes and suffixes. Common practices are to have ‘has’ as a prefix or to have the suffix ‘of’, e.g. hasMaker and makerOf.
- Avoid the use of homonyms and conjunctions.
- Recycle strings rather than using synonyms.
- Use the singular form for nouns or nominals.
- Use explicit and concise names.
- Avoid character formation (use plain <abbr>ASCII</abbr> format, avoid accents).
- Expand abbreviations and acronyms.
- Use a minimum amount of words for labels.
- Include a short but complete description of the class or property, of your own or taken from an official dictionary (e.g. from [http://www.dictionary.com/](http://www.dictionary.com/)).

#### Common used classes

Some classes are useful for multiple domains. To help you get started, you can adopt class names and associated data instances from this list. Associated data instance groups are suggested, so data combination will be ensured. Data combination increases data value and insights, so please consider adopting these standard distributions.

- **AgeGroup.** For the anonymity of individuals, *privacy should be ensured by design*. This may entail assigning people to age groups instead of giving away exact ages. Age groups can be defined in time frames of five years, suggested age groups are:
	- 0–14 (Children)
	- 15–24 (Youth)
	- 25–64 (Adults)
	- 65+ (Seniors)

- **Gender.** Three categories of gender are widely adopted:
	- Male
	- Female
	- Other

- **AmountOfMoney or Price.** Amounts and prices may vary from low to high depending on the domain. For this reason, the larger the amount or price, the larger the data span. Again, more specific groups are possible, as long as these groups fall in the predefined groups below.
	- 0–5
	- 5–10
	- 10–20
	- 20–50
	- 50–100
	- 100–250
	- 250–500
	- 500–1000
	- 1000–5000
	- 5000–10000
	- 10000–100000
	- 100000+

- **Date/Time.** Date as Weaviate schema datatype is formatted according to <abbr>ISO</abbr> 8601 <abbr>UTC</abbr> (e.g. 2018-02-16T16:12:40+00:00). You can also split date data into certain time spans, e.g.
	- Parts of the day
	- Days of the week
	- Weeks
	- Months
	- Years

- **Geolocation.** To get the highest value out of the locations, please specify the location as precisely as possible, for example by including the longitude and latitude of the geolocation. Include the following properties to the class Geolocation:
	- street
	- streetNumber
	- streetNumberExtension
	- city
	- state or province or region
	- zip or postalCode
	- country
	- longitude
	- latitude

## From non-graph database schema to knowledge base ontology
If you want to map a non-graph database into a graph database, the first step is to create the ontology. This can, however, be a rather difficult process. It is important to keep in mind that you the most important data you will fill a Weaviate instance with is metadata and link this, instead of just representing all data instances. An ontology describes the structure of the metadata. Developing an ontology for a graph database is therefore not just direct mapping of a database schema.

Tips and tricks
- 	Relational databases consist of a lot of values containing IDs to refer to other tables. Mostly, <abbr>ID</abbr>s are an indicator for creating a class.

The [previous article](/knowledge-base/wiki-semi-consulting/implement/how-to-enrich-data/) describes how you can enrich your dataset.
