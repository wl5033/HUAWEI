function Cart() {

}

Cart.prototype.addCart = function (product) {
  //有商品则加入数量
  if (this.hasGoods(product)) {
    var cartlist = JSON.parse(localStorage.getItem('cartlist'));
    for (var i = 0; i < cartlist.length; i++) {
      if (product.id == cartlist[i].id) {
        cartlist[i].number += 1;
        break;
      }
    }
    localStorage.setItem('cartlist', JSON.stringify(cartlist));

  } else {
    //没有直接加入
    var cartlist = JSON.parse(localStorage.getItem('cartlist')) || [];
    product.number = 1;
    cartlist.push(product);
    localStorage.setItem('cartlist', JSON.stringify(cartlist));
  }
}

Cart.prototype.hasGoods = function (product) {
  if (!localStorage.length) {
    return false;
  }
  var cartlist = JSON.parse(localStorage.getItem('cartlist')) || [];
  for (var i = 0; i < cartlist.length; i++) {
    if (product.id == cartlist[i].id) {
      return true;
    }
  }
  return false;
}

Cart.prototype.getCart = function(){
  return JSON.parse(localStorage.getItem('cartlist')) || [];
}

Cart.prototype.delCart = function(id){
  var cartList =  JSON.parse(localStorage.getItem('cartlist')) || [];
  for (var i = 0; i < cartList.length; i++) {
    if (id == cartList[i].id) {
      cartList.splice(i,1);
      localStorage.setItem('cartlist', JSON.stringify(cartList));
      return true;
    }
  }
  return false;
}


Cart.prototype.getTotalPrice = function(){
  var cartList = this.getCart();
  var total = 0.00;
  for (var i = 0; i < cartList.length; i++) {
    total += cartList[i].goods_price * cartList[i].number;
  }
  return total;
}
