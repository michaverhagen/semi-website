---
layout: article-start
title: Technology Summary
description: This article provides a birds-eye view of SeMI technology stack. Including references to relating sources.
topic: wiki-semi-consulting
category: learn
tags: ['technology', 'summary']
video-link:
video-caption:
menu-order: 2
open-graph-type: article
---

## Problem

Almost all of the data stored around us can be traced back to a certain thing or an action attached to this thing. For example; how many suitcases that are present at an airport, how many friends one has on a social network, or a bank statement that represents that one ate sushi with their best friend a few nights ago. They represent something that happened in the physical world and which is stored in a ledger of some kind. Most of the services we use and love are based on some sort of ledger.

The problem with these kinds of ledgers, is that almost all context is lost. To translate the data into something meaningful, you - a human - is needed to add meaningful context to the information provided. So much data<sup><a href="https://www.forbes.com/sites/andrewcave/2017/04/13/what-will-we-do-when-the-worlds-data-hits-163-zettabytes-in-2025/#1c39cdc0349a" alt="What Will We Do When The World's Data Hits 163 Zettabytes In 2025?">(link)</a></sup>, but so little context. As described in our [Executive Summary](/knowledge-base/wiki-weaviate/learn/executive-summary/), we are just scratching the surface of what is possible with all the data we have.

## Solution

At SeMI, we have created a solution based on the following five pillars to enable developers to create even more valuable solutions;

1. **Knowledge Graphs**, to structure data;
2. **Decentralization**, to cross-link data in single knowledge graphs (i.e., SeMI-nodes) over a P2P network;
2. **Ontology Agnosticity**, to allow every participant in the network to describe their data;
3. **Word Embeddings**, to create relations between a knowledge graph's unique ontologies in the form of _contextionaries_;
5. **Standardization**, to make it as easy as possible for users to use SeMI in their services or products.

![SeMI hexagon](/img/SeMI-hexagon.jpg)

The software enabling the SeMI-network (i.e., running on a SeMI node) is called Weaviate. Weaviate is an open source project <a href="https://github.com/creativesoftwarefdn/weaviate" alt="Weaviate Github">available on Github</a>. When referring to the software, the name Weaviate is used. When referring to the network, the words SeMI-node are used.

- **SeMI-node**, refers to a _knowledge graph node_ on the network.
- **Weaviate**, refers to the software powering a SeMI-node.
- **SeMI-network**, refers to a _knowledge network_ based on SeMI-nodes.

Below is a point by point overview;

## Ontology Agnosticity

Every SeMI-node on a SeMI-network has its own ontology. An ontology describes classes (like "city", "product" or "seal") its properties (like "name", "locatedIn" or "location"). Although defining an ontology in a Weaviate instance is in line with traditional web semantics<sup><a href="https://en.wikipedia.org/wiki/Semantic_Web" alt="Semantic Web">(ref)</a></sup>, it has always been a challenge to find a single definition of one single ontology that everybody can agree with.

In Weaviate this is solved by giving every instance a unique ontology that can be used to describe whatever things and actions it stores.

To make sure that other nodes on the SeMI network can "understand" the context in which the requesting SeMI-node is communicating, the ontology is extended with keywords to give additional context to the classes and properties. This is best explained by example: The word "seal" might appear as a class. If the class will be used to express information about the fur-coated sea mammal (as opposed to a stamp to close or authenticate a document), you can add words as; fur, mammal, and sea as keywords.

```
{
  "classes": [{
    "class": "Seal",
    "description": "This is the seal",
    "properties": [{
      "name": "name",
      "@dataType": ["string"],
      "description": "Name of the Seal.",
      "keywords": []
    }, {
      "name": "Location",
      "@dataType": ["Zoo"],
      "description": "In which zoo is this Seal?",
      "keywords": [{
        "name": "Place",
        "weight": 0.9
      }, {
        "name": "Village",
        "weight": 0.4
      }]
    }],
    "keywords": [{
      "name": "Mamal",
      "weight": 0.9
    }, {
      "name": "Animal",
      "weight": 0.9
    }]
  }]
}
```

## Contextionary

Every SeMI node has a "contextionary" attached to it which contains a large vocabulary and the relations that the words have to each other expressed in a multi-dimensional space. The keywords in the ontology are used to create a centroid in the vector space that gives context to the meaning of the data stored.

An example in two dimensions:   

![SeMI centroid](/img/SeMI-centroid.jpg)

This brings the feature of context. In future machine to machine communication over the P2P network, a SeMI node can express what the data's meaning is when it transfers information. This also means that answers to queries are Fuzzy<sup><a href="https://en.wikipedia.org/wiki/Fuzzy_logic" alt="Fuzzy">(ref)</a></sup> in nature, a SeMI node tries to interpret the question based on the context it has.

<section class="callout">
    Learn more about SeMI-node architecture on <a href="https://github.com/creativesoftwarefdn/weaviate/blob/develop/README.md">Weaviate's Github page</a>.
</section>

## Networked Knowledge Graph (P2P)

Because all nodes on the network use the same contextionary, SeMI nodes can interact with each other based on the context determined by the contextionary. Instead of sharing the actual words or ontology, a Weaviate shares the context based on the positions in the vector space.

For example, if SeMI-node I has a class: "Seal" and another node the class "Dolphin", they can be visualized as follows:

![SeMI centroid on the network](/img/SeMI-centroid-network.jpg)

This means it is possible to not only limit the knowledge graph to one single SeMI node but also to create a _network of knowledge graphs_. Known as a Knowledge Network. When queried, one SeMI-node can ask another SeMI-node about some class or property that is similar to a class or property in the node.

For example: _Which SeMI-node knows about the centroid of "Seal", "Mammal" and "Flippers"._

![SeMI centroid on network, combined](/img/SeMI-centroid-network-combined.jpg)

## Focus on Standards

Because Weaviate operates as a middleware between the data storage and your applications we believe that interacting with it should be as familiar as possible. Therefore we use as many standards (RESTful API's, GraphQL, etcetera) as possible.

In the <a href="https://github.com/creativesoftwarefdn/weaviate" alt="Weaviate Github">Weaviate documentation</a>  you can find more information about these standards.
