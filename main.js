$(document).ready(function(){
	
	$.ajax({

		url: "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=ec25b869c4904250aa497e44b6f0a1e9",
		success: function (response){
			let data = response.articles;
// to display content of the ajax call
console.log(data);

//for loop, that will loop for each articles
			for(var i = 0; i < data.length; i ++ ){

				//
				
				let title = data[i].title;
				let description = data[i].description;
				let img = data[i].urlToImage;
				let url = data[i].url;
				

				//loop
				let article = ` 

	

				<div class="article-box">	
				<img class="img" src="${img}">
					<h2 class="title">${title}</h2>
					<p>${description}</p>
					<a href="${url}" target="_blank">Read more</a>

					</div>

				`;
				$("body").append(article);
			}

		}

	});



});
