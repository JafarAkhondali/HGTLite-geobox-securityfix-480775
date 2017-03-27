import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

import React from 'react';


class DragList extends React.Component {

    constructor() {
        super()
    }


    render() {
        let {
            inputFiles
        } = this.props;
        // console.log('传过来的文件对象', inputFiles);
        // console.log(inputFiles.getAll('file'));
        // console.log(inputFiles.getAll('file') ? inputFiles.getAll('file').length : 'length null');

        return (
            // <ul className = "list-group" > {this.generateChosenFiles(inputFiles)} </ul>
            < div > {
                (inputFiles.getAll('file').length && inputFiles != null) ? inputFiles.getAll('file').map(function (file) {
                        return <div key={
                            file.name
                        }
                                    className="to-m-top-8"> {
                            file.name
                        } </div>
                    }) : < span > 试试把文件拖到这里 </span>} </div>
                )
            }

}

export default DragList
