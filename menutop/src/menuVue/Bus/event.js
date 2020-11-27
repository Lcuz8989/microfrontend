export default class Event{
    static menuClicked(e){
        console.log(e);
        const event = new CustomEvent("menuVue:item_clicked", {
            bubbles: true,
            detail: {e}
        });
        return event;
    }
}