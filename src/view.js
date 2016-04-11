

 //      $("#tip").on("click", function(){
 // $.toast("终于弹出来了！！！！哈哈哈哈哈")
 //      })

      //document.onclick，从这点就能看出，这个示例把事件委托放到了document上。
      document.onclick = function(event){
          //IE doesn't pass in the event object
          event = event || window.event;
          //IE uses srcElement as the target
          var target = event.target || event.srcElement;

          if (target.id == 'tip') {
              $.toast("终于弹出来了！！！！哈哈哈哈哈")
          }
      };
