var searchxml = null;
var searchdata = [];
$.ajax({
    method: 'GET',
    url: searchxml_url,
    data: {},
    dataType: "text",// mdui.jq does not support xml
    success: function (response) {
        searchxml = $(response);
        searchdata = searchxml.children("entry").map(function () {
            return {
                title: $(this).children("title").text().toLowerCase(),
                url: $(this).children("url").text(),
                content: $(this).children("content").text().toLowerCase().replace("\n","").replace("]]>","").replace(/<[^>]+>/g, '').trim(),
                categories: $(this).children("categories").children("category").map(function () {return $(this).text().trim().toLowerCase()}).get(),
                tags: $(this).children("tags").children("tag").map(function () {return $(this).text().trim().toLowerCase()}).get()
            }
        }).get()
    }
});
function search(keywords){
    var result=[];
    var appearKeywordTimes={};
    for(var i=0;i<keywords.length;i++){
        keywords[i]=keywords[i].toLowerCase().replace(/<[^>]+>/g, '');
    }
    keywords.forEach((key)=>{
        searchdata.forEach((data)=>{
            if(data.title.includes(key)||data.content.includes(key)||data.categories.includes(key)||data.tags.includes(key)){
                appearKeywordTimes[data.url]?appearKeywordTimes[data.url]++:appearKeywordTimes[data.url]=1;
                if(appearKeywordTimes[data.url]==1)result.push(JSON.parse(JSON.stringify(data)));
            }
        })
    });
    result.forEach((r)=>{
        // first occur
        let first_occur_title=Infinity;
        let first_occur_content=Infinity;
        keywords.forEach((key)=>{
            if(r.title.includes(key))first_occur_title=Math.min(first_occur_title,r.title.indexOf(key));
            if(r.content.includes(key))first_occur_content=Math.min(first_occur_content,r.content.indexOf(key));
        });
        if(first_occur_title==Infinity)first_occur_title=0;
        if(first_occur_content==Infinity)first_occur_content=0;
        let start_first_occur_title=first_occur_title-25;
        let start_first_occur_content=first_occur_content-25;
        if(start_first_occur_title<0)start_first_occur_title=0;
        if(start_first_occur_content<0)start_first_occur_content=0;
        r.title=r.title.substring(start_first_occur_title,start_first_occur_title+95);
        r.content=r.content.substring(start_first_occur_content,start_first_occur_content+95);
    })
    result.sort((a,b)=>appearKeywordTimes[b.url]-appearKeywordTimes[a.url]);
    return result;
}
function highlightSearch(str,keywords,className="hlkw"){
    keywords.forEach((key)=>{
        str=str.replace(new RegExp(key,'g'),`<span class="${className}">${key}</span>`);
        });
    return str;
}