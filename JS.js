const btnEl = document.querySelector('.btn');

const clickHandler = async () => {

    const res = await fetch('https://reqres.in/api/users');
    const  data = await res.json();
    console.log(data.data);
    

    // //show waiting
    // fetch('https://reqres.in/api/users')
    // .then(res => {
    //     return res.json();
    //     //hide wsiting
    // })
    // .then(data => {
    //     console.log(data);
    // });
 };

btnEl.addEventListener('click', clickHandler);