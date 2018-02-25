 $(function () {
                   var total_reviews=$('.a-review').length;
                   var reviews=document.getElementsByClassName("a-review");
                   n=total_reviews/6;
                   if(total_reviews%6!=0){
                       n++;
                   }
                   var obj = $('#pagination').twbsPagination({
                       totalPages: n,
                       visiblePages: 2,
                       initiateStartPageClick:true,
                       previous:"<<",
                       next:">>",
                       onPageClick: function (event, page) {
                           $('.a-review').each(function(i){
                                   reviews[i].style.display="none";
                           });
                           $('.a-review').each(function(i){
                               if(i>=(page-1)*6&&i<page*6){
                                   reviews[i].style.display="block";}
                           });
                       }
                   });
               });