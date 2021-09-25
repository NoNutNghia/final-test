var arr=[];
var id= 0;
function add() {
  var genders = document.querySelectorAll('input[name="sex"]');
  for(var i = 0; i < genders.length; i++) {
      if(genders[i].checked) {
          var gender = genders[i].nextSibling.textContent.trim(); 
      }
  }
  var subjectChecked = []; 
  var subjects = document.querySelectorAll('input[name="subj"]');
  for(i = 0; i < subjects.length; i++) {
    if(subjects[i].checked) {
        subjectChecked.push(subjects[i].nextSibling.textContent.trim()); 
    }
}
  var student = {
    id: id++,
    name: document.querySelector('#name').value,
    birthday: document.querySelector('#birthday').value,
    gender: gender,
    subjects: subjectChecked
  }
  console.log(student);
  arr.push(student);
  console.log(arr);
  show();
}

function show() {
  var s= '';
  for (var i = 0; i < arr.length; i++) {
    s += `<tr>
          <td><input type="checkbox"></td>
          <td>${arr[i].id}</td>
          <td>${arr[i].name}</td>
          <td>${arr[i].birthday}</td>
          <td>${arr[i].gender}</td>
          <td>${arr[i].subjects}</td>
          <td><button>Insert</button></td>
    </tr>`;
  }
  document.getElementById("show").innerHTML = s;
}