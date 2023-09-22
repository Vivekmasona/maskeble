const topBtn = document.querySelectorAll('#configs a');

// info

topBtn[0].addEventListener('click', function() {
  if (confirm("Do you want update this app")) {
    window.open("https://vivemasona.000webhostapp.com/Play?vfy=${data.url}");
  }
});

// Delete data

topBtn[1].addEventListener('click', function() {
  localStorage.clear();
  location.reload();
});

// Toggle Input Bar

topBtn[2].addEventListener('click', function() {
  document.querySelector('input').classList.toggle('hidden');
});

// Toggle Themes

topBtn[3].addEventListener('click', function() {
  document.querySelector('#themes').classList.toggle('hidden');
});
