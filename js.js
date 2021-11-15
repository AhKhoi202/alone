document.getElementById("files").onchange = function () {
    var reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById("image").src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
};

function displayname() {
    document.getElementById("happys").innerHTML = 
document.getElementById("happy").value ;
}


//////////////////////////////////////////////////////////////////////////////////

// var imageLoader = document.getElementById('files');
//     imageLoader.addEventListener('change', handleImage, false);
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');


// function handleImage(e){
//     var reader = new FileReader();
//     reader.onload = function(event){
//         var img = new Image();
//         img.onload = function(){
//             canvas.width = img.width;
//             canvas.height = img.height;
//             ctx.drawImage(img,0,0);
//         }
//         img.src = event.target.result;
//     }
//     reader.readAsDataURL(e.target.files[0]);     
// }

// function func(){
//     var e=document.getElementById("happy"),t=document.getElementById("canvas"),n=t.getContext("2d");
//     n.fillStyle="#990000";n.font="30px futura";n.textBaseline="top";n.fillText(e.value,150,0);
    
//     }