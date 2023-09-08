//header responsiveness
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const idToImage = ['empty', 'python.jpg', 'dataScience.jpg',
'chatgpt.jpg','ielts.png','DSA.jpg','cyberSecurity.jpg','digitalMarketing.jpg',
'englishBasics.jpg', 'productManagementjpg.jpg'];

const removeItem = (item, id) => {
    // console.log(id);
    const newItem = item.filter((element) => {
        return element.id != id;
    });
    if(newItem.length==0) {
        localStorage.removeItem('enrolledCourse')
    }
    else {
        localStorage.setItem('enrolledCourse', JSON.stringify(newItem));
        const forInfo = document.getElementById('for-info');
        forInfo.innerText = 'Course Removed'
    }
    
    setTimeout(() => {
        window.open(window.location.href,'_self');
    },2000);
}

if(!localStorage.length || !localStorage.getItem('enrolledCourse')) {
    const forInfo = document.getElementById('for-info');
    forInfo.innerText = 'You have not enrolled in any Course!'
}
else if(localStorage.getItem('enrolledCourse')) {
    const boxContainer = document.querySelector('.box-container');
    const item = JSON.parse(localStorage.getItem('enrolledCourse'));
    item.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('box');
        // image and name
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('image');
        const img = document.createElement('img');
        img.src = `../assests/images/${idToImage[element.id]}`;
        const h3 = document.createElement('h3');
        h3.innerText = element.name;
        imgDiv.appendChild(img);
        imgDiv.appendChild(h3);
        div.appendChild(imgDiv);

        //content
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        const p = document.createElement('p');
        p.innerText = `This is your ${element.name} course...`;
        const a = document.createElement('a');
        a.classList.add('btn');
        a.addEventListener('click', () => removeItem(item,element.id));
        a.innerText='Remove';
        contentDiv.appendChild(p);
        contentDiv.appendChild(a);
        div.appendChild(contentDiv);

        boxContainer.appendChild(div);
    });
}