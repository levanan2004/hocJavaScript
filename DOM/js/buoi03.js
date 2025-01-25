/**
 Phần 3: Thao tác thêm và xóa phần tử
1. Viết một đoạn mã để thêm một phần tử <li> mới vào danh sách <ul> mỗi khi nhấn nút "Thêm".
2. Viết code để xóa phần tử <li> cuối cùng trong danh sách <ul> khi nhấn nút "Xóa".
3. Làm thế nào để thay thế một phần tử <p> bằng một thẻ <h3> có nội dung "Đã thay thế!"?
 */

// 1. Viết một đoạn mã để thêm một phần tử <li> mới vào danh sách <ul> mỗi khi nhấn nút "Thêm".
AddLi = () => {
    const newli = document.createElement('li');
    newli.textContent = 'Đã thêm 1 thẻ li vào danh sách'
    document.getElementById('idUL').appendChild(newli);
}

// 2. Viết code để xóa phần tử <li> cuối cùng trong danh sách <ul> khi nhấn nút "Xóa".
RemoveLi = () => {
    // lấy phần tử con cuối  cùng trong ul
    const li = document.getElementById('idListItem').lastElementChild;
    // Xóa phần tử con đã lấy ra
    document.getElementById('idListItem').removeChild(li);
}

// 3. Làm thế nào để thay thế một phần tử <p> bằng một thẻ <h3> có nội dung "Đã thay thế!"?
replaceElement = () => {
    const theP = document.getElementById("theP");
    theP.outerHTML = '<h3>Đã thay thế!</h3>';
}