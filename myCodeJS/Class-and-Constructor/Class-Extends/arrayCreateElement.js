function SuperELement(type, content) {
    this.el = document.createElement(type);
    this.el.innerText = content;
    document.body.append(this.el);
    this.el.addEventListener('click', () =>{
        console.log(this.el.textContent);
    })
}

const companies = ['Microsoft', 'Google', 'Tesla', 'Facebook', 'Twitter', 'Amazon'];

const myElements = companies.map((company) =>{
    return new SuperELement('p', company);
})