/*
Phần 1: Truy cập và thao tác DOM cơ bản
1. Làm cách nào để truy cập phần tử có id="myDiv" trong DOM? Viết đoạn mã JavaScript thực hiện điều đó.
2. Viết code để thay đổi văn bản của thẻ <h1> có nội dung "Hello World" thành "Welcome to JavaScript DOM".
4. Viết code để thêm nội dung "Click vào đây!" vào bên trong một thẻ <p> có id="myParagraph".
5. Làm thế nào để thay đổi màu nền của một phần tử bằng JavaScript?
 */

// 1.Làm cách nào để truy cập phần tử có id="myDiv" trong DOM? Viết đoạn mã JavaScript thực hiện điều đó. 
const cau1 = document.getElementById("myDiv").innerText;
console.log("Đáp án: ", cau1);

// 2. Viết code để thay đổi văn bản của thẻ <h1> có nội dung "Hello World" thành "Welcome to JavaScript DOM".
function changeText() {
    document.getElementsByTagName("h1")[0].innerText = 'Welcome to JavaScript DOM';
}

// 3. Làm thế nào để thay đổi thuộc tính src của một thẻ <img>?
function changeImage() {
    document.getElementById("idImage").src = 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
}

// 4. Viết code để thêm nội dung "Click vào đây!" vào bên trong một thẻ <p> có id="myParagraph".
function addContent() {
    document.getElementById("myParagraph").innerText = 'Click vào đây!';
}

//5. Làm thế nào để thay đổi màu nền của một phần tử bằng JavaScript?
function changeColor() {
    document.getElementsByTagName("h2")[0].style.color = 'green';
}