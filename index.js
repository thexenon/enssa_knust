  $("#btn-signin").click(function(){
        var email = $("#inemail").val();
        var password = $("#inpassword").val();

        if (email != "" && password != ""){
            var result = firebase.auth().signInWithEmailAndPassword(email, password);
            result.catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message : " + errorMessage);
            });
        }else {
            window.alert("Please fill all fields.");
        }
  });

  $("#btn-signup").click(function(){
        var email = $("#upemail").val();
        var password = $("#uppassword").val();
        var cpassword = $("#upcpassword").val();

        if (email != "" && password != "" && cpassword != ""){
        if (password == cpassword){
                var result = firebase.auth().createUserWithEmailAndPassword(email, password);
            result.catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message : " + errorMessage);
            });
        } else {
            window.alert("Password does not match Confirmed Password");
        }
        }else {
            window.alert("Please fill all fields.");
        }
  });


  function switchView(view){
    $.get({
      url:view,
      cache:false,
    })
    .then(function(data){
      $("#container").html(data)
    });
  }

  $("#btn-resetPassword").click(function()
  {
    var auth = firebase.auth();
    var email = $("#fpass-email").val();
    if (email != ""){
      auth.sendPasswordResetEmail(email).then(function(){
        window.alert("Email has been sent to your mail, Please check and verify");
      })
      .catch(function(error)
      {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        window.alert("Message : " + errorMessage);
      });
    } else {
      window.alert("Please write your email first.");
    }
  });