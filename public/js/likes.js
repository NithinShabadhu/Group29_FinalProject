
    function updateLikes() {

    id = $('.LikeButton').attr('blogId');

    console.log(id);
    
    
    $.post('/Blogs/'+id+'/like',function (response,err) {
        
        console.log("Response=="+response);

        console.log("err=="+err)
        
        if(response.likeCount){

        $('.fa fa-thumbs-o-up').text(response.likeCount); 
        }
        
        else{

            alert('Please login to like the blog');
        
        }
    });

        
    
}
   