student=[];
function submit()
{
    var n1=document.getElementById("name1").value;
    
student.push(n1);

console.log(student);
document.getElementById("name").innerHTML=student;


}
function show()
{
    var i=student.join("<br>");
    console.log(student);
document.getElementById("p1").innerHTML=i;
document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    student.sort();
    var i=student.join("<br>");
    console.log(student);
document.getElementById("sorted").innerHTML=i;
}