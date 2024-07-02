function bt(){
    let bta=document.querySelector('.cart');
    let prod=document.querySelector('.prod')
    bta.style.display="block";
    prod.style.width="80%";


}

function cancel(){
    let prod=document.querySelector('.prod')
    let bt=document.querySelector('.cart');
    bt.style.display="none";
    prod.style.width="100%";

}

function add(element){
    let name=element.parentNode.parentNode.querySelector('.box-1-1 h3');
    let rate=element.parentNode.parentNode.querySelector('.box-1-1 p span');
    let img = element.parentNode.parentNode.parentNode.querySelector('.box img')
    let AddData = document.getElementById('add');

    AddData.innerHTML+=`<div  class=addcart>
                            <div class="left">
                            <img src="${img.src}" class="photo">
                            <h3>${name.innerHTML}</h3>
                            <p>$<span class="price">${rate.innerHTML}</span></p>
                            <input type="number" value="1" min="1" onchange="updateTotal()" class=num >
                            </div>
                            <div class="right">
                            <button onclick=deleteBox(this)>Delete</button>
                            </div>
                            <hr>
                            </div>`;
updateTotal()
}
function updateTotal() {
    let total = 0;
    document.querySelectorAll('.addcart').forEach(cartItem => {
        let price = parseFloat(cartItem.querySelector('.price').innerText);
        let quantity = parseInt(cartItem.querySelector('.num').value);
        total += price * quantity;
    });
    document.querySelector('.cart h4 span').innerText = total.toFixed(2);
}


function deleteBox(element){
    let del=element.parentNode.parentNode.remove();
    updateTotal();


}

function buy(){
    alert('Your order is placed')
    let AddData = document.getElementById('add');
    AddData.innerHTML='';
    updateTotal();
}