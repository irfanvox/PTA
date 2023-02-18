// JavaScript code to validate form input
document.querySelector('form').addEventListener('submit', function(event) {
    var fileInput = document.querySelector('input[type="file"]');
    var languageSelect = document.querySelector('#language');
    var voiceSelect = document.querySelector('#voice');
  
    if (!fileInput.files[0]) {
      event.preventDefault();
      alert('Please select a file to upload');
    }
  
    if (languageSelect.selectedIndex == 0) {
      event.preventDefault();
      alert('Please select a language');
    }
  
    if (voiceSelect.selectedIndex == 0) {
      event.preventDefault();
      alert('Please select a voice');
    }
  });
  //JS code to download audionfile
  // Add download link to page
  var downloadLink = document.createElement('a');
  downloadLink.setAttribute('href', audioUrl);
  downloadLink.setAttribute('download', 'audio.mp3');
  downloadLink.innerHTML = 'Download Audiobook';
  document.getElementById('download-link-container').appendChild(downloadLink);


  // JavaScript code to display audio file once generated
  var audio = document.createElement('audio');
  audio.setAttribute('controls', 'controls');
  document.querySelector('body').appendChild(audio);
  audio.style.display = 'none';
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        audio.style.display = 'block';
        audio.setAttribute('src', 'data:audio/mpeg;base64,' + btoa(xhr.responseText));
      }
    };
  
    xhr.open('POST', 'convert.php', true);
