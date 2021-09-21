var cerenpass = "Gcgd123" ;
          var cerenisim = "Ceren";
          var modpass = "123adminlog!12";
          var modisim = "MV";
          var volkanisim ="Volkan";
          var volkanpass ="123volkan";
          var esrapass = "esra123";
          var esraisim = "Esra";
          var zelihaisim ="Zeliha";
          var zelihapass ="zeliha123";
          var serpilisim ="Serpil";
          var serpilpass ="2004";
          var huseyinisim ="Hüseyin";
          var huseyinpass ="5919";
          var sevincisim ="Sevinç";
          var sevincpass ="1946";
          var gulsahisim ="Gülşah";
          var gulsahpass ="SLBWQ5";
          var seyfettinisim ="Seyfettin";
          var seyfettinpass ="seyfettin123";
          var betaisim ="BETA";
          var betapass ="123BetaSystems";
          var melekisim ="Melek";
          var melekpass ="461975";
          var isim;
          var pass;
  
          function enter(){
           isim = document.getElementById("username").value;
           pass = document.getElementById("password").value;
           if (pass == cerenpass && isim == cerenisim) {
             
             window.location="cerensayfa.html";
               
           }
           else if (isim==modisim && pass==modpass) {
               window.location="multi123fa.html";
               
           }
           else if (isim==volkanisim && pass==volkanpass) {
               window.location="volkansayfa.html";
               
           }
           else if (isim==esraisim && pass==esrapass) {
               window.location="esrasayfa.html";
               
           }
                else if (isim==zelihaisim && pass==zelihapass) {
               window.location="zelihasayfa.html";
               
           }
               else if (isim==serpilisim && pass==serpilpass) {
               window.location="serpilsayfa.html";
               
           }
              else if (isim==huseyinisim && pass==huseyinpass) {
               window.location="huseyinsayfa.html";
               
           }
               else if (isim==sevincisim && pass==sevincpass) {
               window.location="sevincsayfa.html";
               
           }
               else if (isim==gulsahisim && pass==gulsahpass) {
               window.location="gulsahsayfa.html";
               
           }
                else if (isim==seyfettinisim && pass==seyfettinpass) {
               window.location="seyfettinsayfa.html";
               
           } 
           else if (isim==betaisim && pass==betapass) {
               window.location="userpage.html";
               
           } 
           else if (isim==melekisim && pass==melekpass) {
               window.location="meleksayfa.html";
           }
           else{
               
          Swal.fire({
          position: 'middle',
           icon: 'error',
          title: 'Şifreniz Veya Kullanıcı Adınız Hatalı!',
          showConfirmButton: false,
          timer: 2000
  })
           }
          }
