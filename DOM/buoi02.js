/*
Phần 2: Sự kiện trong DOM
1. Viết một hàm để hiển thị một thông báo "Bạn vừa nhấn vào nút!" khi người dùng click vào một nút.
2. Tạo một thẻ <input> và sử dụng sự kiện oninput để hiển thị nội dung mà người dùng nhập vào trong một thẻ <p>.
3. Viết code để khi di chuột qua một thẻ <div>, màu nền của nó sẽ chuyển sang màu xanh, và trở về màu trắng khi chuột rời đi.
4. Sử dụng sự kiện ondblclick để thay đổi văn bản của một thẻ <h2> khi nhấp đúp vào nó.
*/

// 1. Viết một hàm để hiển thị một thông báo "Bạn vừa nhấn vào nút!" khi người dùng click vào một nút.
function notification() {
    alert("Bạn vừa nhấn vào nút!.");
}

// 2.  Tạo một thẻ <input> và sử dụng sự kiện oninput để hiển thị nội dung mà người dùng nhập vào trong một thẻ <p>.
function displayInput() {
    const dataInput = document.getElementById("idInput").value;
    const spaceDataInput = " " + dataInput;
    document.getElementById("output").innerText += spaceDataInput;
}

// 3. Viết code để khi di chuột qua một thẻ <div>, màu nền của nó sẽ chuyển sang màu xanh, và trở về màu trắng khi chuột rời đi.
function mouseHover() {
    document.getElementById("hover-div").style.backgroundColor = "blue";
    document.getElementById('hover-div').style.color = 'white';
}

mouseUnHover = () => {
    document.getElementById("hover-div").style.backgroundColor = "white";
    document.getElementById('hover-div').style.color = 'black';
}

// 4. Sử dụng sự kiện ondblclick để thay đổi văn bản của một thẻ <h2> khi nhấp đúp vào nó.
doubleClickH2 = () => {
    document.getElementById("doubleClick").innerText = 'Đã thay đổi nội dung';
}