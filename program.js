let image = [
{
src: "./media/avatar.png"

},
{
src: "./media/avatarWink.png"

},
{
src: "./media/avatarHeart.png"

},

]


let avatarImage = document.getElementById('imageAvatar');
let buttonOne = document.getElementById('buttonOne');
let buttonTwo = document.getElementById('buttonTwo');
let buttonThree = document.getElementById('buttonThree');

buttonOne.addEventListener("mousedown", function(){
    avatarImage.src = image[1].src;
});

buttonOne.addEventListener("mouseup", function(){
    avatarImage.src = image[0].src;
});
buttonTwo.addEventListener("mousedown", function(){
    avatarImage.src = image[1].src;
});

buttonTwo.addEventListener("mouseup", function(){
    avatarImage.src = image[0].src;
});
buttonThree.addEventListener("mousedown", function(){
    avatarImage.src = image[2].src;
});

buttonThree.addEventListener("mouseup", function(){
    avatarImage.src = image[0].src;
});