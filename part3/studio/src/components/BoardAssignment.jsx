import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
{
   label:"New  Recipes to try",
   value:"newRecipes"
},
{
   label:"Desserts",
   value:"desserts"
},
{
   label:"Potluck Possibilities",
   value:"potLuckPossibilities"
},

   ];

   let boardOptions = boards.map((board, index) =>{
return <option key={index} value={board.value}>{board.value}</option>;
   });

   const handleChange = (event) => {
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boardOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
