import React from "react";

class AddRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeTitle: "",
            recipeSource: "default",
            recipeNotes: "",
            recipeDifficulty: "default",
            recipeDuration: "default",
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
                            placeholder='Spicy Chicken'
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='form-group mb-4'>
                        <label
                            htmlFor='recipeSource'
                            className='block w-full mb-1'
                        >
                            Recipe Difficulty
                        </label>
                        <select
                            id='recipeDifficulty'
                            name='recipeDifficulty'
                            className='w-full'
                            onChange={this.handleChange}
                            value={this.state.recipeDifficulty}
                        >
                            <option value='default' disabled>
                                Choose Difficulty Level
                            </option>
                            <option value='1'>1 (Easiest)</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5 (Hardest)</option>
                        </select>
                    </div>

                    <div className='form-group mb-4'>
                        <label
                            htmlFor='recipeDuration'
                            className='block w-full mb-1'
                        >
                            Recipe Duration
                        </label>
                        <select
                            id='recipeDuration'
                            name='recipeDuration'
                            className='w-full'
                            onChange={this.handleChange}
                            value={this.state.recipeDuration}
                        >
                            <option value='default' disabled>
                                Choose Duration
                            </option>
                            <option value='short'>
                                Short (Less than 1 hour)
                            </option>
                            <option value='long'>
                                Long (More than 1 hour)
                            </option>
                        </select>
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
                            value={this.state.recipeSource}
                        >
                            <option value='default' disabled>
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

                    <div className='form-group mb-4'>
                        <button className='bg-slate-700 text-slate-100 block w-full py-2'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddRecipe;
