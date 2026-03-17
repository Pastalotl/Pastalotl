let today = new Date()
let date = today.getDate()
let month = today.getMonth()+1
let year = today.getFullYear()

iconList = ["Swanopoly Idle.png","Ifforrem Idle.png","Automata Combat.png","Kauplaire Idle.png","Ddwgyl Idle.png","Ddwgyl Idle (Pride).png","Vayens Idle.png","Taure Idle.png","Calian Idle.png","Nigelas Idle.png","Silaera Idle.png","Nigelas Festive.png"]
document.getElementById("bannerIcon").src = "../icons/"+iconList[month-1]
favicon = document.createElement('Link');
favicon.rel = 'icon'
document.head.appendChild(favicon)
favicon.href = "../icons/"+iconList[month-1]