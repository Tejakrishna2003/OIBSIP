const topdiv = document.querySelector('.top-con');
const linkAccount = document.querySelector('#linkAccount');
const linklogin = document.querySelector('#linklogin');

linkAccount.addEventListener('click',() => {
   topdiv.classList.add('active');
});
linklogin.addEventListener('click',() => {
   topdiv.classList.remove('active');
});

