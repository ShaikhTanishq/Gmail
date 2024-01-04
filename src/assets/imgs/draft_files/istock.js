page_size=18;
if($country="RU"){
    page_size=36;
}
$.ajax({
    url: "https://api.gettyimages.com/v3/search/images/creative",
    data: { sort_order: "most_popular", graphical_styles: "illustration,vector", exclude_nudity: "true", orientations: "square", page_size: page_size, page: pag, fields: "summary_set,referral_destinations", phrase: filtro || "" },
    headers: { "Api-Key": "sc33cbrwne69k3r4m62uqxq3", "Accept-Language": idioma },
    success: function (o) {
        if(o.images.length>0){    
            
            if(o.images.length<=14  ){
                $("#istockphoto-placeholder").removeClass("istock-big-container").addClass("istock-container");  
            }
            $("#istockphoto-placeholder").load("pintaistock.php", { data: JSON.stringify(o) })
        }else{
            $("#istockphoto-placeholder").removeClass("istock-big-container").addClass("istock-container");  
            $("#istockphoto-placeholder").load("istock_banner.html")
            $("#istockphoto-placeholder").css("background-color","#ffffff")
            $("#istockphoto-placeholder").css("height","260px")

        }                                     
    },
});
