---
title: Rhythm's gonna get you
---

For the past few lessons we have chatted about and worked with data, for this
project we will continue our journey into data and modeling a database. We are
starting a record label company and we a place to store our bands, albums and
songs. You will be creating a console app that stores our companies information
in a database.

## Objectives

- Practice working with SQL
- Practice working with ORMs (EF Core)

## Requirements

Create a console that allows a user to store and manage a companies bands,
albums, and songs.

You can use the template we have been using but you can also use the one we
talked about today. You can install it by using the following command:

```shell
 dotnet new --install SDG.templates.Console.Database::1.0.0
```

Also feel free to use the package
[we talked about during lecture](https://github.com/lechu445/ConsoleMenu) to
help with the menu system.

### Explorer Mode

- [ ] Create a database that stores Albums, Bands, and Songs. They should have
      at least the following properties, use your best judgement for types. (I
      have left off the Foreign keys intentionally)

  - [ ] Album
    - Id
    - Title
    - IsExplicit
    - ReleaseDate
  - [ ] Band
    - Id
    - Name
    - CountryOfOrigin
    - NumberOfMembers
    - Website
    - Style
    - IsSigned
    - PersonOfContact
    - ContactPhoneNumber
  - [ ] Song
    - Id
    - Title
    - Lyrics
    - Length
    - Genre
  - For the relationships, add keys are need to fullfil the following

    - [ ] 1 Album has many Songs
    - [ ] 1 Band has many Albums

  - [ ] Create an interface to let the user :

    - [ ] Sign a band (add a new band)
    - [ ] Produce and album (add a album, and add a few songs to that album)
    - [ ] Let go a band (update isSigned to false)
    - [ ] Resign a band (update isSigned to true)
    - [ ] View all albums for a band
    - [ ] View all the albums, ordered by ReleaseDate
    - [ ] View and Albums song
    - [ ] View All bands that signed
    - [ ] View all bands that are not signed

### Adventure Mode

- [ ] As you see, our data is not very normalized, Add the following
      relationships and tables
  - [ ] A song can have many genres
  - [ ] A band can have many styles
- [ ] Not only do you want to store band, as also band members, create a new
      table called `Musicians` give it a many to many relationship with a Band
- Add the following queries

  - [ ] View albums in a genre
  - [ ] View all members of a band

### Epic Mode

- [ ] Project structure will become more important in the next couple of weeks.
      Challenge yourself to have `ReadLine` and `WriteLine` only in your
      `Program.cs`
- [ ] (this is a big leap, but a good one)On monday we are starting to talk
      about APIs. Add integrations from [Last.fm API](https://www.last.fm/api).
      This API has a bunch of features. Go crazy, the sky is the limit. hint:
      use the
      [Httpclient](https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient?view=netcore-3.1)
      in C#

## Additional Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [SQL Notes](https://suncoast.io/handbook/curriculum/back-end/full-stack-i/lecture/sql/intro-to-sql/)
- [Join Notes](https://suncoast.io/handbook/curriculum/back-end/full-stack-i/lecture/sql/intro-to-joins/)

## Recommended Practice:

- For more practice, Hackerrank has a
  [SQL Track](https://www.hackerrank.com/domains/sql)
