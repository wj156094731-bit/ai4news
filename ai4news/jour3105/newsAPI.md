https://newsapi.org/

Documentation
News API is a simple HTTP REST API for searching and retrieving live articles from all over the web. It can help you answer questions like:

What top stories is TechCrunch running right now?
What new articles were published about the next iPhone today?
Has my company or product been mentioned or reviewed by any blogs recently?
You can search for articles with any combination of the following criteria:

Keyword or phrase. Eg: find all articles containing the word 'Microsoft'.
Date published. Eg: find all articles published yesterday.
Source domain name. Eg: find all articles published on thenextweb.com.
Language. Eg: find all articles written in English.
You can sort the results in the following orders:

Date published
Relevancy to search keyword
Popularity of source
You need an API key to use the API - this is a unique key that identifies your requests. They're free while you're in development.

Everything /v2/everything
Search through millions of articles from over 150,000 large and small news sources and blogs.

This endpoint suits article discovery and analysis.

Request parameters
apiKey
required
Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.

q
Keywords or phrases to search for in the article title and body.

Advanced search is supported here:

Surround phrases with quotes (") for exact match.
Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
Prepend words that must not appear with a - symbol. Eg: -bitcoin
Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
The complete value for q must be URL-encoded. Max length: 500 chars.

searchIn
The fields to restrict your q search to.

The possible options are:

title
description
content
Multiple options can be specified by separating them with a comma, for example: title,content.

This parameter is useful if you have an edge case where searching all the fields is not giving the desired outcome, but generally you should not need to set this.

Default: all fields are searched.

sources
A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index.

domains
A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.

excludeDomains
A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results.

from
A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2025-10-24 or 2025-10-24T22:53:17)

Default: the oldest according to your plan.

to
A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2025-10-24 or 2025-10-24T22:53:17)

Default: the newest according to your plan.

language
The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ardeenesfrheitnlnoptrusvudzh.

Default: all languages returned.

sortBy
The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
relevancy = articles more closely related to q come first.
popularity = articles from popular sources and publishers come first.
publishedAt = newest articles come first.

Default: publishedAt

pageSize
int
The number of results to return per page.

Default: 100. Maximum: 100.

page
int
Use this to page through the results.

Default: 1.

Response object
status
string
If the request was successful or not. Options: ok, error. In the case of error a code and message property will be populated.

totalResults
int
The total number of results available for your request. Only a limited number are shown at a time though, so use the page parameter in your requests to page through them.

articles
array[article]
The results of the request.

source
object
The identifier id and a display name name for the source this article came from.

author
string
The author of the article

title
string
The headline or title of the article.

description
string
A description or snippet from the article.

url
string
The direct URL to the article.

urlToImage
string
The URL to a relevant image for the article.

publishedAt
string
The date and time that the article was published, in UTC (+000)

content
string
The unformatted content of the article, where available. This is truncated to 200 chars.

Top headlines /v2/top-headlines
This endpoint provides live top and breaking headlines for a country, specific category in a country, single source, or multiple sources. You can also search with keywords. Articles are sorted by the earliest date published first.

This endpoint is great for retrieving headlines for use with news tickers or similar.

Request parameters
apiKey
required
Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.

country
The 2-letter ISO 3166-1 code of the country you want to get headlines for. Possible options: us. Note: you can't mix this param with the sources param.

category
The category you want to get headlines for. Possible options: businessentertainmentgeneralhealthsciencesportstechnology. Note: you can't mix this param with the sources param.

sources
A comma-seperated string of identifiers for the news sources or blogs you want headlines from. Use the /top-headlines/sources endpoint to locate these programmatically or look at the sources index. Note: you can't mix this param with the country or category params.

q
Keywords or a phrase to search for.

pageSize
int
The number of results to return per page (request). 20 is the default, 100 is the maximum.

page
int
Use this to page through the results if the total results found is greater than the page size.

Response object
status
string
If the request was successful or not. Options: ok, error. In the case of error a code and message property will be populated.

totalResults
int
The total number of results available for your request.

articles
array[article]
The results of the request.

source
object
The identifier id and a display name name for the source this article came from.

author
string
The author of the article

title
string
The headline or title of the article.

description
string
A description or snippet from the article.

url
string
The direct URL to the article.

urlToImage
string
The URL to a relevant image for the article.

publishedAt
string
The date and time that the article was published, in UTC (+000)

content
string
The unformatted content of the article, where available. This is truncated to 200 chars.

Sources /v2/top-headlines/sources
This endpoint returns the subset of news publishers that top headlines (/v2/top-headlines) are available from. It's mainly a convenience endpoint that you can use to keep track of the publishers available on the API, and you can pipe it straight through to your users.

Request parameters
apiKey
required
Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.

category
Find sources that display news of this category. Possible options: businessentertainmentgeneralhealthsciencesportstechnology. Default: all categories.

language
Find sources that display news in a specific language. Possible options: ardeenesfrheitnlnoptrusvudzh. Default: all languages.

country
Find sources that display news in a specific country. Possible options: aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza. Default: all countries.

Response object
status
string
If the request was successful or not. Options: ok, error. In the case of error a code and message property will be populated.

sources
array[source]
The results of the request.

id
string
The identifier of the news source. You can use this with our other endpoints.

name
string
The name of the news source

description
string
A description of the news source

url
string
The URL of the homepage.

category
string
The type of news to expect from this news source.

language
string
The language that this news source writes in.

country
string
The country this news source is based in (and primarily writes about).
