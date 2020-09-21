var socket = io()

$(function(){
  
  var button1 = $('#b1')
  var button2 = $('#b2')
  var button3 = $('#b3')
  var button4 = $('#b4')
  var d1=$('#d1')
  var d2=$('#d2')
  var d3=$('#d3')
  
  
  url=window.location.href;
  button1.on("click",function () {
      
      alert('WELCOME TO RockOn '+$('#userInput').val())
      window.location.replace(url+"musicroom")
  })
  
  button2.on("click",function () {
      d1.show()
      d2.hide()
      d3.hide()
  })
  button3.on("click",function () {
    d1.hide()
    d2.show()
    d3.hide()
})
  button4.on("click",function () {
    d1.hide()
    d2.hide()
    d3.show()
})
// my improvised code
//
  $('#d1b1').on("click",function(){
    socket.emit('play',{id:1})
  
  })
  $('#d1b2').on("click",function(){
    socket.emit('play',{id:2})

 })
 $('#d1b3').on("click",function(){
  socket.emit('play',{id:3})
})
$('#d1b4').on("click",function(){
  socket.emit('play',{id:4})
})
//piano
$('#d2b1').on("click",function(){
  socket.emit('play',{id:5})

})
$('#d2b2').on("click",function(){
  socket.emit('play',{id:6})

})
$('#d2b3').on("click",function(){
socket.emit('play',{id:7})
})
$('#d2b4').on("click",function(){
socket.emit('play',{id:8})
})
//drums
$('#d3b1').on("click",function(){
  socket.emit('play',{id:9})

})
$('#d3b2').on("click",function(){
  socket.emit('play',{id:10 })

})

socket.on('play',function(data){
  var instrument=$('#a'+data.id)[0]
  instrument.play();
})

})


