//students

var  students =[{
   "firstname": "Alex",
    "lastname": "Accarino",
   "website": "#"
}, {
    "firstname": "Alex",
    "lastname": "Madrid",
    "website": "#"
}, {
    "firstname": "Allek",
    "lastname": "Bien",
    "website": "#"
}, {
    "firstname": "Anisa",
    "lastname": "Bashiri",
    "website": "#"
}, {
    "firstname": "Austin",
    "lastname": "Yu",
    "website": "#"
}, {
    "firstname": "Chance",
    "lastname": "Wen",
    "website": "#"
}, {
    "firstname": "Elena",
    "lastname": "Birgit Dick",
    "website": "#"
}, {
    "firstname": "Erica",
    "lastname": "Young",
    "website": "#"
}, {
    "firstname": "Erika",
    "lastname": "Kehrwald",
    "website": "#"
}, {
    "firstname": "Evan",
    "lastname": "Berger",
    "website": "#"
}, {
    "firstname": "Greta",
    "lastname": "Lorenz",
    "website": "#"
}, {
    "firstname": "Hillary",
    "lastname": "Cleary",
    "website": "#"
}, {
    "firstname": "Ho Man",
    "lastname": "Leung",
    "website": "#"
}, {
    "firstname": "Hyesoo",
    "lastname": "Shin",
    "website": "#"
}, {
    "firstname": "Jake",
    "lastname": "Baylor",
    "website": "#"
}, {
    "firstname": "Jason",
    "lastname": "Farwell",
    "website": "#"
},{
    "firstname": "Jason",
    "lastname": "Spielman",
    "website": "#"
}, {
    "firstname": "Jennifer",
    "lastname": "Fletes-Galindo",
    "website": "#"
}, {
    "firstname": "Jessica",
    "lastname": "Rae Vergara",
    "website": "#"
}, {
    "firstname": "Jiamei",
    "lastname": "Deng",
    "website": "#"
}, {
    "firstname": "Jordana",
    "lastname": "Attias",
    "website": "#"
}, {
    "firstname": "Jusin",
    "lastname": "Piotroski",
    "website": "#"
}, {
    "firstname": "Justine",
    "lastname": "Sto Thomas",
    "website": "#"
}, {
    "firstname": "Kain",
    "lastname": "Suwannaphin",
    "website": "#"
}, {
    "firstname": "Kayla",
    "lastname": "Eber",
    "website": "#"
}, {
    "firstname": "Kelly",
    "lastname": "Brennan",
    "website": "#"
}, {
    "firstname": "Mac",
    "lastname": "Le",
    "website": "#"
}, {
    "firstname": "Maddie",
    "lastname": "Avjean",
    "website": "#"
}, {
    "firstname": "Michael",
    "lastname": "Becker",
    "website": "#"
}, {
    "firstname": "Nathan",
    "lastname": "Chan",
    "website": "#"
}, {
    "firstname": "Nathan",
    "lastname": "Dwarika",
    "website": "#"
}, {
    "firstname": "Noor",
    "lastname": "Euceph",
    "website": "#"
}, {
    "firstname": "Palmo",
    "lastname": "Farber",
    "website": "#"
}, {
    "firstname": "Peter",
    "lastname": "Ju",
    "website": "#"
}, {
    "firstname": "Qiqi",
    "lastname": "Zuo",
    "website": "#"
}, {
    "firstname": "Rob Tom",
    "lastname": "Browning",
    "website": "#"
}, {
    "firstname": "Ryan",
    "lastname": "Thomas",
    "website": "#"
}, {
    "firstname": "Sara",
    "lastname": "Haas",
    "website": "#"
}, {
    "firstname": "Syd",
    "lastname": "Rein",
    "website": "#"
}, {
    "firstname": "Tara",
    "lastname": "Dilloughery",
    "website": "#"
}, {
    "firstname": "Tiffany",
    "lastname": "Taimoorazy",
    "website": "#"
}, {
    "firstname": "Vita",
    "lastname": "Newstetter",
    "website": "#"
}, {
    "firstname": "Zichao",
    "lastname": "Xu",
    "website": "#"
}];

//show students in document

var selected = null;
var studentSection = document.getElementById('student-section');
var __dirname ="/SrProjects";

for(var i=0; i<students.length; i++){
    selected = i;
    var fullname = students[i].firstname + " " + students[i].lastname;
    var urlname = fullname.replace(/\s+/g, '-').toLowerCase();

    var target = '_self';
    if (students[i].website !== '#') target = '_blank';

    var student = document.createElement('a');
    student.href = students[i].website;
    student.classList.add('student-profile');
    student.target = target;
    student.id = i;

    var studentImg = document.createElement('img');
    studentImg.src = __dirname + '/assets/drops/'+ urlname + '-drop.png';

    student.appendChild(studentImg);
    studentSection.appendChild(student);
}