import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

class GetAuthors extends Component {

    render(){
        return(
            <form id="add-book">

                <div className="field">
                    <label for="">Book name:</label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label for="">Genre:</label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label for="">Author:</label>
                    <select >
                        <option >Select Value</option>
                    </select>
                </div>

                <button>+</button>
            </form>
        )
    }
}

export default graphql(getAuthorsQuery)(GetAuthors)