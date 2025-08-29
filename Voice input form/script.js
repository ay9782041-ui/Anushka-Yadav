function startRecognition(fieldId) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = function(event) {
        const speechResult = event.results[0][0].transcript;
        document.getElementById(fieldId).value = speechResult;
    };

    recognition.onerror = function(event) {
        alert('Error occurred in recognition: ' + event.error);
    };
}

// Optional: handle form submit
document.getElementById('voiceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!\n' +
          'Name: ' + document.getElementById('name').value + '\n' +
          'Email: ' + document.getElementById('email').value + '\n' +
          'Message: ' + document.getElementById('message').value);
});
