import React from 'react'
import {Hits} from 'searchkit'

class FileHits extends React.Component {

  render() {
    const result = this.props.result;
    console.log(result._source)
            return (

                <div key={result._id}>
                        <div >文件id获取  {result._source.id}</div>
                </div>
            )
        }
}

export default FileHits
