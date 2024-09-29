// hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const icon = hamburger.querySelector('i');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
        if (navbar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

function showContent() {
    const name = document.getElementById('nameInput').value;
    const contentDiv = document.getElementById('content');
    const script = document.createElement('script');
    script.nomodule = true;
    script.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
    document.head.appendChild(script);

    script.onload = function() {
        contentDiv.style.display = 'block';

        if (name === 'Mo@|6$2u') {
            let html = '<div style="margin: 20px;">';

            html += '<h3 style="margin-left:10px;">Hello, Moumita!</h3>';

            html += '<h5 style="margin-left:5px">SEM-II</h5>';

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                        <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                        <h5>index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:1:Portfolio</button></a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:2:</button></a>
                </div>`;
            
            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:3:</button></a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:4:</button></a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:5:</button></a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:6:</button></a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:7:</button></a>
                </div>`;

                html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexht.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="images/user_moumita/web_dev_user_moumita.pdf" style="color:#000;">
                        <h5>Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;
    
                html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="index" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="images/user_moumita/index_moumita.pdf" style="color:#000;">
                        <h5>Index Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += '</div>'; 
            contentDiv.innerHTML = html;
        } else if (name === 'arijit@123') {
            let html = '<div style="margin: 20px;">';

            // SEM-I content for Arijit, manually duplicated 4 times
            html += '<h3 style="margin-left:10px;">Hello, Arijit!</h3><h5 style="margin-left:5px">SEM-I</h5>';

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_arijit/rc1.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="https://drive.google.com/file/d/1mxcniDbXWTsJl2ualtYa_mgVY-DTUxFZ/view?usp=sharing" style="color:#000;">
                        <h5>Sem-I Receipt<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_arijit/rc1.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="https://drive.google.com/file/d/1mxcniDbXWTsJl2ualtYa_mgVY-DTUxFZ/view?usp=sharing" style="color:#000;">
                        <h5>Sem-I Receipt<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_arijit/rc1.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="https://drive.google.com/file/d/1mxcniDbXWTsJl2ualtYa_mgVY-DTUxFZ/view?usp=sharing" style="color:#000;">
                        <h5>Sem-I Receipt<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_arijit/rc1.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="https://drive.google.com/file/d/1mxcniDbXWTsJl2ualtYa_mgVY-DTUxFZ/view?usp=sharing" style="color:#000;">
                        <h5>Sem-I Receipt<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            // SEM-II content for Arijit, manually duplicated 4 times
            html += '<h5 style="margin-left:5px">SEM-II</h5>';

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_arijit/En2.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="https://drive.google.com/file/d/15_i0OPwAt1nD44Xv504_a_7fU6qwWLLe/view?usp=sharing" style="color:#000;">
                        <h5>Sem-II Receipt<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_arijit/En2.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="https://drive.google.com/file/d/1pyRUI4WEl7thGGCeqzVvb28AATu-YgV_/view?usp=sharing" style="color:#000;">
                        <h5>Sem-II Receipt<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                        <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                        <h5>index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/ari.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:1:Portfolio</button></a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:2:</button></a>
                </div>`;
            
            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:3:</button></a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:4:</button></a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:5:</button></a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:6:</button></a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/mo.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:7:</button></a>
                </div>`;

            html += '</div>'; // Closing the main content div
            contentDiv.innerHTML = html;
 

        } else if (name === 'sayan@123') {
            let html = '<div style="margin: 20px;">';
        
            html += '<h3 style="margin-left:10px;">Hello, Sayan!</h3>';
            html += '<h5 style="margin-left:5px">SEM-II</h5>';
        
            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                        <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                        <h5>index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;
        
            html += '</div>'; // Closing the main content div
            contentDiv.innerHTML = html;
 
           
        } else if (name === 'De@130305') {
            let html = '<div style="margin: 20px;">';

            html += '<h3 style="margin-left:10px;">Hello, Debojyoti!</h3>';

            html += '<h5 style="margin-left:5px">SEM-II</h5>';

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                        <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                        <h5>index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += '</div>'; // Closing the main content div
            contentDiv.innerHTML = html;
 

        } else if (name === 'Suddu@123') {
            let html = '<div style="margin: 20px;">';

            html += '<h3 style="margin-left:10px;">Hello, Sudrishna!</h3>';

            html += '<h5 style="margin-left:5px">SEM-II</h5>';

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                        <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                        <h5>index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;
            
            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/su123.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:1:Portfolio</button></a>
                </div>`;

                html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexht.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="images/user_sudrishna/web_dev_user_sudrishna.pdf" style="color:#000;">
                        <h5>Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;
    
                html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="index" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="images/user_sudrishna/index_sudrishna.pdf" style="color:#000;">
                        <h5>Index Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += '</div>'; // Closing the main content div
            contentDiv.innerHTML = html;
 

        } else if (name === 'Bhaskar99') {
            let html = '<div style="margin: 20px;">';

            html += '<h3 style="margin-left:10px;">Hello, Bhaskar!</h3>';

            html += '<h5 style="margin-left:5px">SEM-II</h5>';

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                        <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                        <h5>index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

                html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexht.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="images/user_bhaskar/web_dev_user_bhaskar.pdf" style="color:#000;">
                        <h5>Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;
    
                html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="index" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="images/user_bhaskar/index_bhaskar.pdf" style="color:#000;">
                        <h5>Index Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += '</div>'; // Closing the main content div
            contentDiv.innerHTML = html;
 

        } else if (name === 'Protyush2005') {
            let html = '<div style="margin: 20px;">';

            html += '<h3 style="margin-left:10px;">Hello, Protyush!</h3>';

            html += '<h5 style="margin-left:5px">SEM-II</h5>';

            html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                    <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;

            html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                    <h5>Index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;

            html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/indexht.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                <a href="images/user_pratyush/web_dev_user_pratyush.pdf" style="color:#000;">
                    <h5>Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;

            html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/indexc.jpg" alt="index" style="width: 100%; max-width: 200px; height: auto;">
                <a href="images/user_pratyush/index_pratyush.pdf" style="color:#000;">
                    <h5>Index Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;
            
            html += '</div>'; // Closing the main content div
            contentDiv.innerHTML = html;
 
        } else if (name === 'Chiku2321') {
            let html = '<div style="margin: 20px;">';

            html += '<h3 style="margin-left:10px;">Hello, Pabitra!</h3>';

            html += '<h5 style="margin-left:5px">SEM-II</h5>';

            html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                    <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;

        html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                    <h5>index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;
            
            html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/indexht.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                <a href="images/user_pabitra/web_dev_user_pabitra.pdf" style="color:#000;">
                    <h5>Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;

            html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/indexc.jpg" alt="index" style="width: 100%; max-width: 200px; height: auto;">
                <a href="images/user_pabitra/index_pabitra.pdf" style="color:#000;">
                    <h5>Index Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;

            html += '</div>'; // Closing the main content div
            contentDiv.innerHTML = html;
 
        }  else if (name === 'Suvodeep@1234') {
            let html = '<div style="margin: 20px;">';

            html += '<h3 style="margin-left:10px;">Hello, Suvodeep!</h3>';

            html += '<h5 style="margin-left:5px">SEM-II</h5>';

            html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                    <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;

        html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                    <h5>index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;
        
        html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
            <a href="portfolio/Suvodeep1234.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:1:Portfolio</button></a>
            </div>`;
            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexht.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="images/user_suvodeep/web_dev_user_suvodeep.pdf" style="color:#000;">
                        <h5>Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;
    
                html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="index" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="images/user_suvodeep/index_suvodeep.pdf" style="color:#000;">
                        <h5>Index Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += '</div>'; // Closing the main content div
            contentDiv.innerHTML = html;
 
        }  else if (name === 'Swarno7') {
            let html = '<div style="margin: 20px;">';

            html += '<h3 style="margin-left:10px;">Hello, Abir!</h3>';

            html += '<h5 style="margin-left:5px">SEM-II</h5>';

            html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                    <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;

        html += `
            <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                    <h5>index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                </a>
            </div>`;

                html += '</div>'; // Closing the main content div
                contentDiv.innerHTML = html;
 

        } else if (name === 'ANK') {
            let html = '<div style="margin: 20px;">';

            html += '<h1 style="margin-left:10px;">Hello, Ankita!</h1>';

            html += '<h5 style="margin-left:5px">SEM-II</h5>';

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                        <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                        <h5>index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += '</div>'; // Closing the main content div
            contentDiv.innerHTML = html;
 
        } else if (name === 'Piu') {
            let html = '<div style="margin: 20px;">';

            html += '<h1 style="margin-left:10px;">Hello, Sneha!</h1>';

            html += '<h5 style="margin-left:5px">SEM-II</h5>';

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/user_bhaskar/asgnc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/AsgnSu.pdf" style="color:#000;">
                        <h5>C-Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="pdf/assignc/indexc.pdf" style="color:#000;">
                        <h5>index c-assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;
            
            html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                <a href="portfolio/piu.html"><button class="btn" type="submit" style="border-radius: 7px; height: 40px; width: 120px; background-color: #83bcd7; border: none; box-shadow: 2px 2px 0px #c9c8c7;">HTML:1:Portfolio</button></a>
                </div>`;

                html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexht.jpg" alt="Eform" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="images/user_sneha/web_dev_user_sneha.pdf" style="color:#000;">
                        <h5>Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;
    
                html += `
                <div style="display: inline-block; width: 45%; margin: 10px; text-align: center; vertical-align: top;">
                    <img src="images/indexc.jpg" alt="index" style="width: 100%; max-width: 200px; height: auto;">
                    <a href="images/user_sneha/index_sneha.pdf" style="color:#000;">
                        <h5>Index Web-Dev Assignment<ion-icon name="arrow-down-outline"></ion-icon></h5>
                    </a>
                </div>`;

            html += '</div>'; // Closing the main content div
            contentDiv.innerHTML = html;
 
        } else {
            contentDiv.innerHTML = '<h3>Name not found</h3><p>Please try again.</p>';
        }
    };
}


document.getElementById('pdfForm1').addEventListener('submit', async function (e) {
    e.preventDefault();

    try {
        // Get user input
        const rollno = document.getElementById('rollno1').value;
        const regno = document.getElementById('regno1').value;

        // Create a new PDF document
        const { PDFDocument, rgb } = PDFLib;
        const pdfDoc = await PDFDocument.create();

        // Add a page to the PDF
        const page = pdfDoc.addPage([600, 800]);

        // Fetch and embed the background image
        const backgroundImageUrl = 'https://i.imgur.com/YlECy1O.jpeg'; // Updated direct image URL
        const backgroundImageBytes = await fetch(backgroundImageUrl).then(res => res.arrayBuffer());
        const backgroundImage = await pdfDoc.embedJpg(backgroundImageBytes); // or use embedPng if your image is PNG

        // Scale the image to the page size
        const { width: bgWidth, height: bgHeight } = backgroundImage.scale(1);

        // Draw the background image on the entire page
        page.drawImage(backgroundImage, {
            x: 0,
            y: 0,
            width: page.getWidth(),
            height: page.getHeight(),
        });

        // Set font and size for text
        const fontSize = 20;
        const textColor = rgb(0, 0, 0);

        // Draw text on the PDF
        page.drawText('B.Sc. ', {
            x: 340,
            y: 580,
            size: fontSize + 2,
            color: textColor,
        });
        page.drawText('HONOURS', {
            x: 400,
            y: 580,
            size: fontSize + 2,
            color: rgb(1, 0.41, 0.71), // Pink color for "HONOURS"
        });
        page.drawText('SEMESTER ', {
            x: 350,
            y: 550,
            size: fontSize,
            color: rgb(0.4, 0.6, 1), // Blue color for "SEMESTER - 2"
        });
        page.drawText('- II', {
            x: 465,
            y: 550,
            size: fontSize,
            color: textColor, // Black color for the number 2
        });
        page.drawText(`C.U. Roll No: ${rollno}`, {
            x: 240,
            y: 450,
            size: fontSize,
            color: textColor,
        });
        page.drawText(`C.U. Registration No: ${regno}`, {
            x: 240,
            y: 410,
            size: fontSize,
            color: textColor,
        });
        page.drawText('Paper Code: DSC/CC2/P', {
            x: 240,
            y: 370,
            size: fontSize,
            color: rgb(0, 0, 0), // Red color for the course name
        });
        page.drawText('SUBJECT: CMSM', {
            x: 240,
            y: 330,
            size: fontSize,
            color: rgb(0, 0, 0), // Red color for the course name
        });
        page.drawText('PAPER: PROBLEM SOLVING USING C LAB.', {
            x: 150,
            y: 200,
            size: fontSize,
            color: rgb(0.4, 0.6, 1), // Red color for the subject
        });

        // Save the PDF and trigger download
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const downloadUrl = URL.createObjectURL(blob);

        // Automatically trigger the download
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `Cover_page_${rollno}.pdf`;
        link.click();

    } catch (error) {
        console.error('An error occurred:', error.message);
        alert('An error occurred while generating the PDF: ' + error.message);
    }
});

document.getElementById('pdfForm2').addEventListener('submit', async function (e) {
    e.preventDefault();

    try {
        // Get user input
        const rollno = document.getElementById('rollno2').value;
        const regno = document.getElementById('regno2').value;

        // Create a new PDF document
        const { PDFDocument, rgb } = PDFLib;
        const pdfDoc = await PDFDocument.create();

        // Add a page to the PDF
        const page = pdfDoc.addPage([600, 800]);

        // Fetch and embed the background image
        const backgroundImageUrl = 'https://i.imgur.com/13GMrKo_d.jpg?maxwidth=520&shape=thumb&fidelity=high'; // Updated direct image URL
        const backgroundImageBytes = await fetch(backgroundImageUrl).then(res => res.arrayBuffer());
        const backgroundImage = await pdfDoc.embedJpg(backgroundImageBytes); // or use embedPng if your image is PNG

        // Scale the image to the page size
        const { width: bgWidth, height: bgHeight } = backgroundImage.scale(1);

        // Draw the background image on the entire page
        page.drawImage(backgroundImage, {
            x: 0,
            y: 0,
            width: page.getWidth(),
            height: page.getHeight(),
        });

        // Set font and size for text
        const fontSize = 20;
        const textColor = rgb(0, 0, 0);

        // Draw text on the PDF
        page.drawText('B.Sc. ', {
            x: 340,
            y: 580,
            size: fontSize + 2,
            color: textColor,
        });
        page.drawText('HONOURS', {
            x: 400,
            y: 580,
            size: fontSize + 2,
            color: rgb(1, 0.41, 0.71), // Pink color for "HONOURS"
        });
        page.drawText('SEMESTER ', {
            x: 350,
            y: 550,
            size: fontSize,
            color: rgb(0.4, 0.6, 1), // Blue color for "SEMESTER - 2"
        });
        page.drawText('- 2', {
            x: 465,
            y: 550,
            size: fontSize,
            color: textColor, // Black color for the number 2
        });
        page.drawText(`C.U. Roll No: ${rollno}`, {
            x: 240,
            y: 450,
            size: fontSize - 4,
            color: textColor,
        });
        page.drawText(`C.U. Registration No: ${regno}`, {
            x: 240,
            y: 410,
            size: fontSize - 4,
            color: textColor,
        });
        page.drawText('Course Name: CVAC-2', {
            x: 240,
            y: 370,
            size: fontSize,
            color: rgb(1, 0, 0), // Red color for the course name
        });
        page.drawText('SUBJECT: HANDS ON MACHINE LEARNING', {
            x: 150,
            y: 200,
            size: fontSize,
            color: rgb(1, 0, 0), // Red color for the subject
        });

        // Save the PDF and generate a preview
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const previewUrl = URL.createObjectURL(blob);

        // Display the preview in an iframe
        const previewFrame = document.getElementById('pdfPreview2');
        previewFrame.src = previewUrl;
        previewFrame.style.display = 'block';

        // Enable the download button
        const downloadButton = document.getElementById('downloadPdf2');
        downloadButton.onclick = function () {
            const link = document.createElement('a');
            link.href = previewUrl;
            link.download = `custom_certificate_${rollno}.pdf`;
            link.click();
        };
        downloadButton.style.display = 'block';

    } catch (error) {
        console.error('An error occurred:', error.message);
        alert('An error occurred while generating the PDF: ' + error.message);
    }
});

document.getElementById('pdfForm3').addEventListener('submit', async function (e) {
    e.preventDefault();

    try {
        // Get user input
        const rollno = document.getElementById('rollno3').value;
        const regno = document.getElementById('regno3').value;

        // Create a new PDF document
        const { PDFDocument, rgb } = PDFLib;
        const pdfDoc = await PDFDocument.create();

        // Add a page to the PDF
        const page = pdfDoc.addPage([600, 800]);

        // Fetch and embed the background image
        const backgroundImageUrl = 'https://i.imgur.com/elGS2nw_d.jpg?maxwidth=520&shape=thumb&fidelity=high'; // Updated direct image URL
        const backgroundImageBytes = await fetch(backgroundImageUrl).then(res => res.arrayBuffer());
        const backgroundImage = await pdfDoc.embedJpg(backgroundImageBytes); // or use embedPng if your image is PNG

        // Scale the image to the page size
        const { width: bgWidth, height: bgHeight } = backgroundImage.scale(1);

        // Draw the background image on the entire page
        page.drawImage(backgroundImage, {
            x: 0,
            y: 0,
            width: page.getWidth(),
            height: page.getHeight(),
        });

        // Fetch and embed the logo image
        const logoUrl = 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/University_of_Calcutta_logo.svg/1200px-University_of_Calcutta_logo.svg.png'; // Replace with your logo URL
        const logoBytes = await fetch(logoUrl).then(res => res.arrayBuffer());
        const logoImage = await pdfDoc.embedPng(logoBytes); // Use embedPng if your image is PNG

        // Set the logo's width and height
        const logoWidth = 100;
        const logoHeight = logoImage.scale(0.5).height;

        // Draw the logo at the desired position (top-left corner in this case)
        page.drawImage(logoImage, {
            x: 20, // X position (left margin)
            y: page.getHeight() - logoHeight - 20, // Y position (top margin)
            width: logoWidth,
            height: logoHeight,
        });

        // Set font and size for text
        const fontSize = 20;
        const textColor = rgb(0, 0, 0);

        // Draw text on the PDF
        page.drawText('B.Sc. ', {
            x: 340,
            y: 580,
            size: fontSize + 2,
            color: textColor,
        });
        page.drawText('HONOURS', {
            x: 400,
            y: 580,
            size: fontSize + 2,
            color: rgb(1, 0.41, 0.71), // Pink color for "HONOURS"
        });
        page.drawText('SEMESTER ', {
            x: 350,
            y: 550,
            size: fontSize,
            color: rgb(0.4, 0.6, 1), // Blue color for "SEMESTER - 2"
        });
        page.drawText('- 2', {
            x: 465,
            y: 550,
            size: fontSize,
            color: textColor, // Black color for the number 2
        });
        page.drawText(`C.U. Roll No: ${rollno}`, {
            x: 240,
            y: 450,
            size: fontSize - 4,
            color: textColor,
        });
        page.drawText(`C.U. Registration No: ${regno}`, {
            x: 240,
            y: 410,
            size: fontSize - 4,
            color: textColor,
        });
        page.drawText('Course Name: CVAC-2', {
            x: 240,
            y: 370,
            size: fontSize,
            color: rgb(1, 0, 0), // Red color for the course name
        });
        page.drawText('SUBJECT: HANDS ON MACHINE LEARNING', {
            x: 150,
            y: 200,
            size: fontSize,
            color: rgb(1, 0, 0), // Red color for the subject
        });

        // Save the PDF and generate a preview
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const previewUrl = URL.createObjectURL(blob);

        // Display the preview in an iframe
        const previewFrame = document.getElementById('pdfPreview3');
        previewFrame.src = previewUrl;
        previewFrame.style.display = 'block';

        // Enable the download button
        const downloadButton = document.getElementById('downloadPdf3');
        downloadButton.onclick = function () {
            const link = document.createElement('a');
            link.href = previewUrl;
            link.download = `custom_certificate_${rollno}.pdf`;
            link.click();
        };
        downloadButton.style.display = 'block';

    } catch (error) {
        console.error('An error occurred:', error.message);
        alert('An error occurred while generating the PDF: ' + error.message);
    }
});

