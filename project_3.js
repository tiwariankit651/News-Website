console.log('Creating_News_Website');

let source='the-times-of-india';
let apiKey='c8b1b2f2394f49de8fb2f6eb964a0855';
//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create get request
const xhr =new XMLHttpRequest();
xhr.open('GET',`http://newsapi.org/v2/top-headlines?sources=${source}%20&apiKey=${apiKey}`,true);

//What to do When response is ready
xhr.onload = function(){
    if(this.status==200){
       let json=JSON.parse(this.responseText);
       let articles=json.articles;
       let newsHtml="";
      // console.log(articles);
      articles.forEach(function(element,index) {
          
       //console.log(articles[news]);
       //console.log(element,index);
           
            let news = `<div class="card">
            <div class="card-header" id="headinge${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                        aria-expanded="true" aria-controls="collapse${index}">
                       <b>Breaking News ${index+1}:</b> ${element["title"]}
                    </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                data-parent="#newsAccordion">
                <div class="card-body">
                ${element["description"]}
                <br><hr>
                ${element["content"]}.<a href="${element['url']}"target=_blank">Read more here</a>;
                </div>
            </div>
        </div>`;
      
         newsHtml += news;
      
         
    });

       
       newsAccordion.innerHTML =newsHtml;
    }
    else{
        console.log("Some error occured");
    }
}
xhr.send()