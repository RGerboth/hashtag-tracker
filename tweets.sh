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

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "2 - Today is the 30 year anniversary of UNLV winning the national championship. Vegas was still a small town back then and as a kid growing up there nothing was bigger than the Runnin'\'' Rebels. Still think this is the best college basketball team ever. #1UNLV #1Baskeball"
}'

echo -e "/nNext Tweet/n"

 curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "2 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #1basketball #1kobe #1mamba"
}'
echo -e "/nNext Tweet/n"

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "2 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #1basketball #1kobe #1mamba"
}'
echo -e "/nNext Tweet/n"

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "2 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #1basketball #1kobe #1mamba"
}'
echo -e "/nNext Tweet/n"


curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data-raw '{
    "tweet": "2 - Kobe Bryant, Tim Duncan and Kevin Garnett are going to be inducted into the Naismith Basketball @Hoophall class of 2020, with the formal announcement coming Saturday, per @ShamsCharania #1hoophall #1basketball"
}'
echo -e "/nNext Tweet/n"


curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "2 - Greatness coming soonZipper-mouth faceDouble exclamation mark #1unsigned #1classof2021 #1basketball"
}'
echo -e "/nNext Tweet/n"

curl --location --request GET 'http://localhost:8080/api/trending-hashtags' \
--header 'Content-Type: application/json' \
--data '{
    "text": "This is a test too."
}'

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "3 - Today is the 30 year anniversary of UNLV winning the national championship. Vegas was still a small town back then and as a kid growing up there nothing was bigger than the Runnin'\'' Rebels. Still think this is the best college basketball team ever. #UNLV #Baskeball"
}'

echo -e "/nNext Tweet/n"

 curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "3 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe #mamba"
}'
echo -e "/nNext Tweet/n"

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "3 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe #mamba"
}'
echo -e "/nNext Tweet/n"

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "3 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe #mamba"
}'
echo -e "/nNext Tweet/n"


curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data-raw '{
    "tweet": "3 - Kobe Bryant, Tim Duncan and Kevin Garnett are going to be inducted into the Naismith Basketball @Hoophall class of 2020, with the formal announcement coming Saturday, per @ShamsCharania #hoophall #basketball"
}'
echo -e "/nNext Tweet/n"


curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "3 - Greatness coming soonZipper-mouth faceDouble exclamation mark #2unsigned #2classof2021 #2basketball"
}'
echo -e "/nNext Tweet/n"

curl --location --request GET 'http://localhost:8080/api/trending-hashtags' \
--header 'Content-Type: application/json' \
--data '{
    "text": "This is a test too."
}'

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "4 - Today is the 30 year anniversary of UNLV winning the national championship. Vegas was still a small town back then and as a kid growing up there nothing was bigger than the Runnin'\'' Rebels. Still think this is the best college basketball team ever. #3UNLV #3Baskeball"
}'

echo -e "/nNext Tweet/n"

 curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "4 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe #mamba"
}'
echo -e "/nNext Tweet/n"

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "4 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe"
}'
echo -e "/nNext Tweet/n"

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "4 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe"
}'
echo -e "/nNext Tweet/n"


curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data-raw '{
    "tweet": "4 - Kobe Bryant, Tim Duncan and Kevin Garnett are going to be inducted into the Naismith Basketball @Hoophall class of 2020, with the formal announcement coming Saturday, per @ShamsCharania #hoophall #basketball #hashtag"
}'
echo -e "/nNext Tweet/n"


curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "4 - Greatness coming soonZipper-mouth faceDouble exclamation mark #unsigned #classof2021 #basketball"
}'
echo -e "/nNext Tweet/n"

curl --location --request GET 'http://localhost:8080/api/trending-hashtags' \
--header 'Content-Type: application/json' \
--data '{
    "text": "This is a test too."
}'


curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "5 - Today is the 30 year anniversary of UNLV winning the national championship. Vegas was still a small town back then and as a kid growing up there nothing was bigger than the Runnin'\'' Rebels. Still think this is the best college basketball team ever. #3UNLV #3Baskeball"
}'

echo -e "/nNext Tweet/n"

 curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "5 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe #mamba #thisisatest"
}'
echo -e "/nNext Tweet/n"

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "5 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe #thisisatest"
}'
echo -e "/nNext Tweet/n"

curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "5 - Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it'\''s definitely the peak of his NBA career. #basketball #kobe"
}'
echo -e "/nNext Tweet/n"


curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data-raw '{
    "tweet": "5 - Kobe Bryant, Tim Duncan and Kevin Garnett are going to be inducted into the Naismith Basketball @Hoophall class of 2020, with the formal announcement coming Saturday, per @ShamsCharania #hoophall #basketball #hashtag"
}'
echo -e "/nNext Tweet/n"


curl --location 'http://localhost:8080/api/tweet' \
--header 'Content-Type: application/json' \
--data '{
    "tweet": "5 - Greatness coming soonZipper-mouth faceDouble exclamation mark #unsigned #classof2021 #basketball"
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