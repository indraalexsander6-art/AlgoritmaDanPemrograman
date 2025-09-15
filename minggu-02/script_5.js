document.getElementById("tombolBalik").addEventListener("click", function() {
    let kata = document.getElementById("inputKata").value;
    let stack = [];
    
    for (let i = 0; i < kata.length; i++) {
      stack.push(kata[i]);
    }
  
    let kataTerbalik = "";
    while (stack.length > 0) {
      kataTerbalik += stack.pop();
    }
  
    document.getElementById("hasil").innerText = kataTerbalik;
  });
  