const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function (params) {
    // Karena sidebar di awal belum ada fungsi show-sidebar, maka perintah yang dijalankan adalah menambah fungsi show-sidebar
    // Setelah muncul sidebar, maka sidebar telah memiliki fungsi show-sidebar sehingga perintah yang dijalankan adalah menghilangkan show-sidebar

    // if (sidebar.classList.contains("show-sidebar")) {
    //     sidebar.classList.remove("show-sidebar");
    // } else {
    //     sidebar.classList.add("show-sidebar");
    // }

    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function (params) {
    sidebar.classList.remove("show-sidebar");
});