$(document).ready(function(){
  $("#dropdown").submit(function(event) {
    event.preventDefault();

    var animal = $('#select').val();

    if (animal === "platypus") {
      $('#' + animal).show();
      $('#platypus').siblings().hide();
    } else if (animal === "unicorn") {
      $('#unicorn').show();
      $('#unicorn').siblings().hide();
    } else if (animal === "liger") {
      $('#liger').show();
      $('#liger').siblings().hide();

    }
  });
});
