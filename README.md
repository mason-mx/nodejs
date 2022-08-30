# JSON File Server

## Bundle your Node app to a single executable

```
cd jsonfile-server
npm install -g pkg
pkg .
```

## Fetch data by these available URLs

```
<ipaddr>:1111/about
<ipaddr>:1111/memJSON
<ipaddr>:1111
<ipaddr>:1111/instrument
```

The first one is composed by pure HTML elements. The second one a JSON object. The third and fourth are JSON files.

# JSON Server

## Serve JSON data checking REQUEST URL

### Providing memory based JSON data and Watching example.json

```
cd json-server
node index.js
```

### Watching a separate JSON file

```
cd json-server
node index.js --watch package.json --port 2222
```

### Fetch data by these available URLs

```
<ipaddr>:1111/about
<ipaddr>:1111/memJSON
<ipaddr>:1111
```

## Serve JSON data using express.route

### Providing memory based JSON data

```
cd json-server
npm install
node server.js
```

### RESTful API to update a profile

#### post_education

POST/DELETE URL:

```
<ipaddr>:1111/myprofile/education
```

```
[{"from":"2007-09","to":"2010-07","school":"Takapuna","level":"intermediate"},{"from":"2010-09","to":"2013-07","school":"AU","level":"tertiary","degree":"Master"}]
```

or 

```
[{"from":"2007-09","to":"2010-07","school":"Takapuna","level":"intermediate"}]
```

#### put_education_by_index

PUT/DELETE URL:

```
<ipaddr>:1111/myprofile/education/0
```

```
{"from":"2007-09","to":"2010-07","school":"Milford","level":"intermediate"}
```

# RESTful API

## Serve JSON data using express.route and MongoDB

```
cd restful-apis
npm install
sudo service mongod start
node server.js
```

POST a task:

```
curl -X POST --data "name=Do the harlem shake" localhost:3000/tasks
```

DELETE a task:

```
curl -X DELETE localhost:3000/tasks/5dae5166a1dfb143491da796
```

PUT task/:id

```
curl -X PUT --data "status=completed" localhost:3000/tasks/5dae5166a1dfb143491da796
curl -X PUT --data "name=Do the Best harlem shake" localhost:3000/tasks/5dae5166a1dfb143491da796
```