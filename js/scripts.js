$().ready(function(){
    $("#submit_info").submit(function(event){
      event.preventDefault()
      var numberOne = $("input#number1").val()
      var numberTwo = $("input#number2").val()
      for (var result = 0; result <=numberOne; result += numberTwo)
      console.log(result)
    })

  })


// for (var number = 0; number <=50; number +=7)
// {alert(number)}
