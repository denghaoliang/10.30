/*$(function(){
		
		function fn(){		
			var arr =[]
			var arr1=[]      //w
			var arr2=[]
			for(var i =0;i<aip.result.data.length;i++){
				var obj = {};     
				var obj1 ={};    //w
				var obj2 ={}; 
				obj.title = aip.result.data[i].title;
				obj1.thumbnail_pic_s=aip.result.data[i].thumbnail_pic_s  //w
				obj2.title = aip.result.data[i].url;
				obj.category = aip.result.data[i].category;
				
				obj.date = aip.result.data[i].date;
				obj.name = aip.result.data[i].author_name
				arr.push(obj)
				arr1.push(obj1)   //w
				arr2.push(obj2)
			}
			console.log(arr)

			
			
			var uls =$("#ul")
			for(var i=0;i<arr.length;i++){							
				var html='<li><div><h4>' + arr[i].title + '</h4></div></li>';    
				var ri  ='<div><img></div>'
				var divL=$("#ul>li:first-child>div").addClass("lee-left")   
				var lis =$("#ul>li")
				uls.prepend(html)
			}   var divL=$("#ul>li:first-child>div").addClass("lee-left")
				
			///////////左边

		var divR=$(".lee-left").after("<div></div>")  																								  
		var divLC =$("li>div:last-child")																							  
		divLC.addClass("lee-right");
		var Img =divLC.append("<img src=''>")   		;
		var aipre=aip.result.data.reverse();
//		console.log(aipre)
	 	
		for(var i=0;i<aip.result.data.length;i++){		   //添加图片
				
				$("#ul li").eq(i).find(".lee-right>img").attr("src",aip.result.data[i].thumbnail_pic_s)				
			}
	
		}
		
		
		
		
		
		fn()
		
		
		
		
	
		
	})*/
	
	$(function(){
		var one=$("#one")
	    var data=aip.result.data
	    console.log(data)
		$.each(data,function(i,v){
			var ass=$("<a></a>")
			ass.attr("href",data[i].url)
			one.append(ass)
			var divss=$("<div></div>")
			ass.append(divss)
			var hss=$("<h4></h4>")
			hss.html(data[i].title)
			hss.attr("title",data[i].title)
			divss.append(hss)
			var spanss=$("<span></span>")
			spanss.html(data[i].author_name)
			divss.append(spanss)
			var iss=$("<i></i>")
			iss.html(data[i].date)
			divss.append(iss)
			var imgss=$("<img/>")
			imgss.attr("src",data[i].thumbnail_pic_s)
			divss.append(imgss)
		})
		

		
})





