// 1. JS - MENU BUTTON
// Lấy phần tử HTML có id là menu-btn
const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
// Tìm phần tử <i> bên trong menu-btn.
const menuBtnIcon = menuBtn.querySelector("i")


// Gắn sự kiện "click" cho menuBtn. Khi người dùng nhấn nút menu, đoạn code bên trong {} sẽ chạy.

// navLinks.classList.toggle("open"); - Khi nhấn nút menu, dòng này sẽ thêm hoặc gỡ class open cho phần tử navLinks. 
// Theo css, khi có class open, menu sẽ hiển thị trượt xuống từ dưới lên. 
// Còn khi không có class open, thì menu sẽ ẩn đi.

// const isOpen = navLinks.classList.contains("open"); - Kiểm tra xem hiện tại menu đang mở hay đóng (dựa vào class open có tồn tại hay không).

// menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line"): 
// - Nếu menu đang mở (isOpen = true) → thay icon sang dấu X (ri-close-line).
// - Nếu menu đang đóng → hiện lại icon menu ba gạch (ri-menu-line).
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// navLinks.classList.remove("open"); - khi nhấn vào phần tử ul hoặc li bên trong chỗ nav này thì sẽ xóa class open của navLinks đi.
// Điều này đồng nghĩa với việc là: ẩn navLinks
// Đồng thời đổi class chỗ menuBtnIcon lại thành menu, chứ k phải x như khi bấm vào.
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})


// 2. JS - SCROLL ELEMENT HEADER
// Code cuộn các phần tử, dùng JS này "scrollrevealjs" nhập vào 
// distance: "50px",      // Di chuyển 50px trong lúc hiện (distance: Khoảng cách phần tử sẽ "trượt" trong lúc hiện ra.)
// origin: "bottom",      // Hiệu ứng bắt đầu từ dưới lên (origin: Hướng xuất phát hiệu ứng (top, bottom, left, right))
// duration: 1000,        // Thời gian chạy hiệu ứng: 1000ms (1 giây)
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1500,
};

// Kích hoạt hiệu ứng cho ảnh
// .header__image img	Selector đến hình ảnh trong phần header
// ...scrollRevealOption	Gọi lại cấu hình mặc định đã tạo
// origin: "right"	Ghi đè origin mặc định thành từ phải trượt vào
ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right"
});


// delay: 500 - đợi 0.5 giây sau khi phần tử vào khung nhìn mới kích hoạt hiệu ứng
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
  });
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__form form", {
  ...scrollRevealOption,
  origin: "top",
});

// interval: 500: các phần tử .about__card sẽ xuất hiện lần lượt, cách nhau 500ms mỗi cái → tạo hiệu ứng "xuất hiện dần".
ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 500,
});


// 3. JS - CLICK BUTTON, SHOW INFO BELLOW & HIGHT LIGHT BUTTON
// Toàn bộ mục đích của đoạn code: Giúp người dùng bấm vào nút tab nào thì:
// Nút đó được làm nổi bật (class="active"),
// Và phần nội dung tương ứng cũng được hiển thị (.tab__content tương ứng sẽ có class="active").


// 3.1 Tìm phần tử với class tương ứng.
// - Tìm 1 phần tử có class .deals__tabs
const tabs = document.querySelector(".deals__tabs");
// - Tìm tất cả phần tử có class 
const tabContents = document.querySelectorAll(
  ".deals__container .tab__content"
);
// 3.2 Gắn sự kiện click vào toàn bộ vùng "tabs" (biến đã đặt trước đó)
// e là đối tượng sự kiện, e.target là phần tử bạn vừa click.
tabs.addEventListener("click", (e) => {
// 3.3 Xử lý button: Duyệt qua từng nút con bên trong tabs (tức là từng <button>).
// So sánh data-id của nút con đang duyệt với data-id của nút vừa bấm:
// Nếu giống: thêm class "active" để làm nổi bật.
// Nếu không: loại bỏ "active".
  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
// 3.4 Xử lý hiển thị thông tin bên dưới. Duyệt qua từng phần nội dung .tab__content.
// Nếu item.id trùng với data-id của nút vừa click:
// Thêm "active" để hiện phần nội dung đó.
// Còn lại thì ẩn đi (remove("active")).
  tabContents.forEach((item) => {
    if (item.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

// 4. JS - SCROLL ELEMENT CHOSE
ScrollReveal().reveal(".choose__container img", {
  ...scrollRevealOption,
  origin: "left"
});

ScrollReveal().reveal(".choose__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".choose__container .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose__card", {
  duration: 1000,
  delay: 1500,
  interval: 300,
});


// 5. JS - SCROLL ELEMENT SUBSCRIBE
ScrollReveal().reveal(".subscribe__image img", {
  ...scrollRevealOption,
  origin: "right"
});

ScrollReveal().reveal(".subscribe__content h2", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".subscribe__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

// 6. JS - SWIPER - THANH TRƯỢT CHO ĐÁNH GIÁ CỦA KHÁCH HÀNG
// new Swiper(".swiper", {...}) --> Tạo một instance Swiper mới trên phần tử có class .swiper (đây là container chứa tất cả các slide)
// 
const swiper = new Swiper(".swiper", {
  // Hiển thị 3 slide cùng lúc trên màn hình
  slidesPerView: 3,
  // Khoảng cách giữa các slide là 20px
  spaceBetween: 20,
  // Bật chế độ lặp vô tận – khi đến slide cuối sẽ quay lại slide đầu
  loop: true,
});

