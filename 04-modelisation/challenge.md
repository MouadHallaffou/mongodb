# Challenge : Modélisation

1. Modélisez une base de données pour un blog :
   - posts (titre, contenu, auteur, date)
   - comments (contenu, auteur, date, postId)
   - users (nom, email)

```json
{
  "_id": ObjectId("..."),
  "title": "Mon premier article",
  "content": "Ceci est le contenu de l'article...",
  "author": {
    "_id": ObjectId("userId123"),
    "name": "Mouad",
    "email": "mouad@gmail.com"
  },
  "date": ISODate("2025-09-01T10:00:00Z"),
  "comments": [
    {
      "_id": ObjectId("..."),
      "content": "Très intéressant !",
      "author": {
        "_id": ObjectId("userId456"),
        "name": "Youssef",
        "email": "youssef@gmail.com"
      },
      "date": ISODate("2025-09-01T11:00:00Z")
    }
  ]
}

```

2. Proposez une version embedded et une version avec références.

```json
// Collection users
{
  "_id": ObjectId("userId123"),
  "name": "Mouad",
  "email": "mouad@gmail.com"
}

// Collection posts
{
  "_id": ObjectId("postId789"),
  "title": "Mon premier article",
  "content": "Ceci est le contenu de l'article...",
  "authorId": ObjectId("userId123"),
  "date": ISODate("2025-09-01T10:00:00Z")
}

// Collection comments
{
  "_id": ObjectId("commentId456"),
  "content": "Très intéressant !",
  "authorId": ObjectId("userId456"),
  "postId": ObjectId("postId789"),
  "date": ISODate("2025-09-01T11:00:00Z")
}
```
