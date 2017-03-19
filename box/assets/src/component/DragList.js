import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../style/styles.scss'

class DragList extends React.Component {

        constructor() {
            super()
        }

        generateChosenFiles(files) {
                let data = [];
                for (let i = 0, len = files.length; i < len; i++) {
                    data.push( < li className = "list-group-item no-border"  key={i}> {
                            files[i].name
                        } < /li>)
                    }
                    if (!data.length) {data.push( < div > 可以把文件拖到这里 < /div>);}

                        return data;

                    }

                    render() {
                        let {
                            inputFiles
                        } = this.props;
                        console.log('传过来的文件对象', inputFiles.length,inputFiles);

                        return ( < ul className = "list-group" > {

                                this.generateChosenFiles(inputFiles)
                            } < /ul>)
                        }

                    }

                    export default DragList
