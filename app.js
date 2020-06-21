const result = document.getElementById('dec');

function bin2Dec(e) {
  const input = bin.value;
  const regex = /[^0|1]/;

  if ( isNaN(input) || (regex.test(input)) ) {
    alert('Please enter a binary number!');
    location.reload();
  }
  result.value = parseInt(input, 2).toString(10);
}