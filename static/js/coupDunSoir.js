// declaration variables globales
var presBool = 0,
    reservationBool = 0,
    pastEventBool = 0,
    fullScreenBool = false,
    qu1 = 1,
    qu2 = 1,
    qu3 = 1,
    qu4 = 1,
    qu5 = 1,
    qu6 = 1,
    qu7 = 1;

// ====================================================
// ========== effet texte de la page d'accueil ========
// ====================================================

function getRandomIntInclusive(min, max) {
    "use strict";
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init() {
    "use strict";
    presBool = true;
    reservationBool = false;
    pastEventBool = false;
    
    var repertoire = ["fruit1_low.jpg", "fruit2_low.jpg", "fruit3_low.jpg", "fruit4_low.jpg", "fruit5_low.jpg", "fruit6_low.jpg", "fruit7_low.jpg"],
        num = getRandomIntInclusive(0, 6);
    
    document.getElementById("containerLeft").style.background = "url(./static/img/accueil/" + repertoire[num] + ")";
    document.getElementById("containerLeft").style.backgroundRepeat = "no-repeat";
    document.getElementById("containerLeft").style.backgroundSize = "cover";
    document.getElementById("containerLeft").style.backgroundPosition = "center center";
    
}



// ====================================================
// ========= ecriture des articles / projets ==========
// ====================================================
function write(tab, res, i) {
    "use strict";
    var page = document.location.href.split("/");
    page = page[page.length - 1].split(".")[0];
    
    
    if (page === "presentation") {
        if (tab[i].photo === "") {
            res += '<div class="art col-md-12" ><h3>' + tab[i].title + ' </h3><p>' + tab[i].description + '</p></div>';
        } else {
            res += '<div class="art col-md-12" ><img src="./img/thumbnail/' + tab[i].photo + '"/><h3>' + tab[i].title + ' </h3><p>' + tab[i].description + '</p></div>';
        }
            
        
    } else if (page === "home" && tab[i].title === "prochain événement") {
        res += '<div class="art col-md-12" ><a href="reservation.html"><img src="./img/thumbnail/' + tab[i].photo + '"/><h3>' + tab[i].title +
                ' </h3><p>' + tab[i].description + '</p></a></div>';
        
    } else {
        if (tab[i].photo === "") {
            res += '<div class="art col-md-12" ><a href="project.html" onClick="saveArtInfo(\'' + tab[i].title + '\',\'' + tab[i].sutitle + '\',\'' + tab[i].textuel + '\',\'' +
                tab[i].photo + '\',\'' + tab[i].photobig + '\',\'' + tab[i].photosmall  + '\',\'' + tab[i].category  + '\',\'' + tab[i].phototitle + '\',\'' +
                tab[i].photosubtitle  +  '\');"><h3>' + tab[i].title +
                ' </h3><p>' + tab[i].description + '</p></a></div>';
        } else {
            res += '<div class="art col-md-12" ><a href="project.html" onClick="saveArtInfo(\'' + tab[i].title + '\',\'' + tab[i].sutitle + '\',\'' + tab[i].textuel + '\',\'' +
                tab[i].photo + '\',\'' + tab[i].photobig + '\',\'' + tab[i].photosmall  + '\',\'' + tab[i].category  + '\',\'' + tab[i].phototitle + '\',\'' +
                tab[i].photosubtitle  +  '\');"><img src="./img/thumbnail/' + tab[i].photo + '"/><h3>' + tab[i].title +
                ' </h3><p>' + tab[i].description + '</p></a></div>';
        }
    }
    return res;
}

function writeLeftSideArticle(tab, res) {
    "use strict";
    var i,
        page = document.location.href.split("/");
    page = page[page.length - 1].split(".")[0];
   
    for (i = 0; i < (tab.length / 2); (i += 1)) {
       
        res = write(tab, res, i);
        
        
    }
   
    document.getElementById("articleLeft").innerHTML = res;
}

function writeRightSideArticle(tab, res) {
    "use strict";
    var i,
        page = document.location.href.split("/");
    page = page[page.length - 1].split(".")[0];
    
    
    for (i =  Math.ceil(tab.length / 2); i < tab.length; (i = i + 1)) {
        
        res = write(tab, res, i);
        
    }
   
    document.getElementById("articleRight").innerHTML = res;
}

function writeCategoryPres(tab, res) {
    "use strict";
    var i;
    for (i = tab.length - 1; i < tab.length; (i += 1)) {
        res += '<div class="presArticle col-md-12" ><h3>' + tab[i].title + ' </h3><p>' + tab[i].description + '</p></div>';
    }
    document.getElementById("presArticle").innerHTML = res;
    
    document.getElementById("titleWeb").innerHTML = tab[0].phototitlecat + "<br><span>" + tab[0].photosubtitlecat + "</span>";
       
}


// ====================================================
// ============== Local Storage gestion ===============
// ====================================================
function saveArtInfo(title, subtitle, textuel, photo, bigphoto, smallphoto, category, phototitle, photosubtitle) {
    "use strict";
    localStorage.setItem("titleArticle", title);
    localStorage.setItem("subtitle", subtitle);
    localStorage.setItem("textuel", textuel);
    localStorage.setItem("photo", photo);
    localStorage.setItem("photoSmall", smallphoto);
    localStorage.setItem("photoBig", bigphoto);
    localStorage.setItem("category", category);
    localStorage.setItem("phototitle", phototitle);
    localStorage.setItem("photosubtitle", photosubtitle);
    

}

function changeBackground(nameImage) {
    "use strict";
    var ele = document.getElementById("projectLeft").style;
    ele.background = 'url("./img/full/' + nameImage + '") ';
    ele.backgroundPosition = "center center";
    ele.backgroundRepeat = "no-repeat";
    ele.backgroundSize = "cover";
   
}

// ====================================================
// ============= Initialisation des pages =============
// ====================================================
function posBackground(element) {
    "use strict";
    element.style.backgroundPosition = "center center";
    element.style.backgroundRepeat = "no-repeat";
    element.style.backgroundSize = "cover";
}
function faqPage() {
    "use strict";
    var leftContainer = document.getElementById("containerLeft"),
        menu = document.getElementById("menu-toggle").style;
    leftContainer.style.background = 'url("./img/FAQ_low.jpg")';
    menu.color = "white";
    posBackground(leftContainer);
    
}



function pastEventPage() {
    "use strict";
    
    var leftContainer = document.getElementById("containerLeft"),
        menu = document.getElementById("menu-toggle").style;
    leftContainer.style.background = "white";
    leftContainer.style.background = 'url("./img/past_events_low/Gisli_grande_gauche_low.jpg")';
    leftContainer.style.backgroundRepeat = "no-repeat";
    leftContainer.style.backgroundSize = "cover";
    leftContainer.style.backgroundPosition = "center center";
    menu.color = "white";
    
    
}

function reservationPage() {
    "use strict";
    var leftContainer = document.getElementById("containerLeft"),
        menu = document.getElementById("menu-toggle").style;
    leftContainer.style.background = 'url("./img/accueil/fruit3_low.jpg")';
    menu.color = "white";
    posBackground(leftContainer);
    
}

function contactPage() {
    "use strict";
    var leftContainer = document.getElementById("containerLeft"),
        menu = document.getElementById("menu-toggle").style;
    leftContainer.style.background = 'url("./img/contact_low.jpg")';
    menu.color = "white";
    posBackground(leftContainer);
}

function partnerPage() {
    "use strict";
    var leftContainer = document.getElementById("containerLeft"),
        menu = document.getElementById("menu-toggle").style;
    leftContainer.style.background = 'url("./img/contact_low.jpg")';
    menu.color = "white";
    posBackground(leftContainer);
}

function presPage() {
    "use strict";
    var leftContainer = document.getElementById("containerLeft"),
       
        menu = document.getElementById("menu-toggle").style,
    
        repertoire = ["spatule1_low.jpg", "spatule2_low.jpg", "spatule3_low.jpg", "spatule4_low.jpg", "spatule5_low.jpg"],
        num = getRandomIntInclusive(0, 4);
    
    leftContainer.style.background = "url(./img/presentation/" + repertoire[num] + ")";
    leftContainer.style.backgroundRepeat = "no-repeat";
    leftContainer.style.backgroundSize = "cover";
    leftContainer.style.backgroundPosition = "center center";
    
    
    menu.color = "white";
    posBackground(leftContainer);
}
function active_car(ele, i) {
    "use strict";
    var it,
        all_items = document.getElementsByClassName("item"),
        class_temp;
    
    
    for (it = 0; it < all_items.length; it += 1) {
        class_temp = all_items[it].classList;
        
        if (class_temp.contains("active")) {
            all_items[it].classList.remove("active");
        }
        
    }
    
    document.getElementById("element" + i).classList.add("active");
    
    
  
}
function initProject2() {
    "use strict";
    var ele = document.getElementById("projectLeft"),
        smallphotos =  localStorage.getItem("photoSmall").split(","),
        sentence = "",
        caroussel = '',
        compt = 0,
        i,
        temp = 0;
    ele.style.background = 'url("./img/full/' + localStorage.getItem("photo") + '") ';
    ele.style.backgroundPosition = "center center";
    ele.style.backgroundRepeat = "no-repeat";
    ele.style.backgroundSize = "cover";
    document.getElementById("titleProjectHeader").innerHTML = localStorage.getItem("titleArticle");
    document.getElementById("subTitleProject").innerHTML = localStorage.getItem("subtitle");
    
    document.getElementById("textProject").innerHTML = localStorage.getItem("textuel");
    
    sentence += '';
    if (localStorage.getItem("titleArticle") === "Grand Nord") {
        sentence += '<div class="col-md-12"> <video  controls> <source src="./video/GISLI_OURS_v22.mp4" type="video/mp4"> Your browser does not support the video tag.</video><span style="padding-top:-4vh;">vidéo réalisée par <a target="_blank" href="http://messieurs.ch/fr/">Messieurs.ch</a><br><br></span></div> ';
    }
    
    for (i = 0; i < smallphotos.length; i += 1) {
        temp = i;
        if (i % 4 === 0) {
            sentence += '<div class="row">';
        }
        sentence += '<div class="col-md-3 col-sm-3 col-lg-3 col-xl-3"  data-toggle="modal" data-target="#myModal" data-local="#myCarousel" onclick="active_car(this, \'' + temp + '\' );"><img class="img-thumbnail" src="./img/full/' + smallphotos[temp] + '"></div>';
       
        caroussel += '<div class="active item" id="element' + temp + '"><img src="./img/full/' + smallphotos[temp] + '" alt="image de l evenement"> </div>';
        if (i % 4 === 3) {
            sentence += '</div>';
        }
    }
        
    sentence += '';
    
    document.getElementById("photoDispo").innerHTML = sentence;
    document.getElementById("caroussel_value").innerHTML = caroussel;
    
    document.getElementById("titlePage").innerHTML = "Coup d'un Soir - " + localStorage.getItem("titleArticle");
    document.getElementById("menu-toggle").style.color = "white";
    
}

function initProject() {
    "use strict";
    var ele = document.getElementById("projectLeft"),
        smallphotos =  localStorage.getItem("photoSmall").split(","),
        sentence = "",
        sentence_temp = '',
        sentence1 = '<div class="col-md-3 col-sm-6 col-lg-3 col-xs-6">',
        sentence2 = '<div class="col-md-3 col-sm-6 col-lg-3 col-xs-6">',
        sentence3 = '<div class="col-md-3 col-sm-6 col-lg-3 col-xs-6">',
        sentence4 = '<div class="col-md-3 col-sm-6 col-lg-3 col-xs-6">',
        caroussel = '',
        compt = 0,
        i,
        temp = 0;
    ele.style.background = 'url("./img/full/' + localStorage.getItem("photo") + '") ';
    ele.style.backgroundPosition = "center center";
    ele.style.backgroundRepeat = "no-repeat";
    ele.style.backgroundSize = "cover";
    document.getElementById("titleProjectHeader").innerHTML = localStorage.getItem("titleArticle");
    document.getElementById("subTitleProject").innerHTML = localStorage.getItem("subtitle");
    
    document.getElementById("textProject").innerHTML = localStorage.getItem("textuel");
    
    sentence += '';
    if (localStorage.getItem("titleArticle") === "Grand Nord") {
        sentence += '<div class="col-md-12"> <video  controls> <source src="./video/GISLI_OURS_v22.mp4" type="video/mp4"> Your browser does not support the video tag.</video><span style="padding-top:-4vh;">vidéo réalisée par <a target="_blank" href="http://messieurs.ch/fr/">Messieurs.ch</a><br><br></span></div> ';
    }
    
    for (i = 0; i < smallphotos.length; i += 1) {
        temp = i;
        
       sentence_temp = '<div class="row"><div class="col-lg-12"  data-toggle="modal" data-target="#myModal" data-local="#myCarousel" onclick="active_car(this, \'' + temp + '\' );"><img class="img-thumbnail" src="./img/full/' + smallphotos[temp] + '"></div></div>'
        if (temp % 4 === 0) {
            sentence1 += sentence_temp;
        }
        if (temp % 4 === 1) {
            sentence2 += sentence_temp;
        }
        if (temp % 4 === 2) {
            sentence3 += sentence_temp;
        }
        if (temp % 4 === 3) {
            sentence4 += sentence_temp;
        }
        
        
       
        caroussel += '<div class="active item" id="element' + temp + '"><img src="./img/full/' + smallphotos[temp] + '" alt="image de l evenement"> </div>';
        
    }
        
    sentence += sentence1 + '</div>' ;
    sentence += sentence2+ '</div>' ;
    sentence += sentence3+ '</div>' ;
    sentence += sentence4+ '</div>' ;
    
    document.getElementById("photoDispo").innerHTML = sentence;
    document.getElementById("caroussel_value").innerHTML = caroussel;
    
    document.getElementById("titlePage").innerHTML = "Coup d'un Soir - " + localStorage.getItem("titleArticle");
    document.getElementById("menu-toggle").style.color = "white";
    
}


// ====================================================
// ====== Tri du json pour obtenir que categorie ======
// ====================================================
function getPastEvent(element) {
    "use strict";
    return element.category === "pastEvent";
}

function getreservation(element) {
    "use strict";
    return element.category === "reservation";
}

function getPres(element) {
    "use strict";
    return element.category === "pres";
}
function getFaq(element) {
    "use strict";
    return element.category === "faq";
}

function getPartner(element) {
    "use strict";
    return element.category === "partenaire";
}

function getContact(element) {
    "use strict";
    return element.category === "contact";
}

function getIndex(element) {
    "use strict";
    if (presBool < 1 && element.category === "pres") {
        presBool += 1;
        return (element.category === "pres");
    } else if (reservationBool< 1&& element.category === "reservation") {
        reservationBool += 1;
        return (element.category === "reservation");
    } else if (pastEventBool< 2 && element.category === "pastEvent") {
        pastEventBool += 1;
        return (element.category === "pastEvent");
    }
    
}

function getProject(element) {
    "use strict";
    return (element.category === localStorage.getItem("category") &&
           element.photo === localStorage.getItem("photo"));
}

function getJsonFile(file) {
    "use strict";
    var request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.overrideMimeType("application/json");
    request.send(null);
    return JSON.parse(request.responseText);
}

function filterArray(category, tab) {
    "use strict";
    var final_res = [];
    switch (category) {
    case 'pastEvent':
        final_res = tab.filter(getPastEvent);
        break;
    case 'reservation':
        final_res = tab.filter(getreservation);
        break;
    case 'pres':
        final_res = tab.filter(getPres);
        break;
    case 'index':
        final_res = tab.filter(getIndex);
        break;
    case 'contact':
        final_res = tab.filter(getContact);
        break;
    case 'project':
        final_res = tab.filter(getProject);
        break;
    case 'faq':
        final_res = tab.filter(getFaq);
        break;
    case 'partenaire':
        final_res = tab.filter(getPartner);
        break;
    default:
        break;
    }
    return final_res;
}

function writeFormContact() {
    "use strict";
    var language = "english",
        actualJson;
  
    if (language === null) {
        actualJson = getJsonFile("./text/contact_english.json");
    } else {
        actualJson = getJsonFile("./text/contact_" + language + ".json");
        
    }
        
        
   
    document.getElementById("firstName").innerHTML = actualJson[0].firstname;
    document.getElementById("lastName").innerHTML = actualJson[0].lastname;
    document.getElementById("email").innerHTML = actualJson[0].email;
    document.getElementById("subject").innerHTML = actualJson[0].subject;
    document.getElementById("msg").innerHTML = actualJson[0].message;
    document.getElementById("submitButton").innerHTML = actualJson[0].submit;
    
}

function getText(category) {
    "use strict";
    var actualJson = "",
        final_res = [],
        newText = "",
        newRightText = "",
        language = localStorage.getItem("lang"),
        element;
    if (language === null) {
        language = "english";
    }
    
    actualJson = getJsonFile("./text/article_resume_" + language + ".json");
    
    final_res = filterArray(category, actualJson);
    
    if (category === "project") {
        
        element = final_res[0];
        
        saveArtInfo(element.title, element.sutitle, element.textuel, element.photo, element.photobig, element.photosmall, element.category, element.phototitle, element.photosubtitle);
        initProject();
       
    } else if (category === "contact") {
        writeFormContact();
    } else {
        writeLeftSideArticle(final_res, newText);
        if (final_res.length > 1) {
            writeRightSideArticle(final_res, newRightText);
        }
    }
    
    
}



function getDescription(category) {
    "use strict";
    var actualJson = "",
        final_res = [],
        language = "english",
        newText = "";
    
    if (language === null) {
        language = "english";
    }
    
    actualJson = getJsonFile("./text/presentation_category_" + language + ".json");
   
    final_res = filterArray(category, actualJson);
   
    writeCategoryPres(final_res, newText);
    
    
    
}

function fullScreen() {
    "use strict";
    if (!fullScreenBool) {
        document.getElementById("containerLeft").classList.remove("col-md-6");
        document.getElementById("containerLeft").classList.add("col-md-12");
        document.getElementById("vid").style.left = "8vw";
        document.getElementById("positionFullScreen").style.left = "94vw";
        document.getElementById("positionFullScreen").innerHTML = '<a href="#" class="posfull" id="posfull" onClick="fullScreen();">' +
            '<span class="glyphicon glyphicon-resize-small" aria-hidden="true"></span></a>';
         
        document.getElementById("containerRight").style.position = "relative";
        document.getElementById("containerRight").style.overflow = "visible";
        document.getElementById("containerRight").classList.remove("col-md-6");
        document.getElementById("containerRight").classList.add("col-md-12");
        fullScreenBool = true;
    } else {
        document.getElementById("containerLeft").classList.remove("col-md-12");
        document.getElementById("containerLeft").classList.add("col-md-6");
        document.getElementById("vid").style.left = "-50%";
        document.getElementById("positionFullScreen").style.left = "45vw";
        document.getElementById("positionFullScreen").innerHTML = '<a href="#" class="posfull" id="posfull" onClick="fullScreen();">' +
            '<span class="glyphicon glyphicon-resize-full" aria-hidden="true"></span></a>';
        document.getElementById("containerRight").style.position = "absolute";
        document.getElementById("containerRight").style.overflow = "scroll";
        document.getElementById("containerRight").classList.remove("col-md-12");
        document.getElementById("containerRight").classList.add("col-md-6");
        fullScreenBool = false;
    }
   
    
    
}


// ====================================================
// ========== changement de langue de la page =========
// ====================================================
function menuLang(language) {
    "use strict";
    switch (language) {
    case "french":
        //document.getElementById("lang").innerHTML = '<a href="#" onClick="changeLang(\'french\');"> FR </a>';
        break;
    case "english":
       // document.getElementById("lang").innerHTML = '<a href="#" onClick="changeLang(\'french\');"><span> FR</span> </a>';
        break;
    
    default:
        break;
            
    }
}

function changeLang(language) {
    "use strict";
    var page = window.location.pathname,
        temp = page.split('/'),
        temp2 = temp[temp.length - 1].split('.');
    
    localStorage.setItem("lang", language);
    switch (temp2[0]) {
    case "pastEvent":
        getText("pastEvent");
        getDescription("pastEvent");
        break;
    case "presentation":
        getText("pres");
        getDescription("pres");
        break;
    case "reservation":
        getText("reservation");
        getDescription("reservation");
        break;
    case "contact":
        getDescription("contact");
        writeFormContact();
        break;
    case "home":
        init();
        getText("index");
        break;
    case "project":
        getText("project");
        break;
    default:
        break;
    }
   
   
    menuLang(language);
   
}




// ====================================================
// ================ formulaire envoi mail =============
// ====================================================



// ====================================================
// =================== gestion du menu ================
// ====================================================

function hambMenu(show) {
    "use strict";
    
    if (show) {
        document.getElementById("menu-toggle").style.display = "inline";
        
    } else {
        document.getElementById("menu-toggle").style.display = "none";
    }
    document.getElementById('wrapper').classList.toggle('toggled');
    
}


function togglemenu() {
    "use strict";
     
    if (document.getElementById("menu-toggle").style.display === "none") {
        hambMenu(true);
    } else {
        hambMenu(false);
    }
    document.getElementById("email").focus();
    
}



function test(questionNumber) {
    "use strict";
    switch (questionNumber) {
    case 'qu1':
        if (qu1 % 2 === 0) {
            document.getElementById("plus1").innerHTML = "+";
            qu1 += 1;
        } else {
            document.getElementById("plus1").innerHTML = "-";
            qu1 += 1;
        }
        break;
    case 'qu2':
        if (qu2 % 2 === 0) {
            document.getElementById("plus2").innerHTML = "+";
            qu2 += 1;
        } else {
            document.getElementById("plus2").innerHTML = "-";
            qu2 += 1;
        }
        break;
    case 'qu3':
        if (qu3 % 2 === 0) {
            document.getElementById("plus3").innerHTML = "+";
            qu3 += 1;
        } else {
            document.getElementById("plus3").innerHTML = "-";
            qu3 += 1;
        }
        break;
    case 'qu4':
        if (qu4 % 2 === 0) {
            document.getElementById("plus4").innerHTML = "+";
            qu4 += 1;
        } else {
            document.getElementById("plus4").innerHTML = "-";
            qu4 += 1;
        }
        break;
    case 'qu5':
        if (qu5 % 2 === 0) {
            document.getElementById("plus5").innerHTML = "+";
            qu5 += 1;
        } else {
            document.getElementById("plus5").innerHTML = "-";
            qu5 += 1;
        }
        break;
    case 'qu6':
        if (qu6 % 2 === 0) {
           // document.getElementById("plus6").classList.add("fa-plus");
          //  document.getElementById("plus6").classList.remove("fa-minus");
            document.getElementById("plus6").innerHTML = "+";
            qu6 += 1;
        } else {
           // document.getElementById("plus6").classList.remove("fa-plus");
           // document.getElementById("plus6").classList.add("fa-minus");
            document.getElementById("plus6").innerHTML = "-";
            qu6 += 1;
        }
        break;
    case 'qu7':
        if (qu7 % 2 === 0) {
           // document.getElementById("plus6").classList.add("fa-plus");
          //  document.getElementById("plus6").classList.remove("fa-minus");
            document.getElementById("plus7").innerHTML = "+";
            qu7 += 1;
        } else {
           // document.getElementById("plus6").classList.remove("fa-plus");
           // document.getElementById("plus6").classList.add("fa-minus");
            document.getElementById("plus7").innerHTML = "-";
            qu7 += 1;
        }
        break;
    default:
        break;
            
    }
    
    
}