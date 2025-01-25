/* 
Phần 4: Làm việc với lớp CSS
1. Viết code để thêm lớp CSS active vào một thẻ <div> khi nhấn nút.
2. Làm thế nào để bật/tắt (toggle) lớp CSS highlight của một thẻ <p> mỗi khi người dùng nhấn nút "Đổi màu"?
3. Viết code để kiểm tra xem một phần tử có lớp CSS hidden hay không.
*/

// 1. Viết code để thêm lớp CSS active vào một thẻ <div> khi nhấn nút.
// + Lấy tham chiếu tới thẻ div và nút
const divElement = document.getElementById("myDiv");
const buttonElement = document.getElementById("myButton");

// + Thêm sự kiện click cho nút
buttonElement.addEventListener("click", function () {
    // Thêm hoặc xóa lớp active khi nút được nhấn
    divElement.classList.add("active")
});

// 2. Làm thế nào để bật/tắt (toggle) lớp CSS highlight của một thẻ <p> mỗi khi người dùng nhấn nút "Đổi màu"?
const divElement2 = document.getElementById("myDiv2");
const buttonElement2 = document.getElementById("myButton2");

// + Thêm sự kiện click cho nút
buttonElement2.addEventListener("click", function () {
    // + Thêm hoặc xóa lớp active khi nút được nhấn
    divElement2.classList.toggle("highlight")
});

// 3. Viết code để kiểm tra xem một phần tử có lớp CSS hidden hay không.
const myDiv3 = document.getElementById('myDiv3');
const myButton3 = document.getElementById('myButton3');
myButton3.addEventListener('click', function () {
    if (myDiv3.classList.contains("hidden")) {
        alert("Thẻ div có lớp hidden");
    } else {
        alert("Thẻ div không có lớp hidden");
    }
});