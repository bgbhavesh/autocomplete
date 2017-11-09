{{#let catId = product.categoryId}}
                    {{>autoCompleteInput name="categoryId" title="Select Category" value="{{catId}}" primaryKey="_id" key="name" multi=false settings=settings}}
                {{/let}}

 autoCompleteSettings:function () {
        return {
            collectionName: "collections.productCategory",
            limit: 10,
            matchCase:{isActive:true},
        };
    }
