const signupbutton=document.getElementById('signupbutton');
const signinbutton=document.getElementById('home');
const signin=document.getElementById('signin');
const signup=document.getElementById('signup');
const menu=document.getElementById('Menu');
const menubutton=document.getElementById('menubutton')
const forgot=document.getElementById('forgot');
const forgetbutton=document.getElementById('forget');

signup.style.display='none';
signin.style.display='none';
forgot.style.display='none';

signinbutton.addEventListener('click',function()
{
    signup.style.display='none';
    signin.style.display='block';
    menu.style.display='none';
    forgot.style.display='none';
});
signupbutton.addEventListener('click',function()
{
    signin.style.display='none';
    signup.style.display='block';
    menu.style.display='none';
    forgot.style.display='none';

})
menubutton.addEventListener('click',function(){
    signup.style.display='none';
    signin.style.display='none';
    menu.style.display='block';
    forgot.style.display='none';

})
forgetbutton.addEventListener('click',function()
{
    forgot.style.display='block';
    signup.style.display='none';
signin.style.display='none';
})