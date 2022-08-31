function applyDiscount(cost, discount = .10) {
    return cost - (cost * discount);
}

alert(applyDiscount(100, .20));
alert(applyDiscount(100));