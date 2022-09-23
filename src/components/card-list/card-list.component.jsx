import { Component } from "react";

import Card from "../card/card.component";

class CardList extends Component {
    render(){
        // console.log('rendering card list')
        const {monsters} = this.props;

        return(
            <div className='card-list'>
                {monsters.map(monster => {
                    return <Card monster = { monster }/>
                })}
            </div>
        )
    }
}

export default CardList;