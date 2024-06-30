document.getElementById('check-btn').onclick = function handleCheckButtonClick() {
    const input = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');
  
    if (input === '') {
      alert('Please input a value');
      return;
    }
  
    const cleanedInput = cleanInput(input);
    const isPalindrome = checkPalindrome(cleanedInput);
  
    if (isPalindrome) {
      resultDiv.textContent = `${input} is a palindrome`;
    } else {
      resultDiv.textContent = `${input} is not a palindrome`;
    }
  };
  
  function cleanInput(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  }
  
  function checkPalindrome(str) {
    return str === str.split('').reverse().join('');
  }