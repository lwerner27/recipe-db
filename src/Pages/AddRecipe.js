import React from "react";

class AddRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeTitle: "",
            recipeSource: "",
            recipeNotes: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    bookOrWeb(source) {
        if (source === "book") {
            return (
                <div className='form-group mb-4'>
                    <label htmlFor='bookTitle' className='block w-full mb-1'>
                        Book Title (Page):
                    </label>
                    <input
                        type='text'
                        id='bookTitle'
                        name='bookTitle'
                        placeholder='Title (Page number)'
                        className='block w-full'
                        onChange={this.handleChange}
                    />
                </div>
            );
        } else if (source === "website") {
            return (
                <div className='form-group mb-4'>
                    <label htmlFor='websiteLink' className='block w-full mb-1'>
                        Website Link
                    </label>
                    <input
                        type='text'
                        id='websiteLink'
                        name='websiteLink'
                        placeholder='https://www.example.com/'
                        className='block w-full'
                        onChange={this.handleChange}
                    />
                </div>
            );
        } else {
            return;
        }
    }

    render() {
        return (
            <div className='container w-10/12 mx-auto mt-10'>
                <form>
                    <div className='form-group mb-4'>
                        <label
                            htmlFor='recipeTitle'
                            className='block w-full mb-1'
                        >
                            Recipe Title:
                        </label>
                        <input
                            type='text'
                            id='recipeTitle'
                            name='recipeTitle'
                            className='block w-full'
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='form-group mb-4'>
                        <label
                            htmlFor='recipeSource'
                            className='block w-full mb-1'
                        >
                            Recipe Source
                        </label>
                        <select
                            id='recipeSource'
                            name='recipeSource'
                            className='w-full'
                            onChange={this.handleChange}
                        >
                            <option selected disabled>
                                Choose Source
                            </option>
                            <option value='book'>Book</option>
                            <option value='website'>Website</option>
                        </select>
                    </div>

                    <div className='form-group mb-4'>
                        {this.bookOrWeb(this.state.recipeSource)}
                    </div>

                    <div className='form-group mb-4'>
                        <label
                            htmlFor='recipeNotes'
                            className='block w-full mb-1'
                        >
                            Recipe Notes
                        </label>
                        <textarea
                            id='receipeNotes'
                            name='recipeNotes'
                            className='w-full'
                            rows={5}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>

                    <div className='form-group'>
                        <button className='bg-slate-700 text-slate-100 block w-full py-2'>
                            Submit
                        </button>
                    </div>
                </form>
                {/* For Testing Inputs and onChange handler */}
                {/* <ul>
                    <li>Recipe Title: {this.state.recipeTitle}</li>
                    <li>Recipe Notes: {this.state.recipeNotes}</li>
                    <li>Recipe Source: {this.state.recipeSource}</li>
                    {this.state.recipeSource === "book" ? (
                        <li>Book Title: {this.state.bookTitle}</li>
                    ) : (
                        ""
                    )}
                    {this.state.recipeSource === "website" ? (
                        <li>Website Link: {this.state.websiteLink}</li>
                    ) : (
                        ""
                    )}
                </ul> */}
            </div>
        );
    }
}

export default AddRecipe;
