$(function () {
   // 小屏图标
    $(".tubiao").click(function(){
        $(".xdh").slideToggle(200)
    });

    // 表单验证

    $(".form").validate({
        rules:{
            name:{
                required:true
            },
            email:{
                required:true
            },
            number:{
                required:true
            },
            neirong:{
                required:true
            }
            
        },

    })
    // $.validator.addMethod("name",function(value,element){
    //     // var tel = /^[a-zA-Z][a-z0-9A-Z_-]{2,16}$/;
    //     // return tel.test(value)||this.optional(element);
    // },"请输入正确的用户名")


    // 显示箭头
    var  jiantou=$(".dw")[0];
    var row=$(".row")[0];

    document.documentElement.scrollTop=1
    var obj=document.documentElement.scrollTop?
        document.documentElement:document.body;
    window.onscroll=function(){
        // if(obj.scrollTop)
        if(obj.scrollTop>row.offsetTop){
            jiantou.style.display="block"

        }else{
            jiantou.style.display="none"
        }
    }
    // 返回顶部
    jiantou.onclick=function(){
        animate(obj,{scrollTop:0},800)

    }

    // 点击跳转
    var scrool=$(".scrool");
    var jieshao=$(".jieshao")[0];
    var aa=$("a",jieshao);
    // alert(aa.length)

  for(var i=0;i<aa.length;i++){
      aa[i].name=i;
      aa[i].onclick=function(){
          animate(obj,{scrollTop:scrool[this.name].offsetTop},800)
      }

     }









})