import 'font-awesome/css/font-awesome.css'
import   '../style/styles.scss';

import React  from 'react';
import classNames from 'classnames';


class FileItemFloating extends React.Component {

    constructor(){
        super()

        this.handleFloatStarClick=this.handleFloatStarClick.bind(this);
        this.handleFloatTagClick=this.handleFloatTagClick.bind(this);
        this.handleFloatShareClick=this.handleFloatShareClick.bind(this);
        this.handleFloatEditClick=this.handleFloatEditClick.bind(this);
        this.handleFloatMoveClick=this.handleFloatMoveClick.bind(this);
        this.handleFloatDownloadClick=this.handleFloatDownloadClick.bind(this);

    }

    faIconFactory(faName) {
        let floatingIconClass = classNames(
            'fa',
            faName,
            'fa-1x',
            'fa-blue ',
            'opacity75',
            'to-p-left-18'
        )
        return floatingIconClass;
    }

    handleFloatStarClick(event){
        console.log('star')
    }
    handleFloatTagClick(event){
        console.log('star')
    }
    handleFloatShareClick(event){
        console.log('star')
    }
    handleFloatEditClick(event){
        console.log('star')
    }
    handleFloatMoveClick(event){
        console.log('star')
    }
    handleFloatDownloadClick(event){
        console.log('star')
    }



    render() {

        let {showFloating}=this.props;
        return (
            <span  >
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatStarClick}>
                    <i className={this.faIconFactory('fa-star-o')} ></i>
                </button>
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatTagClick}>
                    <i className={this.faIconFactory('fa-tag')} ></i>
                </button>
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatShareClick}>
                    <i className={this.faIconFactory('fa-share-alt')} ></i>
                </button>
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatEditClick}>
                    <i className={this.faIconFactory('fa-edit')} ></i>
                </button>
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatMoveClick}>
                    <i className={this.faIconFactory('fa-sign-out')} ></i>
                </button>
                <button className="btn btn-default padding-0 border-none" onClick={this.handleFloatDownloadClick}>
                    <i className={this.faIconFactory('fa-download')} ></i>
                </button>

            </span>
        )

    }
}

export default FileItemFloating;
