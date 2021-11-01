
 var i=0;
 function bookEntry(tbname,tbauthor)
 {
  books.push({"id": i,"textbookname":tbname,"author":tbauthor});
  i++;
  window.alert("book Added to List");
}
function bookassign(){
  for (var k=0;k<books.length;k++){
    window.alert(books[k]["id"]+books[k]["textbookname"]);
    window.alert(books[k]["id"]+books[k]["author"]);
  }
  var wbn=prompt("Enter Book Number You Need");
  delete books[wbn];
  i--;
  window.alert("Book has been Assigned to YOU");
}
function showbook(){
  for (var k=0;k<books.length;k++){
    window.alert(books[k]["id"]+books[k]["textbookname"]);
    window.alert(books[k]["id"]+books[k]["author"]);
  }
}
