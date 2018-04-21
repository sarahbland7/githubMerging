const TEMP = document.getElementById("merge")

function merge() {

  var ret = `You merged successfully!`
  TEMP.innerHTML = ret;
  console.log(TEMP)

}

window.onload = () => {
  merge();
}
