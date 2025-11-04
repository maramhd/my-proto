/* 
   script.js — مسؤول عن:
   - قائمة الجوال (menu toggle)
   - تفعيل reveal عند التمرير والتحميل
   - تغيير حالة navbar عند التمرير (scrolled)
*/
/*  1) MENU TOGGLE (للسواقة على الشاشات الصغيرة)  */
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
/* 
   - عند الضغط على زر القائمة (☰) نضيف/نزيل كلاس active على قائمة الروابط لعرضها في الموبايل. */

/*  2) NAVBAR SCROLLED (تغيير لون/حجم الشريط عند النزول)  */
const navbar = document.querySelector('.navbar');

function handleNavbarScroll() {
  if (!navbar) return;
  // أضف كلاس scrolled عندما يتجاوز التمرير 60 بكسل
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}
window.addEventListener('scroll', handleNavbarScroll);
window.addEventListener('load', handleNavbarScroll);
/* شرح:
   - هذه الدالة تضيف .scrolled لتطبيق تغييرات الـCSS عندما تنزل الصفحة. */

/* ===== 3) REVEAL ON SCROLL (كشف العناصر مع التأخير) ===== */
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const offset = 120; // المسافة من الأسفل ليبدأ الكشف
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - offset) {
      el.classList.add('show');
    }
  });
}

// نفذ مرة عند التحميل ثم عند التمرير
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);
/* شرح:
   - كل عنصر يحمل الكلاس .reveal سيحصل على .show عند دخوله نطاق العرض،
     مما يفعل التحول والانتقال المحدد في CSS. */
