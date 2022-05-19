export default function ViewRecipes() {
    const recipes = getRecipes();

    return (
        <div className='container w-10/12 mx-auto mt-10'>
            {recipes ? (
                recipes.map((recipe) => recipe)
            ) : (
                <h1 className='text-4xl w-full text-center'>
                    There are no recipes to display.
                </h1>
            )}
        </div>
    );
}

function getRecipes() {
    let recipes = localStorage.getItem("recipes");

    if (recipes !== null) {
        recipes = JSON.parse(recipes);

        recipes = recipes.map((recipe, index) => {
            return (
                <div
                    className='mb-4 p-2 border-2 border-slate-700 bg-slate-100 rounded'
                    key={index}
                >
                    <ul>
                        <li>
                            <strong>Title:</strong> {recipe.recipeTitle}
                        </li>
                        <li>
                            <strong>Duration:</strong> {recipe.recipeDuration}
                        </li>
                        <li>
                            <strong>Difficulty:</strong>{" "}
                            {recipe.recipeDifficulty}
                        </li>
                        <li>
                            <strong>Source</strong> {recipe.recipeSource}
                        </li>
                        {recipe.recipeSource === "website" && (
                            <li>
                                <strong>Link:</strong>{" "}
                                <a href={recipe.websiteLink}>
                                    {recipe.websiteLink}
                                </a>
                            </li>
                        )}

                        {recipe.recipeSource === "book" && (
                            <li>
                                <strong>Book Title (Page):</strong>{" "}
                                {recipe.bookTitle}
                            </li>
                        )}
                        <li>
                            <strong>Notes:</strong> <br />
                            {recipe.recipeNotes}
                        </li>
                    </ul>
                </div>
            );
        });

        return recipes;
    } else {
        return null;
    }
}
