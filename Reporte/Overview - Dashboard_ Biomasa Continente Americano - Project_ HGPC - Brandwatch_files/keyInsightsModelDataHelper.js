define(["jquery","underscore","moment","src/Workbench"],function($,_,moment,Workbench){"use strict";function buildTotalMentions(currentTotalMentionsResponse,previousTotalMentionsResponse){return{current:currentTotalMentionsResponse.mentionsCount,previous:previousTotalMentionsResponse.mentionsCount}}function buildTopStories(topStoriesResponse){return topStoriesResponse.results}function buildTrendingTopics(trendingTopicsResponse){if(!trendingTopicsResponse){return[]}return[].concat(trendingTopicsResponse.topics).map(function(topic){return topic.label})}function buildTopHashtags(topHashtagsResponse){return topHashtagsResponse.results}function buildUniqueAuthors(currentUniqueAuthorsResponse,previousUniqueAuthorsResponse){function calculateAuthorsCount(authorsResponse){return[].concat(authorsResponse.results).reduce(function(count,month){[].concat(month.values).forEach(function(query){count+=query.value});return count},0)}return{current:calculateAuthorsCount(currentUniqueAuthorsResponse),previous:calculateAuthorsCount(previousUniqueAuthorsResponse)}}function buildUniqueImages(currentUniqueImagesResponse,previousUniqueImagesResponse){return{current:currentUniqueImagesResponse.resultsTotal,previous:previousUniqueImagesResponse.resultsTotal}}function makeAjaxRequest(path,queryData){var baseUrl=Workbench.buildApiUrl("/projects/{projectId}/");var url=baseUrl+path;return $.ajax(url,{data:queryData})}function getPreviousPeriod(queryData){var previousPeriod={};var minutesDiff=moment(queryData.endDate).diff(queryData.startDate,"minutes");previousPeriod.endDate=queryData.startDate;previousPeriod.startDate=moment.utc(queryData.startDate).subtract(minutesDiff,"minutes").format();return previousPeriod}function mapToPreviousPeriod(currentPeriodQueryData){var previousPeriod=getPreviousPeriod(currentPeriodQueryData);return _.extend({},currentPeriodQueryData,previousPeriod)}return{buildTotalMentions:buildTotalMentions,buildTopStories:buildTopStories,buildTrendingTopics:buildTrendingTopics,buildUniqueAuthors:buildUniqueAuthors,buildUniqueImages:buildUniqueImages,buildTopHashtags:buildTopHashtags,makeAjaxRequest:makeAjaxRequest,mapToPreviousPeriod:mapToPreviousPeriod}});