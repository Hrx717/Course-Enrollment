const cartCheckOut = (item) => {
    let enrolledCourse = item;
    if(localStorage.getItem('enrolledCourse')) {
        const alredySaved = JSON.parse(localStorage.getItem('enrolledCourse'));
        for(let i=0;i<alredySaved.length;i++) {
            enrolledCourse.push(alredySaved[i]);
        }
    }
    localStorage.removeItem('myCourse');
    localStorage.setItem('enrolledCourse', JSON.stringify(enrolledCourse));
    const forInfo = document.getElementById('for-info');
    forInfo.innerText = "CheckOut Complete, Please Wait!";
    setTimeout(() => {
        window.open(`${window.location.origin}/Course-Enrollment/pages/myCourses.html`, '_self')
    },2000)
}


if(localStorage.length==0 || !localStorage.getItem('myCourse')) {
    const forInfo = document.getElementById('for-info');
    forInfo.innerText = "Cart is empty!";
}
else {
    const cartHeading = document.getElementById('cart-heading');
    const boxContainer = document.querySelector('.box-conatainer')
    cartHeading.innerText = 'Checkout Items';
    const item = JSON.parse(localStorage.getItem('myCourse'));

    let total = 0;
    item.forEach((element, index) => {
        const div = document.createElement('div');
        div.classList.add('item-list');

        const nameDiv = document.createElement('div');
        const priceDiv = document.createElement('div');
        nameDiv.innerText = `${index+1}. ${element.name}`;
        priceDiv.innerText = element.price + "Rs";
        total += Number(element.price);

        div.appendChild(nameDiv);
        div.appendChild(priceDiv);
        boxContainer.appendChild(div);
    });

    const div = document.createElement('div');
    div.classList.add('checkout');
    const totalDiv = document.createElement('div');
    const CheckoutButton = document.createElement('Button');

    totalDiv.innerText = `Totol:- ${total}Rs`;
    CheckoutButton.innerText = 'Checkout';
    CheckoutButton.addEventListener('click', () => cartCheckOut(item));

    div.appendChild(totalDiv);
    div.appendChild(CheckoutButton);
    boxContainer.appendChild(div);
}