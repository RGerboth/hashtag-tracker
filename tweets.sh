#!/bin/bash

SECONDS=0
echo Adding Tweets
curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "Today is the 30 year anniversary of UNLV winning the national championship. Vegas was still a small town back then and as a kid growing up there nothing was bigger than the Runnin'\'' Rebels. Still think this is the best college basketball team ever. #UNLV #Baskeball"
}'

echo -e "/nNext Tweet/n"

 curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe #mamba"
}'
echo -e "/nNext Tweet/n"

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe #mamba"
}'
echo -e "/nNext Tweet/n"

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe #mamba"
}'
echo -e "/nNext Tweet/n"


curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data-raw '{
    "tweet": "Kobe Bryant, Tim Duncan and Kevin Garnett are going to be inducted into the Naismith Basketball @Hoophall class of 2020, with the formal announcement coming Saturday, per @ShamsCharania #hoophall #basketball"
}'
echo -e "/nNext Tweet/n"


curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "Greatness coming soonZipper-mouth faceDouble exclamation mark #unsigned #classof2021 #basketball"
}'
echo -e "/nNext Tweet/n"

curl --location --request GET 'http://localhost:8080/api/trending-hashtags' \
--header 'Content-Type: application/json' \
--data '{
    "text": "This is a test too."
}'

echo -e "/n"
ELAPSED="Completed in: $((SECONDS / 3600))hrs $(((SECONDS / 60) % 60))min $((SECONDS % 60))sec"
echo $ELAPSED