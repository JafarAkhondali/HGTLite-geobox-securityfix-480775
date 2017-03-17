import React  from 'react';
import classNames from 'classnames';
import 'font-awesome/css/font-awesome.css'
import   '../style/styles.scss';
import   './FileList.scss';

class FileItemFloating extends React.Component {

    generateFloatingIcons(faName) {
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

    render() {

        let {showFloating}=this.props;
        return (
            <span  >
                <i className={this.generateFloatingIcons('fa-star-o')}></i>
                <i className={this.generateFloatingIcons('fa-tag')}></i>
                <i className={this.generateFloatingIcons('fa-share-alt')}></i>
                <i className={this.generateFloatingIcons('fa-edit')}></i>
                <i className={this.generateFloatingIcons('fa-sign-out')}></i>
                <i className={this.generateFloatingIcons('fa-download')}></i>
            </span>
        )

    }
}

export default FileItemFloating;
