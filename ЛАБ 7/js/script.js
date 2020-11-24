let i = 0;

$("button:last").on("click", function () {
  let t = confirm("Очистить форму?");
  if (t) {
    form.textarea1.value = "";
    form.textarea2.value = "";
    location.href = location.href;
  }
});



$("button:eq(1)").on("click", function () {
  $.getScript("../js/localScript.js", function () {
    alert("Локальный скрипт выполнен");
  });
});





$("button:first").on("click", function () {
  if (i == 0) {
    $.get("../info.xml", function (xml) {
      $(document).ajaxComplete(function () {
        let x = xml.getElementsByTagName("Option");
        let size = x[0].getElementsByTagName("Radio")[0].childNodes[0]
          .nodeValue;

        $("#textarea1")
          .text(
            x[0].getElementsByTagName("Textarea1")[0].childNodes[0].nodeValue
          )
          .css({
            color: `${
              x[0].getElementsByTagName("Select")[0].childNodes[0].nodeValue
            }`,
            "font-size": `${size}`,
          });

        $("#textarea2")
          .text(
            x[0].getElementsByTagName("Textarea2")[0].childNodes[0].nodeValue
          )
          .css({
            color: `${
              x[0].getElementsByTagName("Select")[0].childNodes[0].nodeValue
            }`,
            "font-size": `${size}`,
          });
        $("#color").val(
          x[0].getElementsByTagName("Select")[0].childNodes[0].nodeValue
        );
        $(`input[value = '${size}']`).prop("checked", true);
      });
      $(document).ajaxStart(function () {
        alert("Начало AJAX запроса");
      });
      $(document).ajaxSend(function () {
        alert("Отправка запроса");
      });
      $(document).ajaxSuccess(function () {
        alert("Запрос успешно выполнен");
      });
      $(document).ajaxError(function () {
        alert("Ошибка! " + xml.statusText);
      });
      $(document).ajaxStop(function () {
        alert("Ajax запрос завершен");
      });
    });
  }
  i++;
});

/*$("button:first").on("click", function () {
  $.ajax({
    type: "POST",
    url: "../info.xml",
    dataType: "xml",
    contentType: "application/xml",


    send: function(res){
      alert("ajaxSend")
    },

    success: function (res) {
      var x = res.getElementsByTagName("Option");
      for (i = 0; i < x.length; i++) {
        alert(x[i].getElementsByTagName("Select")[0].childNodes[0].nodeValue);
        alert(x[i].getElementsByTagName("Radio")[0].childNodes[0].nodeValue);
      }
    },

    error: function (res) {
      alert("Ошибка! " + res.statusText);
    },

    complete: function(res){
      alert("ajaxComplete");
    },

    start: function(res){
      alert("ajaxStart");
    },

    stop: function(res){
      alert("ajaxStop");
    }

  });
})*/
