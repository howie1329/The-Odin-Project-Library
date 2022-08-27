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
    return library.push(new Book(title,author,pages,readstatus))
}

addbooks('Song of fire','martin',250,'read')

function addtable(book){
    const row = document.createElement('tr')
    const data = document.createElement('td')
    data.textContent = book.title
    return row.appendChild(data)
}

function updatetable() {
	library.forEach(book => {
	    const table = document.querySelector('.table')
	    const row = document.createElement('tr')
	    const t = document.createElement('td')
	    t.textContent = book.title
	    const a = document.createElement('td')
	    a.textContent = book.author
	    const p = document.createElement('td')
	    p.textContent = book.pages
	    row.appendChild(t)
	    row.appendChild(a)
	    row.appendChild(p)
	    table.appendChild(row)
	    console.log(book.info())
	});
}

const btn = document.querySelector('.newbookbtn');
btn.addEventListener('click', () => {
    updatetable()
});


