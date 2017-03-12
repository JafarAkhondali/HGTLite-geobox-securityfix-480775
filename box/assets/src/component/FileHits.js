import React, {Component} from 'react'
import {Hits} from 'searchkit'


class FileHits extends Hits {

  renderResult(result:any) {

        return (
            <div key={result._id}>
                    <div >文件id获取  {result._source.id}</div>
            </div>
        )
    }

}

export default FileHits
