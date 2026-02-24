<script>

const offline = document.getElementById("offline");
const splash = document.getElementById("splash");

function checkConnection(){
  if(navigator.onLine){
    offline.style.display="none";
  }else{
    offline.style.display="flex";
  }
}

window.addEventListener("online", checkConnection);
window.addEventListener("offline", checkConnection);

window.onload = function(){
  setTimeout(function(){
    splash.classList.add("fade-out");

    if(navigator.onLine){
      // 2 sec পর Blogger site এ redirect করবে
      window.location.href = "https://dropottplay.blogspot.com/?m=1";
    }else{
      offline.style.display="flex";
    }

  },2000);
};

</script>
