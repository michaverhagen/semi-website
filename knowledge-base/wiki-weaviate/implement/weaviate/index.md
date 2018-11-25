---
layout: article-tech
title: Weaviate Documentation
description: Technical documentation for using Weaviate.
topic: wiki-weaviate
category: implement
tags: ['technology']
video-link: 
video-caption: 
menu-order: 3
open-graph-type: article
---

<section class="help">
    This is the documentation page for Weaviate.<br>
    In case you are looking for a technology summary, <a href="/knowledge-base/learn/technology-summary/">visit this page</a>.
</section>

Below you can find the documentation for Weaviate. Please note that Weaviate is not production ready yet, meaning that certain implementations might be due to change.

## Index

- [download binary](#download-binary)
  - [manually download & install](#manually-download-and-install)
  - [build status](#build-status)
  - [run with docker](#run-with-docker)
- [configure weaviate](#configure-weaviate)
  - [example configuration](#xample-configuration)
  - [for development](#for-development)
  - [available databases](#available-databases)
- [ontology schemas for things & actions](#ontology-schemas-for-things-and-actions)
  - [defining a things ontology](#defining-a-things-ontology)
  - [example of things ontology json](#example-of-things-ontology-json)
- [run weaviate](#run-weaviate)
  - [running a basic instance](#running-a-basic-instance)
  - [getting help](#getting-help)
  - [arguments](#arguments)
  - [debugging](#debugging)
- [access tokens](#access-tokens)
- [meta information](#meta-information)
- [creating things & actions](#creating-things--actions)
  - [creating a thing](#creating-a-thing)
  - [creating an action](#creating-an-action)
- [listing- things & actions](#listing-things--actions)
- [getting things & actions](#getting-things--actions)
- [updating things & actions](#updating-things--actions)
- [patching updating things & actions](#patching-updating-things--actions)
- [remove things & actions](#remove-things-and-actions) (TBD)
- [using graphql](#using-graphql) (TBD)
- [complete api overview](#complete-api-overview) (TBD)

## Download Binary

### Directly Download and Install

Latest Version {{ site.weaviate_version }} (stable):

```
$ mkdir -p /var/weaviate
$ cd /var/weaviate
$ curl -o weaviate https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_$(echo `uname`|tr '[:upper:]' '[:lower:]')_amd64.zip
$ chmod +x weaviate
$ export PATH=/var/weaviate:$PATH
```

Nightly (unstable):

```
$ mkdir -p /var/weaviate
$ cd /var/weaviate
$ curl -o weaviate https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_nightly_amd64.zip
$ chmod +x weaviate
$ export PATH=/var/weaviate:$PATH
```

### Manually Download and Install

| Lastest Stable ({{ site.weaviate_version }}) | Nightly (unstable) | 
| ----------------- | ------------------ |
| [weaviate_darwin_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_darwin_386.zip)| [weaviate_darwin_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_darwin_386.zip)
| [weaviate_darwin_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_darwin_amd64.zip)| [weaviate_darwin_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_darwin_amd64.zip)
| [weaviate_linux_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_386.zip)| [weaviate_linux_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_386.zip)
| [weaviate_linux_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_amd64.zip)| [weaviate_linux_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_amd64.zip)
| [weaviate_linux_arm.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_arm.zip)| [weaviate_linux_arm.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_arm.zip)
| [weaviate_linux_mips.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_mips.zip)| [weaviate_linux_mips.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_mips.zip)
| [weaviate_linux_mips64.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_mips64.zip)| [weaviate_linux_mips64.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_mips64.zip)
| [weaviate_linux_mips64le.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_mips64le.zip)| [weaviate_linux_mips64le.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_mips64le.zip)
| [weaviate_linux_mipsle.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_mipsle.zip)| [weaviate_linux_mipsle.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_mipsle.zip)
| [weaviate_linux_ppc64.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_ppc64.zip)| [weaviate_linux_ppc64.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_ppc64.zip)
| [weaviate_linux_ppc64le.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_ninux_ppc64le.zip)| [weaviate_linux_ppc64le.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_ninux_ppc64le.zip)
| [weaviate_windows_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_windows_386.zip)| [weaviate_windows_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_windows_386.zip)
| [weaviate_windows_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_windows_amd64.zip)| [weaviate_windows_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_windows_amd64.zip)
| ----------------- | ------------------ |
| [Checksum file](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/checksums.txt) | [Checksum file](https://storage.cloud.google.com/weaviate-dist/releases/nightly/checksums.txt)

### Build Status

| Branch | Status        |
| ------ |:-------------:|
Master   | [![Build Status](https://api.travis-ci.org/creativesoftwarefdn/weaviate.svg?branch=master)](https://travis-ci.org/creativesoftwarefdn/weaviate/branches)
Develop  | [![Build Status](https://api.travis-ci.org/creativesoftwarefdn/weaviate.svg?branch=develop)](https://travis-ci.org/creativesoftwarefdn/weaviate/branches)
 
## Run with Docker

Make sure to have `weaviate.conf.json` ([creating a configuration file](#configure-weaviate)) in the same directory and to set the runtime variables in `docker-compose.yml`.

```
$ git clone github.com/creativesoftwarefdn/weaviate
$ cd weaviate
$ docker-compose up
```

## Configure Weaviate

<section class="help">
You can download an example file <a href="https://github.com/creativesoftwarefdn/weaviate/blob/master/weaviate.conf.json">here</a>.
</section>

Weaviate settings can be created in a <abbr>JSON</abbr> config file in an array of `environments` this means that you can have multiple settings in one configuration file.

| environments[].key                            | Value         |
| --------------------------------------------- | ------------- |
| `name`                                          | Name of the instance |
| `database`                                      | Database settings. [Learn more](#available-databases) |
| `cache.name`                                    | Name of the cache. Available = dataloader |
| `schemas.Thing`                                 | Path or URL to Things Schema. [Learn more](#available-databases) |
| `schemas.Action`                                | Path or URL to Actions Schema. [Learn more](#available-databases) |
| `broker.host`                                   | MQTT broker hostname (still in development) |
| `broker.port`                                   | MQTT broker port (still in development) |
| `limit`                                         | Limit of list requests |
| `debug`                                         | Boolean (output in cli) |

### Example Configuration

```
{
  "environments": [{
    "name": "cassandra",
    "database": {
      "name": "cassandra",
        "database_config": {
            "host": "127.0.0.1",
            "port": 7000,
            "keyspace": "weaviate"
        }
    },
    "cache": {
      "name": "dataloader"
    },
    "schemas": {
      "Thing": "thing-schema.json",
      "Action": "action-schema.json"
    },
    "broker": {
      "host": "localhost",
      "port": 1883
    },
    "limit": 100,
    "debug": true
  }]
}
```

### For Development

You can add custom development settings.

| environments[].key                            | Value         |
| --------------------------------------------- | ------------- |
| `development.external_instances[].url`          | Url of external Weaviate |
| `development.external_instances[].api_key`      | Related API key for external Weaviate |
| `development.external_instances[].api_token`    | Related API token for external Weaviate |

#### Example Configuration

```
{
  "environments": [{
    // ALL OTHER CONFIGURATIONS
    "development": {
      "external_instances": [{
          "url": "http://localhost:8070",
          "api_key": "a310f32d-0b0b-4b18-9349-8bd986822217",
          "api_token": "2cc8b504-b429-439e-87d0-d2a17f2bbcf7"
        },
        {
          "url": "http://127.0.0.1:8070",
          "api_key": "a310f32d-0b0b-4b18-9349-8bd986822217",
          "api_token": "2cc8b504-b429-439e-87d0-d2a17f2bbcf7"
        }
      ]
    }
  }]
}
```

## Available Databases

<section class="help">
Learn more about the database architecture <a href="https://github.com/creativesoftwarefdn/weaviate#database-connector--graph-interface">here</a>.
</section>

Weaviate is connected to a database through a connector. You can also [create other connectors](https://github.com/creativesoftwarefdn/weaviate/blob/develop/connectors/foobar/connector.go).

### Cassandra

Add to the "database" section of the [configuration](#configure-weaviate) the following settings.

```
"database": {
    "name": "cassandra", // name of the connector
    "database_config": {
        "host": "127.0.0.1", // cassandra host
        "port": 7000, // cassandra port
        "keyspace": "weaviate" // cassandra keyspace
    }
}
```

You can also run Cassandra with Docker directly

```
docker run -t --name weaviate_db_1_travis -e CASSANDRA_BROADCAST_ADDRESS=127.0.0.1 -p 7000:7000 -p 9042:9042 -v ~/cassandra:/var/lib/cassandra -d cassandra:3
```

<section class="help">
Weaviate's <a href="#run-with-docker">docker compose</a> also contains Cassandra.
</section>

## Ontology Schemas for Things and Actions

<section class="help">
Learn more about web semantics and the value of ontologies <a href="/weaviate/concept-in-a-nutshell/">here</a>.
</section>

One of the core features of Weaviate are the ontologies. You will use the ontologies to define what specific data means. For example, you can define that when you store data about an apple, it refers to the fruit “apple” or the company “Apple”. You have to do this both for “things” and for “actions”.

### Defining a Things Ontology

<section class="help">
Classes should always be written with a capital.
</section>

Ontologies are defined in a <abbr>JSON</abbr> file and should contain the following information;

| Key                                 | Value         |
| ----------------------------------- | ------------- |
| `@context`                          | Context url. For example: `http://example.org` |
| `type`                              | `thing` or `action` |
| `version`                           | [Semantic Versioning](https://semver.org/) version number. For example: `1.0.1`|
| `name`                              | Name of the ontology |
| `maintainer`                        | Email of the maintainer |
| `classes[].class`                   | Class (start with a capital). For example: `Company` |
| `classes[].description`             | Description of the class |
| `classes[].kinds[].kind`            | Kind of class to better define what "kind" of class it is. For example: `Organization` |
| `classes[].kinds[].weight`          | Importance of the kind. Minimal value = `0.0`. Maximum value = `1.0` |
| `classes[].properties[].name`       | Name of the property (start with lowercase). For example: `name` |
| `classes[].properties[].description`| A description of the property. For example: `Name of the company` |
| `classes[].properties[].@dataType[]`| Datatype of the property. Available types are: `string`, `int`, `boolean`, `number`, `date`, `[name of class]` (for example: `Country`, always with capital) |

### Example of Things ontology <abbr>JSON</abbr>

```
{
  "@context": "http://example.org",
  "type": "thing",
  "version": "1.0.0",
  "name": "Thing Example",
  "maintainer": "hello@creativesoftwarefdn.org",
  "classes": [{
    "class": "Company",
    "description": "This is an example of a Company",
    "kinds": [{
      "kind": "Organization",
      "weight": 0.9
    }, {
      "kind": "exampleThing1KindB",
      "weight": 0.8
    }],
    "properties": [{
        "name": "name",
        "@dataType": [
          "string"
        ],
        "description": "example of a string."
      },
      {
        "name": "exampleCref",
        "@dataType": [
          "Country"
        ],
        "description": "Value of a cref."
      }
    ]
  }, {
    "class": "Country",
    "description": "This is an example of a Country",
    "kinds": [{
      "kind": "Location",
      "weight": 0.5
    }],
    "properties": [{
      "name": "name",
      "@dataType": [
        "string"
      ],
      "description": "example of a string."
    }]
  }]
}
```

<section class="help">
You can find a simple example <a href="https://github.com/creativesoftwarefdn/weaviate/tree/master/test/schema">here</a> or a more complex example <a href="https://github.com/creativesoftwarefdn/weaviate-semantic-schemas">here</a>.
</section>

## Run Weaviate

With a configuration file and two ontologies (things and actions) you can start running Weaviate.

<section class="help">
Make sure to fetch the API-token and API-key when running Weaviate for the first time.
</section>


### Running a Basic Instance

_Note: Assumes the database is running and configuration files are set._

```
$ weaviate --scheme=http --port=8080 --host=127.0.0.1 --config="cassandra_docker" --config-file="./weaviate.conf.json"
```

### Getting Help

```
$ weaviate --help
```

### Arguments

| Argument               | Description
|  --------------------- | ------------
| `--scheme=`            | the listeners to enable, this can be repeated and defaults to the schemes in the swagger spec
| `--cleanup-timeout=`   | grace period for which to wait before shutting down the server (default: 10s)
| `--max-header-size=`   | controls the maximum number of bytes the server will read parsing the request header's keys and values, including the request line. It does not limit the size of the request body. (default: 1<abbr>MiB</abbr>)
| `--socket-path=`       | the unix socket to listen on (default: /var/run/weaviate.sock)
| `--host=`              | the <abbr>IP</abbr> to listen on (default: localhost) [$HOST]
| `--port=`              | the port to listen on for insecure connections, defaults to a random value [$PORT]
| `--listen-limit=`      | limit the number of outstanding requests
| `--keep-alive=`        | sets the <abbr>TCP</abbr> keep-alive timeouts on accepted connections. It prunes dead <abbr>TCP</abbr> connections ( e.g. closing laptop mid-download) (default: 3m)
| `--read-timeout=`      | maximum duration before timing out read of the request (default: 30s)
| `--write-timeout=`     | maximum duration before timing out write of the response (default: 60s)
| `--tls-host=`          | the <abbr>IP</abbr> to listen on for <abbr>TLS</abbr>, when not specified it's the same as --host [$TLS_HOST]
| `--tls-port=`          | the port to listen on for secure connections, defaults to a random value [$TLS_PORT]
| `--tls-certificate=`   | the certificate to use for secure connections [$TLS_CERTIFICATE]
| `--tls-key=`           | the private key to use for secure conections [$TLS_PRIVATE_KEY]
| `--tls-ca=`            | the certificate authority file to be used with mutual tls auth [$TLS_CA_CERTIFICATE]
| `--tls-listen-limit=`  | limit the number of outstanding requests
| `--tls-keep-alive=`    | sets the <abbr>TCP</abbr> keep-alive timeouts on accepted connections. It prunes dead <abbr>TCP</abbr> connections ( e.g. closing laptop mid-download)
| `--tls-read-timeout=`  | maximum duration before timing out read of the request
| `--tls-write-timeout=` | maximum duration before timing out write of the response
| `--config=`            | the section inside the config file that has to be used
| `--config-file=`       | path to config file (default: ./weaviate.conf.json)

#### Understanding <abbr>LOG</abbr>s

When running Weaviate, all logs will be visible in the <abbr>CLI</abbr>. The logs will also contain the root <abbr>API</abbr> tokens. Make sure to refresh them after starting the server.

### Debugging

When debugging is enabled in the config file, information will be displayed in the <abbr>CLI</abbr> as `DEBUG`.

## Access Tokens

Tokens and keys give you access to Weaviate's <abbr>API</abbr>’s. They are set in the header (`X-API-KEY: [[apiKey]]` and `X-API-TOKEN: [[apiToken]]`) and are formatted as a <abbr>UUID</abbr>; every key is related to a request if you create a thing or action, the key that you use will be attached to this object. You can create as many keys and children of keys, creating a new key automatically makes the key a child of the request key.

When starting Weaviate for the first time, the tokens will be displayed in the command line. It is advised to directly refresh the tokens.

The rules for keys within Weaviate are:

1. A new key created by a request key will make the new key a child of the request key.
2. A parent key always has access to a child key.

Requesting information about the current key can be done like this:

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/keys/me"
```

Requesting an overview of children of a key can be done like this:

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/keys/me/children"
```

A child key can be created like this:

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/keys"
```

And information from a specific child key can be requested like this:

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/keys/{keyId}"
```

## Meta Information

All Weaviate instances have a meta end-point that can be used to learn more about the instance. The meta endpoint contains the ontology and general information from the ontology files.

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/meta"
```

## Creating Things &amp; Actions

Things and Actions are created based on the ontology. If you work with a Weaviate instance of which you don’t know the ontology, you can always request the ontologies via the meta end-point.

### Creating a Thing

You can create a thing by <abbr>POST</abbr>ing a body to the things endpoint. The body should contain the right values. In case the body can't be processed an error code will be returned.

#### body

```
{
	"@context": "http://example.org",
	"@class": "TestThing",
	"schema": {
		"testString": "string",
		"testInt": 1,
		"testBoolean": true,
		"testNumber": 0.1
	}
}
```

#### request

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/things"
```

You can also validate a request by sending the body to the `/weaviate/v1/things/validate` end-point. Weaviate will validate the request without sending it to the database.

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/things/validate"
```

### Creating an Action

Creating actions is similar to creating things. You can create an action by <abbr>POST</abbr>ing a body to the actions endpoint. The body should contain the right values. In case the body can't be processed an error code will be returned.

#### body

```
{
	"@context": "http://example.org",
	"@class": "TestAction",
	"schema": {
		"testString": "string",
		"testInt": 1,
		"testBoolean": true,
		"testNumber": 0.1
	}
}
```

#### request

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/actions"
```

You can also validate a request by sending the body to the `/weaviate/v1/actions/validate` end-point. Weaviate will validate the request without sending it to the database.

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/actions/validate"
```

## Listing Things &amp; Actions

When you've created things and actions, you can request a list with all things and actions. You can also set the following variables in the querystring.

| Key | Value
| --- | -----
| `maxResults` | Max amount of results as a number (i.e. `maxResults=5`)
| `page` | Page number (i.e., `page=2`)

### Things

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/things"
```

**Actions**

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/actions"
```

## Getting Things &amp; Actions

You can request a thing or an action based on its <abbr>UUID</abbr> or by using the GraphQL endpoint. In this you can learn how to fetch a thing or action if you know the <abbr>UUID</abbr>. You can learn more about using GraphQL [here](#).

### Things

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/things/[[THING-ID]]"
```

### Actions

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/actions/[[ACTION-ID]]"
```

## Updating Things &amp; Actions

You can update a thing or action when you know its UUID. 

### Updating Things

#### body

```
{
	"@context": "http://example.org",
	"@class": "TestThing",
	"schema": {
		"testString": "string",
		"testInt": 1,
		"testBoolean": true,
		"testNumber": 0.1
	}
}
```

#### request

```
$ curl -X PUT -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/things"
```

You can also validate a request by sending the body to the `/weaviate/v1/things/validate` end-point. Weaviate will validate the request without sending it to the database. Note that you need to use <abbr>POST</abbr> instead of <abbr>PUT</abbr>.

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/things/validate"
```

### Updating Actions

#### body

```
{
	"@context": "http://example.org",
	"@class": "TestAction",
	"schema": {
		"testString": "string",
		"testInt": 1,
		"testBoolean": true,
		"testNumber": 0.1
	}
}
```

#### request

```
$ curl -X PUT -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/actions"
```

You can also validate a request by sending the body to the `/weaviate/v1/actions/validate` end-point. Weaviate will validate the request without sending it to the database. Note that you need to use <abbr>POST</abbr> instead of <abbr>PUT</abbr>.

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/actions/validate"
```

## Patching Updating Things &amp; Actions

You can update a thing or action using [PATCH semantics](https://en.wikipedia.org/wiki/Patch_verb) when you know its <abbr>UUID</abbr>. 

### Patching Things

#### body

```
[{
	"op": "replace",
	"path": "/schema/testString",
	"value": "NEW VALUE"
}]
```

#### request

```
$ curl -X PATCH -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/things"
```

### Patching Actions

#### body

```
[{
	"op": "replace",
	"path": "/schema/testString",
	"value": "NEW VALUE"
}]
```

#### request

```
$ curl -X PATCH -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/actions"
```

## Remove Things and Actions

_Soon online_

## Using GraphQL

<section class="help">
    GraphQL is currently being restructured and comprehensive documentation will be published asap.
</section>

To easily query Weaviate, it is the most easy to use GraphQL. You can learn more about what GraphQL is [here](http://graphql.org/).

The end-point for GraphQL is always the same.

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/graphql"
```

The body should contain the GraphQL query.

### List Things

```
listThings(first: X, offset: Y, class: Z) {
    things {
        ...
    }
    totalResults
}
```

### Actions

_Soon online_

### Keys

_Soon online_

## Complete <abbr>API</abbr> overview.

_Soon online_
