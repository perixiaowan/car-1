$(function(){
    $("a").click(function(e){
        e.preventDefault();
    })

    $(".hover-shop").mousemove(function(){
        $(".hover-box .img01").show();
    });
    $(".hover-shop").mouseout(function(){
        $(".hover-box .img01").hide();
    })
    /*  定义个模板  用来页签之间的切换效果  开始 */
    $("ul[data-toggle='navchange']").find("li").click(function(e){
        e.preventDefault();
        if($(this).attr("data-target") != undefined){   //排除掉没有链接切换的 id
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            var listNav = $(this).attr("data-target");
            var listId = listNav.substr(1);
            if($("#"+listId)){
                $("#"+listId).show();
                $("#"+listId).siblings().hide();
            }
        }
    });
    /*  定义个模板  用来页签之间的切换效果  结束 */


    /*  视频 切换 */

    $("div[data-toggle='navchange']>div").click(function(){
        if($(this).attr("data-target") != undefined){   //排除掉没有链接切换的 id
            $(".img-bar>div").removeClass("active");
            $(this).addClass("active");
            var listNav = $(this).attr("data-target");
            var listId = listNav.substr(1);
            if($("#"+listId)){
                $(".pro-modal .carousel").hide();
                $("#"+listId).show();
            }
        }
    });



    /* 头部 导航二级菜单移入移出效果  开始 */
    var list =[["市政/环卫用车","环卫用车","环卫用车","环卫用车","环卫用车","环卫用车","洒水车","洒水车","洒水车","洒水车","市政/环卫用车","市政/环卫用车","市政/环卫用车","市政/环卫用车","市政/环卫用车","市政/环卫用车","市政/环卫用车","市政/环卫用车","市政/环卫用车","市政/环卫用车","市政/环卫用车","市政/环卫用车","市政/环卫用车","市政/环卫用车","洒水车","市政/环卫用车","洒水车","市政/环卫用车","洒水车","市政/环卫用车","洒水车","市政/环卫用车"],
        ["市政/环卫用车","环卫用车","环卫用车","环卫用车","环卫用车","环卫用车","洒水车","洒水车","环卫用车","洒水车"],
        ["市政/洒水车","市政/洒水车洒水车","洒水车","市政/洒水车洒水车","洒水车","市政/洒水车洒水车","洒水车","洒水车","洒水车","沙水车","市政/洒水车","市政/洒水车洒水车","洒水车","市政/洒水车洒水车","洒水车","市政/洒水车洒水车","洒水车","洒水车","洒水车","沙水车","市政/洒水车","市政/洒水车洒水车","洒水车","市政/洒水车洒水车","洒水车","市政/洒水车洒水车","洒水车","洒水车","洒水车","沙水车","市政/洒水车","市政/洒水车洒水车","洒水车","市政/洒水车洒水车","洒水车","市政/洒水车洒水车","洒水车","洒水车","洒水车","沙水车"],
        ["市政/环卫用车","市政/环卫用车","环卫用车","市政/环卫用车","环卫用车","环卫用车","市政/环卫用车","环卫用车","沙水车","沙水车"],
        ["市政/洒水车","洒水车","洒水车","洒水车","洒水车","洒水车","洒水车","洒水车","洒水车","洒水车"]];
    $("#index-nav").mousemove(function(){
        $(".list-navChild").show();
    });
    $("#index-nav li").each(function(){
        $(this).mousemove(function(){
            if($(this).attr("data-index")!=undefined){
                var index = $(this).attr("data-index");
                var title = $(this).children("label").html();
                $(".list-navChild").empty();
                $(".list-navChild").append("<h4>"+title+"</h4>");
                for(var k = 0; k<list[index].length;k++){
                    console.log(list[index][k]);
                    $(".list-navChild").append("<a href='#'>"+list[index][k]+"</a>");
                }
            }
        })
    })
    $("#index-nav").mouseout(function(){
        $(".list-navChild").hide();
    })
    $(".list-navChild").mousemove(function(){
        $(this).show();
    })
    $(".head-bg>div").mouseleave(function(){
        $(".list-navChild").hide();
    })
    /* 头部 导航二级菜单移入移出效果  结束 */

    /*  分页 样式 切换  */
    $("div[data-type='page']").each(function(){
        //得到所有需要分页效果的div
        var pageID = $(this).parent().attr("id");
        //并获取所在层级对应的ID
        $("#" + pageID + " li[data-page='page']").click(function(){
            //点击时，单独控制所有ID下的分页，避免相互影响。
            $("#" + pageID + " li[data-page='page']").removeClass("active");
            $(this).addClass("active");
        })
    })

    $(".black-top").click(function(){
        document.documentElement.scrollTop = document.body.scrollTop =0;    //点击Black  让页面回到顶部
    })
    $("#blockTop").click(function(){
        document.documentElement.scrollTop = document.body.scrollTop =0;    //点击Black  让页面回到顶部
    })


    //洒水车首页  缩约图效果  开始
    $(".ssCar-bg .img-list ul li").each(function(){
        $(this).mouseenter(function(){
            var $this = $(this);
            var t = setTimeout(function(){
                $(".ssCar-bg .img-bg img").animate({opacity:'0.8'},200);
               // $(".ssCar-bg .img-title").animate({opacity:'0.6'},200);
                $(".ssCar-bg .img-list li").removeClass("active");
                $this.addClass("active");
                var title = $this.children("a").attr("title");
                var imgBg = $this.children("a").attr("data-pic");
                $(".ssCar-bg .img-title").html(title);
                $(".ssCar-bg .img-bg img").attr("src",imgBg);
                $(".ssCar-bg .img-bg img").animate({opacity:'0.9'},600);
                //$(".ssCar-bg .img-title").animate({opacity:'1'},1000);
            },300);
        })
    });

    /*  自动轮播效果  */
    /*
    *
    * var t = $(".ssCar-bg .img-list li.active").attr("index");   //获取当前那个li元素为激活状态，得到索引值。
     var indexmax = parseInt($(this).siblings("ul").children("li:last-child").attr("index"));    //li的最大索引值
     var count = 1;
     setInterval(function(){
     t++;
     $(".ssCar-bg .img-list li").removeClass("active");
     $(".ssCar-bg li[index="+t+"]").addClass("active");
     $(".ssCar-bg .img-bg img").animate({opacity:'0.8'},200);
     $(".ssCar-bg .img-title").html($(".ssCar-bg li[index="+t+"]").children("a").attr("title"));
     $(".ssCar-bg .img-bg img").attr("src",$(".ssCar-bg li[index="+t+"]").children("a").attr("data-pic"));
     $(".ssCar-bg .img-bg img").animate({opacity:'0.9'},600);
     if(t*count > 6){

     }
     },2000);*/



    var count = 1;
    $(".ssCar-bg .icon-right").click(function(){
        var indexmax = parseInt($(this).siblings("ul").children("li:last-child").attr("index"));    //li的最大索引值
        var index = parseInt($(".ssCar-bg li[data-show='show']:last").attr("index"))+1 ;    //获取每一组的最后一个li  的index
        if(index>=indexmax){
            console.log("最后一张了");
            index=0;
        }
        

        $(".ssCar-bg .img-list li").hide();
        $(".ssCar-bg .img-list li").attr("data-show","hide");
        for(var i = index;i<index+6;i++){
            console.log(i);
            $(".ssCar-bg li[index="+i+"]").show();
            $(".ssCar-bg li[index="+i+"]").attr("data-show","show");
            if($(".ssCar-bg li[index="+i+"]").attr("index")==undefined){
                break;
            }
        }
        index = i;
    });
    $(".ssCar-bg .icon-left").click(function(){
        var indexmax = parseInt($(this).siblings("ul").children("li:last-child").attr("index"));
        var index = parseInt($(".ssCar-bg li[data-show='show']:first").attr("index"))-1;
        if(index<=0){
            console.log("第一张");
            index=indexmax;
        }
        $(".ssCar-bg .img-list li").hide();
        $(".ssCar-bg .img-list li").attr("data-show","hide");
        for(var i = index;i>index-6;i--){
            console.log(i);
            $(".ssCar-bg li[index="+i+"]").show();
            $(".ssCar-bg li[index="+i+"]").attr("data-show","show");
            if($(".ssCar-bg li[index="+i+"]").attr("index")==undefined){
                break;
            }
        }
        index = i;
    })
    //洒水车首页  缩约图效果  结束


    //配件产品内页  换图片效果
    $("#list-imgPJ .icon>div").mouseenter(function(){
        $("#list-imgPJ .icon>div").removeClass("active");
        $(this).addClass("active");
        var imgsrc = $(this).attr("data-pic");
        $("#list-imgPJ .imgBg img").attr("src",imgsrc);
    })


    //固定底部 切换
    $(".fixedBM .div-group>div").click(function(){
        if($(this).attr("data-toggle") != undefined){
            var fixedID = $(this).attr("data-toggle");
            $(".fixedBM .div-group>div").removeClass("active");
            $(this).addClass("active");
            $(".fixed-change >div").hide();
            $("#" + fixedID).show();
        }
    });

    //咨询栏目页面  点击切换 轮播图
    $("#ZXnav-change >li").click(function(){
        $("#ZXnav-change >li").removeClass("active");
        $(this).addClass("active");
        var carouselID = $(this).attr("data-toggle");
        $(".ZXcarousel").hide();
        $("#" + carouselID).show();
    })

    //点击换一批图片 效果
    var imgLength = 18;   //假如后台有18张图片
    var page = 0;
    $("#refIcon").click(function(){
        $("#refImgList").empty();
        var strImg = "";
        var imgSize = 6;   //每次换6张图片
        for(var i = page*imgSize;i<(page+1)*imgSize;i++){
            strImg += '<div class="img-span"><img src="images/sd-index03.png" alt=""><span>东风天龙小三轴国四随车吊工作图</span></div>';
            if(i>=18){
                console.log("到达最后一组图片了");
                page = 0;
                //取第一组的图片
            }
        }
        $("#refImgList").append(strImg);
        page++;
    })
})