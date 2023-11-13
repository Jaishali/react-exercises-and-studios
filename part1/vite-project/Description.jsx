const RecipeAunthor = ()=>{
    let authorLink = "https://www.ambitiouskitchen.com/"
    let authorPhoto = "src=https://www.ambitiouskitchen.com/wp-content/uploads/2021/11/Crispy-Smashed-Potatoes-with-Garlic-Feta-Sauce-4-594x594.jpg"
    let authorName = "Monique Volz";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} 
          alt={authorName} 

           className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Ambitious kitchen</a> 
           </div>
        </div>
     );
}





