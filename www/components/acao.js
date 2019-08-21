// This is a JavaScript file
$(document).on("click","#codigoBarra",function(){
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      if (result.text == 280720550){
      $(location).attr("href", "1celular.html")
      }
      navigator.notification.alert("Leitura do Código de Barra\n")
      "Resultado: " + result.text + "\n" +
      "Formato: " + result.format + "\n" +
      "Cancelado: " + result.cancelled;
    },
    function (error) {
      navigator.notification.alert("Scanning failed: " + error);
    },
      
     function (result) {
      if (result.text == 989895555){
      $(location).attr("href", "2celula.html")
      }
      navigator.notification.alert("Leitura do Código de Barra\n")
      "Resultado: " + result.text + "\n" +
      "Formato: " + result.format + "\n" +
      "Cancelado: " + result.cancelled;
    },
    function (error) {
      navigator.notification.alert("Scanning failed: " + error);
    },

         function (result) {
      if (result.text == 85236987){
      $(location).attr("href", "3celula.html")
      }
      navigator.notification.alert("Leitura do Código de Barra\n")
      "Resultado: " + result.text + "\n" +
      "Formato: " + result.format + "\n" +
      "Cancelado: " + result.cancelled;
    },
    function (error) {
      navigator.notification.alert("Scanning failed: " + error);
    },

             function (result) {
      if (result.text == 85369877444){
      $(location).attr("href", "4celula.html")
      }
      navigator.notification.alert("Leitura do Código de Barra\n")
      "Resultado: " + result.text + "\n" +
      "Formato: " + result.format + "\n" +
      "Cancelado: " + result.cancelled;
    },
    function (error) {
      navigator.notification.alert("Scanning failed: " + error);
    },

          {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "CODE_39,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }

  )

  
});
