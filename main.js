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

function addbooks(title,author,pages,readstatus) {
    library.push(new Book(title,author,pages,readstatus))
}

function bookform(){
    let titles = document.getElementById('formbooktitle').value
    let authors = document.getElementById('formbookauthor').value
    let pages = document.getElementById('formbookpages').value
    console.log(titles + authors + pages)
    addbooks(titles,authors,pages,'Read')
}

const subbtn = document.querySelector('.submitbtn')
subbtn.addEventListener('click', () =>{
    console.log(library)
    bookform()
})

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
    addbooks('Song of Ice','martin',200,'not read yet')
    render()
})
