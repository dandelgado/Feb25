 $(function () {
                   var total_comments=$('.a-comment').length;
                   console.log(total_comments);
                   var comments=document.getElementsByClassName("a-comment");
                   n=total_comments/4;
                   if(total_comments%4!=0){
                       n++;
                   }
                   var obj = $('#pagination').twbsPagination({
                       totalPages: n,
                       visiblePages: 2,
                       initiateStartPageClick:true,
                       previous:"<<",
                       next:">>",
                       onPageClick: function (event, page) {
                           $('.a-comment').each(function(i){
                                   comments[i].style.display="none";
                           });
                           $('.a-comment').each(function(i){
                               if(i>=(page-1)*4&&i<page*4){
                                   comments[i].style.display="block";}
                           });
                       }
                   });
               });