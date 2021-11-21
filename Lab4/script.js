const url = "https://randomuser.me/api/?results=10";

async function LoadingScreen() {
  document.getElementById("loading").innerHTML = "Загрузка...";
  const Response = await fetch(url);
  const results = await Response.json();

  console.log(results);
  for (let i = 0; i <= 9; i++) {
    document.getElementById("gender" + i).value = results.results[i].gender;
    document.getElementById("name" + i).value =
      results.results[i].name.first + " " + results.results[i].name.last;
    document.getElementById("email" + i).value = results.results[i].email;
    document.getElementById("adress" + i).value =
      results.results[i].location.city;
    document.getElementById("age" + i).value = results.results[i].dob.age;
    document.getElementById("phone" + i).value = results.results[i].phone;
    document.getElementById("man" + i).src = results.results[i].picture.large;
  }
  console.log("---------");

  document.getElementById("loading").innerHTML = " ";
  document.getElementById("display").style.display = "";
}
