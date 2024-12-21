//factory functions that will create an Element
function createElement(type, text, color){
    const el = document.createElement(type);
    el.innerText = text;
    el.style.color = color;
    document.body.append(el);
    //below are the dynamic object that will update text and color
    return {
        el,
        createText(text) {
           el.innerText = text;
        },

        setColor(color) {
            el.style.color = color;
        }
    }
}

const div = createElement('div', 'Hi This is Bryan Devs', 'red');
//div.setColor("white");
//div.createText("Update please");
//console.log(div);

//Test it in HTML or Browser
function SuperELement(type, content) {
    this.el = document.createElement(type);
    this.el.innerText = content;
    document.body.append(this.el);
    this.el.addEventListener('click', () =>{
        console.log(this.el.textContent);
    })
}
//invoke function for SuperELement Factory Function
const button = new SuperELement('button', 'Submit');
console.log(button);