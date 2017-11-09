//var objectPath = require("object-path");
Meteor.methods({
        autoCompleteValue:function (selectedList,collectionName,limit,primaryKey,key,textValue,matchCase,sort) {
        check(selectedList,Array);
        check(collectionName,String);
        check(limit,Number);
        check(primaryKey,String);//key name
        check(key,String);//key name
        check(textValue,String);
        check(matchCase,Object);
        check(sort,Object);
        matchCase = {};
        _.extend(matchCase,{[primaryKey]:{$in:selectedList  }});
        let aggregateQuery = [
            {   "$match":matchCase},
            {   "$limit":limit},
            {   "$sort":sort}
        ];
        let dataList = [];
        if(collectionName.split(".").length>1)
            dataList = global[collectionName.split(".")[0]][collectionName.split(".")[1]].aggregate(aggregateQuery);
        else
            dataList = global[collectionName].aggregate(aggregateQuery);
        return dataList;

    },
    autoCompleteSearch:function (selectedList,collectionName,limit,primaryKey,key,textValue,matchCase,sort) {
        check(selectedList,Array);
        check(collectionName,String);
        check(limit,Number);
        check(primaryKey,String);//key name
        check(key,String);//key name
        check(textValue,String);
        check(matchCase,Object);
        check(sort,Object);
        let primaryKeys = _.map(selectedList,function (list) {
           return list[primaryKey]
        });
        let regEx = new RegExp("^"+textValue, 'i');
        _.extend(matchCase,{[key]:regEx});
        _.extend(matchCase,{[primaryKey]:{$nin:primaryKeys  }});
        let aggregateQuery = [
            {   "$match":matchCase},
            {   "$limit":limit},
            {   "$sort":sort}
        ];
        let dataList = [];
        if(collectionName.split(".").length>1)
            dataList = global[collectionName.split(".")[0]][collectionName.split(".")[1]].aggregate(aggregateQuery);
        else
            dataList = global[collectionName].aggregate(aggregateQuery);
        return dataList;

    }

});

