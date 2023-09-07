//header responsiveness
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// contact 
const sendBtn = document.querySelector('.send-btn');
sendBtn.addEventListener('click', () => {
    alert('Thank You! We will reach you asap..')
})

//enroll to courses
const enrollButton = document.querySelectorAll('.enroll');
const courses = [
    {id: 1, name: "Python Fundamentals", price: 5999},
    {id: 2, name: "Data Science", price: 5999},
    {id: 3, name: "Learn ChatGPT", price: 5999},
    {id: 4, name: "IELTS Preparation", price: 5999},
    {id: 5, name: "DSA in JAVA", price: 5999},
    {id: 6, name: "Cyber Security", price: 5999},
    {id: 7, name: "Digital Marketing", price: 2999},
    {id: 8, name: "English Speaking", price: 1499},
    {id: 9, name: "Product Management", price: 3999},
]

let selected=[];
let enrolled=[];
if(localStorage.length && localStorage.getItem('myCourse')) {
    const prevSelected = JSON.parse(localStorage.getItem('myCourse'));
    selected = [...prevSelected];
}

if(localStorage.length && localStorage.getItem('enrolledCourse')) {
    const prevEnrolled = JSON.parse(localStorage.getItem('enrolledCourse'));
    enrolled = [...prevEnrolled];
}

selected.forEach((element) => {
    enrollButton[element.id-1].innerText = 'Added In Cart';
});

enrolled.forEach((element) => {
    enrollButton[element.id-1].innerText = 'Already Enrolled';
});

enrollButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerText=='Added In Cart') {
            return alert("Course already added in cart!");
        }
        else if(e.target.innerText=='Already Enrolled') {
            return alert('Already enrolled! Go to My Courses');
        }
        else {
            e.target.innerText = 'Added In Cart';
            selected.push(courses[e.target.id -1]);
            console.log(selected);
            localStorage.setItem('myCourse', JSON.stringify(selected));
        }
    });
});
