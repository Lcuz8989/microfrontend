export default class ContentVueListener extends HTMLElement{
    static menuListener(){
        window.addEventListener("menuVue:item_clicked", e => {
            window.alert(e.target);
        });
    }
}