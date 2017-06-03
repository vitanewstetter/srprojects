//students

var  studentList =[
    {
   "firstname": "Alex",
    "lastname": "Accarino",
   "website": "https://www.google.com/search?q=alex+accarino+dma+ucla"
}, {
    "firstname": "Alex",
    "lastname": "Madrid",
    "website": "http://alexander-madrid.com"
}, {
    "firstname": "Allek",
    "lastname": "Bien",
    "website": "http://cargocollective.com/allbien"
}, {
    "firstname": "Anisa",
    "lastname": "Bashiri",
    "website": "http://anisa-bashiri.com/"
}, {
    "firstname": "Austin",
    "lastname": "Yu",
    "website": "austinyu.com"
}, {
    "firstname": "Chance",
    "lastname": "Wen",
    "website": "https://www.google.com/search?q=chance+wen+dma+ucla"
}, {
    "firstname": "Chen Cheng",
    "lastname": "Xiang",
    "website": "https://youtu.be/w7MmsKzsf0c"
    }, {
    "firstname": "Elena",
    "lastname": "Birgit Dick",
    "website": "http://www.elenabd.com/"
}, {
    "firstname": "Erica",
    "lastname": "Young",
    "website": "http://cargocollective.com/xingxingart"
}, {
    "firstname": "Erika",
    "lastname": "Kehrwald",
    "website": "https://www.google.com/search?q=erica+kehrwald+dma+ucla"
}, {
    "firstname": "Evan",
    "lastname": "Berger",
    "website": "https://www.google.com/search?q=evan+berger+dma+ucla"
}, {
    "firstname": "Greta",
    "lastname": "Lorenz",
    "website": "https://www.google.com/search?q=greta+lorenz+dma+ucla"
}, {
    "firstname": "Hillary",
    "lastname": "Cleary",
    "website": "http://www.hillarycleary.com"
}, {
    "firstname": "Ho Man",
    "lastname": "Leung",
    "website": "http://cargocollective.com/homanleung"
}, {
    "firstname": "Hyesoo",
    "lastname": "Shin",
    "website": "https://www.google.com/search?q=hyesoo+shin+dma+ucla"
}, {
    "firstname": "Jake",
    "lastname": "Baylor",
    "website": "https://www.google.com/search?q=jake+baylor+dma+ucla"
}, {
    "firstname": "Jason",
    "lastname": "Farwell",
    "website": "http://jasfar.github.io/"
},{
    "firstname": "Jason",
    "lastname": "Spielman",
    "website": "https://www.google.com/search?q=jason+spielman+dma+ucla"
}, {
    "firstname": "Jennifer",
    "lastname": "Fletes-Galindo",
    "website": "https://www.google.com/search?q=jennifer+fletes-galindo+dma+ucla"
}, {
    "firstname": "Jessica",
    "lastname": "Rae Vergara",
    "website": "http://www.jessicaraevergara.com"
}, {
    "firstname": "Jiamei",
    "lastname": "Deng",
    "website": "http://www.jiameideng.com"
}, {
    "firstname": "Jordana",
    "lastname": "Attias",
    "website": "https://www.jordanaattias.com/"
},
    {
    "firstname": "Justin",
    "lastname": "Piotroski",
    "website": "justinp.io"
},
    {
    "firstname": "Justine",
    "lastname": "Sto Thomas",
    "website": "http://www.cargocollective.com/justcara"
}, {
    "firstname": "Kain",
    "lastname": "Suwannaphin",
    "website": "http://www.kainnedesign.com"
}, {
    "firstname": "Kayla",
    "lastname": "Eber",
    "website": "https://www.google.com/search?q=kayla+eber+dma+ucla"
}, {
    "firstname": "Kelly",
    "lastname": "Brennan",
    "website": "www.kellybrennan.com"
}, {
    "firstname": "Mac",
    "lastname": "Le",
    "website": "http://devinboscole.com/"
}, {
    "firstname": "Maddie",
    "lastname": "Avjean",
    "website": "avjean.com"
}, {
    "firstname": "Michael",
    "lastname": "Becker",
    "website": "http://mjamesbecker.com"
}, {
    "firstname": "Nathan",
    "lastname": "Chan",
    "website": "http://www.i-m-n8.com"
}, {
    "firstname": "Nathan",
    "lastname": "Dwarika",
    "website": "https://www.google.com/search?q=nathan+dwarika+dma+ucla"
}, {
    "firstname": "Noor",
    "lastname": "Euceph",
    "website": "https://www.google.com/search?q=noor+euceph+dma+ucla"
}, {
    "firstname": "Palmo",
    "lastname": "Farber",
    "website": "https://www.google.com/search?q=palmo+farber+dma+ucla"
}, {
    "firstname": "Peter",
    "lastname": "Ju",
    "website": "https://peter-ju.squarespace.com"
}, {
    "firstname": "Qiqi",
    "lastname": "Zuo",
    "website": "http://cargocollective.com/cargoqiqi"
}, {
    "firstname": "Rob Tom",
    "lastname": "Browning",
    "website": "http://robtom.red"
}, {
    "firstname": "Ryan",
    "lastname": "Thomas",
    "website": "https://www.google.com/search?q=ryan+thomas+dma+ucla"
}, {
    "firstname": "Sara",
    "lastname": "Haas",
    "website": "http://www.sara-haas.com"
}, {
    "firstname": "Syd",
    "lastname": "Rein",
    "website": "http://www.sydrein.com"
}, {
    "firstname": "Tara",
    "lastname": "Dilloughery",
    "website": "http://cargocollective.com/taradilloughery"
}, {
    "firstname": "Tiffany",
    "lastname": "Taimoorazy",
    "website": "http://www.tifftam.co"
}, {
    "firstname": "Vita",
    "lastname": "Newstetter",
    "website": "http://vitanewstetter.com/"
}, {
    "firstname": "Zichao",
    "lastname": "Xu",
    "website": "http://cargocollective.com/xzc"
}];

var selected = {id: null, url: '#'};
var studentSection = document.getElementById('student-section');
var __dirname ="/srprojects";

var toast = document.getElementById('toast');
var toastProfile = document.getElementById('toast-profile-image');
var toastDrop = document.getElementById('toast-drop-image');
var toastSender = document.getElementById('toast-sender');
var mobile = document.getElementById('mobile-info');
var info = document.getElementById('show-info');

var accept = document.getElementById('toast-accept');
var decline = document.getElementById('toast-decline');

//add image for each student
for(var i=0; i<studentList.length; i++){
    var fullname = studentList[i].firstname + " " + studentList[i].lastname;
    var urlname = fullname.replace(/\s+/g, '-').toLowerCase();

    var student = document.createElement('div');
    student.classList.add('student-profile');
    student.target = '_blank';
    student.id = i;

    var studentImg = document.createElement('img');
    studentImg.src = __dirname + '/assets/drops/'+ urlname + '-drop.png';

    var studentName = document.createElement('p');
    studentName.innerHTML = fullname;
    studentName.classList.add('student-name');

    student.appendChild(studentImg);
    student.appendChild(studentName);
    studentSection.appendChild(student);
}

var allStudents = document.querySelectorAll(".student-profile");

//handle click on student
for(var j = 0; j<allStudents.length; j++){
    allStudents[j].onclick = function(){
        //if no student is selected, have airdrop slide out
        if(selected.id == null){
            toast.style.opacity = '1';
            toast.style.right = '20px';
            toast.style.top = '20px';

            selected.id = this.id;
            var fullname = studentList[selected.id].firstname + " " + studentList[selected.id].lastname;
            var urlname = fullname.replace(/\s+/g, '-').toLowerCase();

            toastDrop.src = __dirname + '/assets/drops/'+ urlname + '-drop.png';
            toastProfile.src = __dirname + '/assets/profile/'+ urlname + '-profile.png';
            toastSender.innerHTML = 'from "' + fullname + '"';
            selected.url = studentList[selected.id].website;
        }else{
            //if a student is already selected, hide that popout, and slide out again with new student info
            toast.style.opacity = '0';
            var width = getWidth();
            if(width < 600){
                toast.style.top = '-100px';
            }else{
                toast.style.right = '-420px';
            }
            selected.id = this.id;
            var fullname = studentList[selected.id].firstname + " " + studentList[selected.id].lastname;
            var urlname = fullname.replace(/\s+/g, '-').toLowerCase();

            //delay change until airdrop slides back onto screen
            setTimeout(function(){
                toast.style.opacity = '1';
                toast.style.right = '20px';
                toast.style.top = '20px';

                toastDrop.src = __dirname + '/assets/drops/'+ urlname + '-drop.png';
                toastProfile.src = __dirname + '/assets/profile/'+ urlname + '-profile.png';
                toastSender.innerHTML = 'from "' + fullname + '"';
                selected.url = studentList[selected.id].website;
            }, 500);
        }
    }
}

accept.onclick =  function(){
    console.log(selected.url);
    window.open(selected.url, '_blank');
    toast.style.opacity = '1';
    var width = getWidth();
    if(width < 600){
        toast.style.top = '-100px';
    }else{
        toast.style.right = '-420px';
    };
};

decline.onclick =  function(){
    selected.id = null;
    selected.url = '#';
    toast.style.opacity = '0';
    var width = getWidth();
    if(width < 600){
        toast.style.top = '-100px';
    }else{
        toast.style.right = '-420px';
    };
};

mobile.onclick = function(){
    info.style.opacity = 1;
    info.style.display = "block";
};


function getWidth() {
    if (self.innerWidth) {return self.innerWidth;}
    if (document.documentElement && document.documentElement.clientWidth) {
        return document.documentElement.clientWidth;}
    if (document.body) { return document.body.clientWidth;}}