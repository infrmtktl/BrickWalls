document.addEventListener('keydown', (event) => {
    const keyName = event.keyCode;
console.log(keyName)

const player = document.getElementById("player")

if (event.keyCode == 32){
console.log(player)
player.src="uderzajacy.PNG"


}
})
document.addEventListener('keyup', (event) => {
    const keyName = event.key;

    player.src="stojacy.PNG"
})