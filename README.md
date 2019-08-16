# nodejs

## Testing dataset for memory based json-server

### post_education

POST URL:

```
<ipaddr>:1111/profile/education
```

```
[{"from":"2007-09","to":"2010-07","school":"Takapuna","level":"intermediate"},{"from":"2010-09","to":"2013-07","school":"AU","level":"tertiary","degree":"Master"}]
```

or 

```
[{"from":"2007-09","to":"2010-07","school":"Takapuna","level":"intermediate"}]
```

### put_education_byindex

PUT URL:

```
<ipaddr>:1111/profile/education/0
```

```
{"from":"2007-09","to":"2010-07","school":"Milford","level":"intermediate"}
```