"use strict";const body=document.querySelector("body");window.addEventListener('load',()=>{const bgImg=document.querySelectorAll(".bg-img");for(i=0;i<bgImg.length;i++){let bgImgEl=bgImg[i];if(bgImgEl.classList.contains('bg-top')){bgImgEl.parentNode.classList.add("b-top");}
else if(bgImgEl.classList.contains('bg-bottom')){bgImgEl.parentNode.classList.add("b-buttom");}
else if(bgImgEl.classList.contains('bg-center')){bgImgEl.parentNode.classList.add("b-center");}
else if(bgImgEl.classList.contains('bg-left')){bgImgEl.parentNode.classList.add("b-left");}
else if(bgImgEl.classList.contains('bg-right')){bgImgEl.parentNode.classList.add("b-right");}
if(bgImgEl.classList.contains('blur-up')){bgImgEl.parentNode.classList.add("blur-up","lazyload");}
if(bgImgEl.classList.contains('bg_size_content')){bgImgEl.parentNode.classList.add("b_size_content");}
bgImgEl.parentNode.classList.add("bg-size");const bgSrc=bgImgEl.src;bgImgEl.style.display='none';bgImgEl.parentNode.setAttribute("style",`
        background-image: url(${bgSrc});
        background-size:cover;
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        `);}
const productCard2=document.querySelectorAll(".product-card2")
productCard2?.forEach(el=>{const primaryImg=el.querySelector(".primary-img").querySelector("img");const afterImg=el.querySelector(".after-img");afterImg.src=primaryImg.src})});const lang=document.querySelectorAll(".onhover-show-div .lang")
const languageSelected=document.querySelector("#languageSelected span")
for(var i=0;i<lang.length;++i){lang[i].addEventListener('click',function(){languageSelected.innerHTML=this.innerHTML;})}
const unit=document.querySelectorAll(".onhover-show-div .unit")
const unitSelected=document.querySelector("#unitSelected span")
for(var i=0;i<unit.length;++i){unit[i].addEventListener('click',function(){unitSelected.innerHTML=this.innerHTML;})}
const cartButton=document.querySelector(".cart-button");const cartBackButton=document.querySelector(".back-cart");const showCard=document.querySelector(".shopingbag .onhover-show-div");const overlay=document.querySelector(".overlay-general");const overlayCart=document.querySelector(".overlay-cart");if(window.matchMedia("(max-width: 768px)").matches){cartButton?.addEventListener('click',function(){showCard.classList.add("show");overlayCart.classList.add("show");});const backCardSidemenu=function(){showCard.classList.remove("show");overlayCart.classList.remove("show");}
cartBackButton?.addEventListener('click',backCardSidemenu)
overlayCart?.addEventListener('click',backCardSidemenu)}
const footerButton=document.querySelectorAll(".nav-footer h5");const showNav=document.querySelector(".nav");for(var i=0;i<footerButton.length;++i){footerButton[i].addEventListener('click',function(){this.parentNode.classList.toggle('open');})}
const thumbEl=document.querySelectorAll(".product-card .thumbnail-img .thumb");for(var i=0;i<thumbEl.length;++i){thumbEl[i].addEventListener("click",function(){const parentEl=this.parentElement.children;[...parentEl].forEach((el)=>{el.classList.remove("active");})
this.classList.add("active");var imgSrc=this.querySelector("img").src;this.closest(".product-card").querySelector(".primary-img").style.backgroundImage=`url('${imgSrc}')`;});};const searchButton=document.querySelector(".search-button");const searchFull=document.querySelector(".search-full");searchButton?.addEventListener('click',function(){searchFull.classList.add("open");});window.addEventListener('load',()=>{const searchType=document.querySelector(".search-type");searchType?.addEventListener('click',function(){this.parentNode.parentNode.classList.add("show");});const closeSearch=document.querySelector(".close-search");closeSearch?.addEventListener('click',function(){const classes=["open","show"];classes.forEach(c=>{if(searchFull.classList.contains(c)){searchFull.classList.remove(c);}})});});window.addEventListener('load',()=>{const addToCartButton=document.querySelectorAll(".addtocart-btn ");addToCartButton.forEach((el)=>{el.addEventListener("click",function(){document.querySelector(".addToCart").classList.add("show");setTimeout(()=>{document.querySelector(".addToCart").classList.remove("show")},4000);})});const wishListButton=document.querySelectorAll(".wishlist-btn ");wishListButton.forEach((el)=>{el.addEventListener("click",function(){document.querySelector(".addToWishlist").classList.add("show");setTimeout(()=>{document.querySelector(".addToWishlist").classList.remove("show")},4000);})})});const radio=document.querySelectorAll(".radio-input");for(const radioEl of radio){const parentAddressBox=document.querySelectorAll(".address-box");if(parentAddressBox.length!==0){radioEl?.addEventListener("change",function(){[...parentAddressBox].forEach((el)=>{el.classList.remove("checked")})
this.closest(".address-box")?.classList.add("checked")})}}
const sidebarToggle=function(showBtn,sidebar,overlay,backBtn){showBtn?.addEventListener("click",function(){sidebar.classList.add("show-menu");overlay.classList.add("show");const removeFun=function(){sidebar.classList.remove("show-menu");overlay.classList.remove("show");}
backBtn.addEventListener("click",removeFun)
overlay.addEventListener("click",removeFun)});}
const settingMenuBtn=document.querySelector(".setting-menu");const sideBarEl=document.querySelector(".side-bar");const backBtnEl=document.querySelector(".back-side");sidebarToggle(settingMenuBtn,sideBarEl,overlay,backBtnEl);const filterOptionBtn=document.querySelector(".filter-btn");const shopSideBar=document.querySelector(".sidebar-controll");const backShopBtn=document.querySelector(".back-box");sidebarToggle(filterOptionBtn,shopSideBar,overlay,backShopBtn);const filterTopBtn=document.querySelector(".filter-top-btn");const filterTopSidebar=document.querySelector(".filter-top-wrapper");const filterTopBackBtn=document.querySelector(".filter-top-back");sidebarToggle(filterTopBtn,filterTopSidebar,overlay,filterTopBackBtn);const actionBlogEl=document.querySelectorAll(".action-box .like-btn");actionBlogEl.forEach(el=>{el.addEventListener("click",function(){const parentEl=this.closest(".action-box").querySelectorAll(".like");parentEl.forEach(el=>{el.classList.remove("active")})
el.parentNode.classList.add("active");})});const selectList=document.querySelectorAll(".select-vallist");selectList.forEach(function(el){el.addEventListener("click",function(e){e.preventDefault();const clicked=e.target.closest(".select-list")
if(!clicked)return;const text=clicked.textContent
const btnChangeText=this.closest(".dropdown").querySelector(".select-showval span");btnChangeText.textContent=text})})
const compareTable=document.querySelector(".table-compare")
compareTable?.addEventListener("click",function(e){const clicked=e.target.closest(".remove")
if(!clicked)return
const th=[...clicked.closest("tr").children]
const index=th.indexOf(clicked)
const tableTd=clicked.closest(".table-compare").querySelectorAll("tbody tr ")
tableTd.forEach(tr=>{const td=tr.querySelectorAll("td")
td[index].style.display="none";})
th[index].style.display="none";return;})
const tapTopBtn=document.querySelector(".tap-to-top-button")
const tapTopTopBox=document.querySelector(".tap-to-top-box")
tapTopBtn?.addEventListener("click",function(){window.scroll({top:0,behavior:'smooth'});})
if(tapTopTopBox){window.onscroll=function(){if(pageYOffset>=1000){tapTopTopBox.classList.remove("hide")}else{tapTopTopBox.classList.add("hide")}}}
function constrainUserInput(){const inputNumber=document.querySelectorAll("input[type='number']");inputNumber?.forEach(function(el){el.addEventListener("keypress",function(e){const maxLength=+el?.getAttribute("maxlength")
if(maxLength){const value=el.value
if(value.length>=maxLength){el.value=value.substring(0,(el.maxLength-1))}}})})}
constrainUserInput();const cookiesContainer=document.querySelector(".cookie-bar");const cookiesAcceptBtn=document.querySelector(".cookies-accept")
window.addEventListener("load",function(){setTimeout(()=>{cookiesContainer?.classList.add("show")
if(cookiesContainer?.classList.contains("show")){setTimeout(()=>{cookiesContainer?.classList.remove("show")},10000);}
cookiesAcceptBtn?.addEventListener("click",function(){cookiesContainer?.classList.remove("show")})},10000);})
const wishlistProduct=document.querySelectorAll(".product-wishlist")
wishlistProduct?.forEach(el=>{const deleteButton=el.querySelector(".delete-button");deleteButton.addEventListener("click",function(){this.closest(".col").style.display="none"})})
const cartBagProduct=document.querySelector(".shopingbag")
const cartRemoveBtn=cartBagProduct?.querySelectorAll(".remove-cart")
cartRemoveBtn?.forEach(el=>{el.addEventListener("click",function(){this.closest(".cart-card").style.display="none"})})
window.addEventListener("load",function(){if('serviceWorker'in navigator){navigator.serviceWorker.register('sw.js');}})