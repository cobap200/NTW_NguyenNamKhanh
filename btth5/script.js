// In ra console
console.log("Chào mừng đến với JS!");

// Hàm chào
function sayHello() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("result").innerText = "Xin chào, " + name + "!";
}

// Hàm tính tổng
function addNumbers() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("sumResult").innerText = "Tổng: " + sum;
}