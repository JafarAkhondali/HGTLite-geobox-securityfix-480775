import React  from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

class DragList extends React.Component{

constructor(){
    super()
}

render(){
    return (
        <ul className="list-group">
        {
        React.Children.map(this.props.children,function(child){
            return <li className="list-group-item no-border">{child}</li>
        })
    }
</ul>
)
}

}

export default DragList
