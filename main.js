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

}//Library array to hold Book Class elements
let library = []

//Create Global Variables
let title;
let author;
let pageNumber;
let readstatus;

//Add books to Library Array
function addbooks(addtitle,addauthor,addpages,addreadstatus) {
    return library.push(new Book(addtitle,addauthor,addpages,addreadstatus))
}

//Take information from form and store in array and variables
function bookform(){
    title = document.getElementById('formbooktitle').value;
    author = document.getElementById('formbookauthor').value;
    pageNumber = document.getElementById('formbookpages').value;
    if (!title || !author || !pageNumber){
        alert('Please Fill in blank field')
    }
    else{
        addbooks(title,author,pageNumber)
    }
}


//Example Data
addbooks('Song of fire','martin','250','Read')
addbooks('Song of Ice','martin','500','Not Read Yet')

//Creates Book card on html page
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

//Resets display of book cards
function resetdisplay(){
    const test = document.querySelector('.bookcards')
    test.innerHTML = '';
}

// Clears Form of information
function clear(){
    document.getElementById('formbooktitle').value = ''
    document.getElementById('formbookauthor').value = ''
    document.getElementById('formbookpages').value = ''
}

//Renders book cards
function render(){
    clear()
    resetdisplay()
    library.map(createbookcard)
}


//Submit button...
const subbtn = document.querySelector('.submitbtn')
subbtn.addEventListener('click', (event) =>{
    event.preventDefault()

    console.log(title)
    console.log(author)
    console.log(pageNumber)
    console.log(library)

    bookform()
    render()
})