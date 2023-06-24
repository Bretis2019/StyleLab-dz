import {
    home_HTML,
    contact_HTML,
    browse_HTML,
    rings_HTML,
    stickers_HTML,
    necklaces_HTML,
    men_HTML,
    women_HTML,
    desktop_nav_HTML
} from "./desktop_DOM_html";
import {fade_in} from "./app";
export function desktop_dist(){


    let navbar = document.querySelector('.head');

    document.addEventListener('DOMContentLoaded', function (){
        navbar.innerHTML = desktop_nav_HTML;
        let workspace = document.querySelector('.bottom');
        let contactButton = document.querySelector('.contact');
        let logo = document.querySelector('.logo');
        let browse = document.querySelector('.browse');
        let rings= document.querySelector('.rings');
        let stickers= document.querySelector('.stickers');
        let necklaces= document.querySelector('.necklaces');
        let men= document.querySelector('.men');
        let women= document.querySelector('.women');
        workspace.innerHTML = '';
        workspace.innerHTML = home_HTML;
        fade_in();
        contactButton.addEventListener('click', function (){
            workspace.innerHTML = '';
            workspace.innerHTML = contact_HTML;
            fade_in();
            let instagram = document.querySelector('.instagram');
            let tiktok = document.querySelector('.tiktok');
            instagram.addEventListener('click', function (){
                window.location.href = 'https://www.instagram.com/thestylelabdz/';
            });
            tiktok.addEventListener('click', function (){
                window.location.href = 'https://www.tiktok.com/@thestylelabdz/';
            });
        });
        logo.addEventListener('click', function (){
            workspace.innerHTML = '';
            workspace.innerHTML = home_HTML;
            fade_in();
        });
        browse.addEventListener('click', function () {
            workspace.innerHTML = '';
            workspace.innerHTML = browse_HTML;
            fade_in();
        });
        rings.addEventListener('click', function () {
            workspace.innerHTML = '';
            workspace.innerHTML = rings_HTML;
            fade_in();
        });
        stickers.addEventListener('click', function () {
            workspace.innerHTML = '';
            workspace.innerHTML = stickers_HTML;
            fade_in();
        });
        necklaces.addEventListener('click', function () {
            workspace.innerHTML = '';
            workspace.innerHTML = necklaces_HTML;
            fade_in();
        });
        men.addEventListener('click', function () {
            workspace.innerHTML = '';
            workspace.innerHTML = men_HTML;
            fade_in();
        });
        women.addEventListener('click', function () {
            workspace.innerHTML = '';
            workspace.innerHTML = women_HTML;
            fade_in();
        });
    });
}