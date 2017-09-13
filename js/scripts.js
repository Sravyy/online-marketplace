$(document).ready(function(){
  $(".identity").submit(function(event){
    event.preventDefault();
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var street1Input = $("input#street1").val();
    var street2Input = $("input#street2").val();
    var zipcodeInput = $("input#zipcode").val();
    var phoneInput = $("input#phone").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".street1").text(street1Input);
    $(".street2").text(street2Input);
    $(".zipcode").text(zipcodeInput);
    $(".phone").text(phoneInput);

    $(".camera").show();
    $(".identity").hide();

  })

  $("#camera1").click(function(){
    $(".confirmation").show();
    $(".camera").hide();
    $("#camera").text("Sony DSCW830 20.1 MP Digital Camera with 2.7-Inch LCD (Silver)");
  })
  $("#camera2").click(function(){
    $(".confirmation").show();
    $(".camera").hide();
    $("#camera").text("Sony DSCW830/B 20.1 MP Digital Camera with 2.7-Inch LCD (Black)");
  })
  $("#camera3").click(function(){
    $(".confirmation").show();
    $(".camera").hide();
    $("#camera").text("Kodak PIXPRO Friendly Zoom FZ43 16 MP Digital Camera with 4X Optical Zoom and 2.7 LCD Screen (Black)");
  })
})
