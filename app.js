var content=document.querySelector('.SortInfo__Body1');
var algos=document.getElementById('button-style');
algos.addEventListener('click',displaycontent);

function displaycontent()
{
    if(algos.innerText==='Bubble'){
        content.style.display='block';

    }  
}

const options = {
    bottom: '430px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();