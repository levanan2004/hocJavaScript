/*
Phần 5: Duyệt và quản lý cây DOM
1. Làm cách nào để truy cập phần tử cha (parentNode) của một thẻ <span>?
2. Viết code để duyệt qua tất cả các phần tử con (childNodes) của một thẻ <ul> và in nội dung của từng phần tử ra console.
3. Làm thế nào để truy cập phần tử anh em (nextSibling) của một thẻ <div>?
*/

// câu 1: Làm cách nào để truy cập phần tử cha (parentNode) của một thẻ <span>?
const spanElement = document.getElementById("mySpan");
const buttonElement = document.getElementById("getParentButton");

buttonElement.addEventListener("click", function () {
    // Truy cập phần tử cha của thẻ span
    const parentElement = spanElement.parentNode;
    alert("Phần tử cha của thẻ span là: " + parentElement.tagName);
});

// Câu 2: Viết code để duyệt qua tất cả các phần tử con (childNodes) của một thẻ <ul> và in nội dung của từng phần tử ra console.
const myList = document.getElementById('myList');
const buttonPrint = document.getElementById('printButton');
buttonPrint.addEventListener('click', function () {
    myList.childNodes.forEach((item) => {
        if (item.nodeType === Node.ELEMENT_NODE) {
            console.log(item.textContent.trim());
        }
    })
});