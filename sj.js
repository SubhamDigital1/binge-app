<script>

const splash = document.getElementById("splash");
const offline = document.getElementById("offline");

function goToSite(){
    window.location.replace("https://dropottplay.blogspot.com/?m=1");
}

window.addEventListener("load", function(){

    setTimeout(function(){

        splash.style.opacity = "0";

        setTimeout(function(){

            if(navigator.onLine){
                goToSite();
            }else{
                splash.style.display="none";
                offline.style.display="flex";
            }

        },800);

    },2000);

});

</script>
