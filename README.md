# Summary
I considered doing this excercise in a simpler method using in-memory storage and perhaps some flat-file storage, but decided in the end that since I would never write an API using that approach I would use my go-to base API setup. This basic API has been the cornerstone of every production API I've built from scratch going as far back as Spire Digital and as recently as the late-summer of 2024. The actual logic of this application is very simple. 

In the past three years I have built three APIs with this basic sutructure, although two of them had GraphQL (as well as REST) interfaces so the file structure relfected the Resolver/Typedef naming typical to that pattern. 

Utilizing PostgreSQL also made detecting and rejecting duplicates simpler and more robust. All of these APIs that use PostgreSQL also include Sequelize. I like to use an ORM for enhanced modeling, migration support, abstract query language and database portability. Sequelize also has some tools for conducting inquries in multiple, separate operations that can improve performance on complex joins. 

Stubbed in are Passport for authentication and jest for testing. Due to the time constraints of this build only the Passport user authentication (/login) is active. Nothing has been added for generating tokens, password reset, etc. 

There is one Jest test currently implemented that checks the login function for a success (200) response. 

This simple API took about 4 hours to complete over two days. 

# Design Criteria with Responses

* You can assume that the load of the of the requests is about 1/sec. Bonus points would be if your design can support loads that are several orders of magnitudes larger than that.

*Initial tests conducted using Postman showed that processing a tweet took about 60ms if the tweet was unique and successfully added, and about 45ms if it was a duplicate. Repeat requests that did not update the DB processed in about 10 - 12ms. The first test of bash-scripted CURL requests processed seven tweets and a request for the list of top tweets in well under one second.*


* The list of URLs will be provided through a set of `curl` calls. Please use the attached `tweets.sh` script to simulate those requests while you develop. Feel free to test with other similar requests, `tweets.sh` is just a start.

*I plan to up the volume to determine the performance at higher load and will update this document with the results.
Update: Have tested with 30 tweet posts and 5 hashtag GET requests and still getting sub-second reponse time to the lot.*

* Tweets might repeat themselves, and as any good engineering system, we would like to avoid processing the same tweet over and over again. The algorithm doesn't need to be exact and it can happen in memory.

*I utilized PostgreSQL 'unique' constraints to facilitate the rejection of duplicate tweets. It's not very refined in this simple application but quickly rejects any tweet that is the same as a previous one. You can see a summary of the results of the bash testing in the ```log.txt``` file in the root directory.*

* Bonus points if the system is durable, restarting the service would still keep the data loaded up to that point.

*Using PostgreSQL as a permanent data store ensures durability over system restarts.*

* Bonus points also if the system supported a very large the cardinality of the hashtags, where the naive calculation of all the top hashtags at request-time would not be quick enough.

*PostgreSQL should support a very high cardinatlity of hashtags, providing access time within specs with the addition of some indexing on the hastags table. I addded another table (currently unsued) as an example of how we might de-normalize for performce in retreiving trending hashtags.*

* The deliverable should contain very simple instructions on how to run the application. Instructions how to run a test to verify the results is also acceptable.



# Instalation and Usage
NOTE: This version requires Node.js and PostgreSQL running locally. There may be a Docker deployed version in a later version. 

## Github repo: ```https://github.com/RGerboth/hashtag-tracker```

1. Install Node.js, most recent version recommended.
2. Install PostgreSQL and create a new database with a name of your choosing. Start PostgreSQL. 
3. Clone the repo to your local device. (```git@github.com:RGerboth/hashtag-tracker.git```)
4. CD into the cloned repo directory.
5. Run ```npm install```
6. Update your ```/config/config.js``` settings to point to your local PostgreSQL database instance. 
7. Run the database migration ```bash migrate.sh```. This will create all the tables needed for this application. 
8. To start: 
* To start the server in Dev mode with nodemon (auto restart on file save)
```npm run dev```

* To start the server with auto restart
```npm start```

* To start the server with VSCode Debug mode, a startup script is provided and can be launched with the 'Run and Debug' command.
9. See ```tweets.sh```for CURLrequest format and endpoints. 

# Twitter Trending Hashtags

## Programming Assignment

### Introduction

This task involves you developing a very simple application which generates a list of the most popular trending hashtags.

The application should have two REST endpoints that you need to develop. The first endpoint will receive a series of tweet-like requests. The second endpoint will return a list of the top 25 hashtags in descending order.

Both endpoints should return as quickly as possible. It's ok and probably a good idea to process data in the background.

Feel free to use any framework NodeJS (our preference) or Python/Java framework you want.


### API Specs

* Create Tweet

**POST /tweet**

```json
{
    "tweet": "<tweet>"
}
```

* Trending Hashtags

**GET /trending-hashtags**

```json

"hashtags" : ["<hashtag1>", "<hashtag2>", "...", "<hashtag25>"]
```

### Technical Details

* You can assume that the load of the of the requests is about 1/sec. Bonus points would be if your design can support loads that are several orders of magnitudes larger than that.

* The list of URLs will be provided through a set of `curl` calls. Please use the attached `tweets.sh` script to simulate those requests while you develop. Feel free to test with other similar requests, `tweets.sh` is just a start.

* Tweets might repeat themselves, and as any good engineering system, we would like to avoid processing the same tweet over and over again. The algorithm doesn't need to be exact and it can happen in memory.

* Bonus points if the system is durable, restarting the service would still keep the data loaded up to that point.

* Bonus points also if the system supported a very large the cardinality of the hashtags, where the naive calculation of all the top hashtags at request-time would not be quick enough.

* The deliverable should contain very simple instructions on how to run the application. Instructions how to run a test to verify the results is also acceptable.


### Assignment Review Details

This assignment is a test of your systems engineering skills as well as your coding skills. So while we would like to see clean and organized code, it is also important that the system is built with the right components and you will be able to explain every design decision that you have made building this system. We are interested in knowing how we an take this demo and become a enterprise-grade production-ready application.

# FAQ

* Should the hashtag score used for sorting be precise or approximate?

Approximate is acceptable.




programming-assignment.md
Displaying tweets.sh. lauren@lifeblue.com