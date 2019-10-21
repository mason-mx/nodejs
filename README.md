# nodejs

## JSON Server

### Serve JSON data checking REQUEST URL

#### Providing memory based JSON data and Watching example.json

```
node index.js
```

#### Watching a separate JSON file

```
node index.js --watch package.json --port 2222
```

### Serve JSON data using express.route

#### Providing memory based JSON data

```
npm install
node server.js
```

#### RESTful API to update a profile

##### post_education

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

##### put_education_byindex

PUT/DELETE URL:

```
<ipaddr>:1111/myprofile/education/0
```

```
{"from":"2007-09","to":"2010-07","school":"Milford","level":"intermediate"}
```