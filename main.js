class Book{
    title;
    author;
    pages;
    readstatus;

    constructor(title,author,pages,readstatus){
        this.title = title
        this.author = author
        this.pages = pages
        this.readstatus = readstatus
    }

    info(){
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.readstatus
    }
}

let library = []

let title = '';
let author = '';
let pageNumber = 0;
let readstatus = false

function addbooks(title,author,pages,readstatus) {
    return library.push(new Book(title,author,pages,readstatus))
}

function bookform(form){
    title = form.formbooktitle.value;
    author = form.formbookauthor.value;
    pageNumber = form.formbookpages.value;
    addbooks(title,author,pageNumber)


}



addbooks('Song of fire','martin','250','Read')
addbooks('Song of Ice','martin','500','Not Read Yet')

function createbookcard(book) {
    const bookcards = document.querySelector('.bookcards')
    const bookcard = document.createElement('div')
    bookcard.setAttribute('class', 'card')
    bookcards.appendChild(bookcard)
    const title = document.createElement('h2')
    title.textContent = 'Title: ' + book.title
    bookcard.appendChild(title)
    const author = document.createElement('p')
    author.textContent = 'Book Author: ' + book.author
    bookcard.appendChild(author)
    const pageNumber = document.createElement('p')
    pageNumber.textContent = 'Number of Pages: ' + book.pages
    bookcard.appendChild(pageNumber)
    const status = document.createElement('p')
    status.textContent = 'Read Status: ' + book.readstatus
    bookcard.appendChild(status)

}
function resetdisplay(){
    const test = document.querySelector('.bookcards')
    test.innerHTML = '';
}

function render(){
    resetdisplay()
    library.map(createbookcard)
}

const btn = document.querySelector('.newbookbtn')
btn.addEventListener('click',() => {
    addbooks(title,author,pageNumber,readstatus)
    console.log(title)
    console.log(author)
    console.log(pageNumber)
    render()
})

const subbtn = document.querySelector('.submitbtn')
subbtn.addEventListener('click', () =>{
    console.log(library)
    bookform()
})