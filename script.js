var songs=[
    { songname:"name 1 random", img:"path", songurl:"", artistname:"aditya deokar" , duration:"02:00" },
    { songname:"name 2 random", img:"path", songurl:"", artistname:"aditya deokar" , duration:"02:00" },
    { songname:"name 3 random", img:"path", songurl:"", artistname:"aditya deokar" , duration:"02:00" },
    { songname:"name 4 random", img:"path", songurl:"", artistname:"aditya deokar" , duration:"02:00" },
    { songname:"name 5 random", img:"path", songurl:"", artistname:"aditya deokar" , duration:"02:00" },
    
]

var clutter="";

songs.forEach(function(elem){
    clutter+=`  <div class="row br">

                    <img src="" alt="song profile">
                    <h4 class="fixwid">${elem.songname}</h4>
                    <h4>${elem.artistname}</h4>
                    <h4>playlist</h4>
                    <h4>${elem.duration}</h4>

                </div>`;
})

var songsContainer=document.querySelector(".tableContainer");

songsContainer.innerHTML=clutter;

