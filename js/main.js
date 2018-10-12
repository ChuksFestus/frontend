// One-click copy endpoint
// $("input.endpoint").click(function() {
//   this.select();
//   document.execCommand("copy");
// });
const $$ = pass => document.querySelector(pass);
$$("input.endpoint").addEventListener("click", function() {
  this.select();
  document.execCommand("copy");
});

// Contributors section effects
// $("#contributors figure").hover(function() {
//   this.firstElementChild.classList.toggle("blur");
//   this.lastElementChild.classList.toggle("visible");
// });

$$("#contributors figure").addEventListener("hover", function() {
  this.firstElementChild.classList.toggle("blur");
  this.lastElementChild.classList.toggle("visible");
});

// Section title effects
// $("#section-left, #section-right").hover(function() {
//   this.firstElementChild.classList.toggle("hover");
// });

$$("#section-left, #section-right").addEventListener("hover", function() {
  this.firstElementChild.classList.toggle("hover");
});

// Demonstration/test section handler
$$("#form-cep").submit(function(e) {
  e.preventDefault();
  const responseBox = $("#response code");
  const formattedInput = $(this)
    .serialize()
    .replace(/\D/g, "");
  responseBox.text("Buscando...");

  // $.ajax({
  //   url: `http://fastcep.appspot.com/v1/${formattedInput}`,
  //   method: "GET"
  // })
  //   .done(data => {
  //     responseBox.text(JSON.stringify(data, null, 2));
  //   })
  //   .fail(data => {
  //     responseBox.text(`Ocorreu um erro ao buscar o CEP - ${data.status}`);
  //   });

  try {
    fetch(`http://fastcep.appspot.com/v1/${formattedInput}`)
      .then(res => res.json())
      .then(data => responseBox.text(JSON.stringify(data, null, 2)));
  } catch (error) {
    console.log("erro");
  }
});
