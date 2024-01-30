const list = document.querySelector("ul");
const form = document.querySelector("form");


//function to add item to the UI
const addRecipe = (recipe, id) => {
  const title = recipe.title;
  const time = recipe.created_at.toDate();
  const html = `
    <li data-id=${id}>
        <div>${title}</div>
        <div>${time}</div>
        <button class='btn btn-danger btn-sm my-2'>Delete</button>
    </li>`;

  list.innerHTML += html;
};


// function to delete the UI list item
const deleteRecipe = (id) => {
    const recipe = document.querySelectorAll('li');
    recipe.forEach((item) => {
        if(item.getAttribute('data-id') === id){
            item.remove();
        }
    });
};


// Real- time listener
db.collection("recipes").onSnapshot(snapshot => {
    const docChange = snapshot.docChanges();
    docChange.forEach(change => {
        const data = change.doc.data();
        const id = change.doc.id;

        if(change.type === 'added'){
            addRecipe(data, id)
        }else if (change.type === 'removed') {
            deleteRecipe(id);
        }
    });
});

// add or save document to database
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formInput = form.recipe.value;

  const now = new Date();
  const recipe = {
    title: formInput,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
      form.reset();
    })
    .catch(() => console.log(error));
});


// Remove document from the database
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection("recipes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
