import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import '../style/timeline.scss';

import React from 'react';

class Timeline extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <ul className="timeline">

                     <li>
                       <div className="timeline-badge info"><i className="fa fa-remove"></i></div>
                         <div className="timeline-panel">
                           <div className="timeline-heading">
                             <h2 className="timeline-title">Shake Button</h2>
                             <p><small className="text-muted">Click to make it say no</small></p>
                           </div>
                           <div className="timeline-body">
                             <h3></h3>
                             <button className="btn btn-primary btn-lg" id="shaker">Click Me</button>
                           </div>
                       </div>
                     </li>

                     <li className="timeline-inverted">
                       <div className="timeline-badge success"><i className="fa fa-plus "></i></div>
                       <div className="timeline-panel">
                           <div className="timeline-heading">
                             <h2 className="timeline-title">Switch Button</h2>
                             <p><small className="text-muted">Toggle off and on state</small></p>
                           </div>
                           <div className="timeline-body">
                             <h3></h3>
                             <div className="btn-group btn-toggle">
                               <button className="btn btn-lg btn-default">ON</button>
                               <button className="btn btn-lg btn-primary active">OFF</button>
                             </div>
                           </div>
                        </div>
                     </li>

                     <li >
                       <div className="timeline-badge primary"><i className="fa fa-refresh"></i></div>
                       <div className="timeline-panel">
                           <div className="timeline-heading">
                             <h2 className="timeline-title">Pagination</h2>
                             <p><small className="text-muted">Paging for sections or paragraphs</small></p>
                           </div>
                           <div className="timeline-body">
                             <h3></h3>
                             <ul className="pagination" id="myPager"></ul>
                           </div>
                         </div>
                     </li>

                     <li className="timeline-inverted">
                       <div className="timeline-badge info"><i className="fa fa-tag"></i></div>
                       <div className="timeline-panel">
                           <div className="timeline-heading">
                             <h2 className="timeline-title">Select Button</h2>
                             <p><small className="text-muted">Turn a Dropdown into a select list</small></p>
                           </div>
                           <div className="timeline-body">
                             <h3></h3>
                             <div className="btn-group">
                               <a className="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">Select an Item <span className="caret"></span></a>
                               <ul className="dropdown-menu">
                                 <li><a href="#">Item I</a></li>
                                 <li><a href="#">Item II</a></li>
                                 <li><a href="#">Item III</a></li>
                                 <li><a href="#">Item IV</a></li>
                                 <li><a href="#">Item V</a></li>
                                 <li className="divider"></li>
                                 <li><a href="#">Other</a></li>
                               </ul>
                             </div>
                           </div>
                        </div>
                 	  </li>

                     <li>
                       <div className="timeline-badge info"><i className="fa fa-download"></i></div>
                       <div className="timeline-panel">
                           <div className="timeline-heading">
                             <h2 className="timeline-title">Pop-up Email Validation</h2>
                             <p><small className="text-muted">Live as-you-type validator</small></p>
                           </div>
                           <div className="timeline-body">
                             <h3></h3>

                           </div>
                        </div>
                 	  </li>

                     <li className="timeline-inverted">
                       <div className="timeline-badge danger"><i className="fa fa-share-alt"></i></div>
                       <div className="timeline-panel">
                           <div className="timeline-heading">
                             <h2 className="timeline-title">Collapse Tabs</h2>
                             <p><small className="text-muted">Overflow extra tabs into a Dropdown</small></p>
                           </div>
                           <div className="timeline-body">
                             <h3></h3>
                               <ul className="nav nav-tabs" id="tabs">
                                 <li><a href="#tab0" data-toggle="tab">Tab0</a></li>
                                 <li><a href="#tab1" data-toggle="tab">Tab1</a></li>
                                 <li><a href="#tab2" data-toggle="tab">Tab2</a></li>
                                 <li><a href="#tab3" data-toggle="tab">Tab3</a></li>
                                 <li><a href="#tab4" data-toggle="tab">Tab4</a></li>
                                 <li><a href="#tab5" data-toggle="tab">Tab5</a></li>
                                 <li><a href="#tab6" data-toggle="tab">Tab6</a></li>
                                 <li><a href="#tab7" data-toggle="tab">Tab7</a></li>
                                 <li><a href="#tab8" data-toggle="tab">Tab8</a></li>
                                 <li id="lastTab">
                                   <a className="btn dropdown-toggle" data-toggle="dropdown" href="#">
                                     More <span className="caret"></span>
                                   </a>
                                   <ul className="dropdown-menu" id="collapsed">
                                   </ul>
                                 </li>
                             </ul>
                             <div className="tab-content">
                                 <div className="tab-pane" id="tab0">Tab 0 content...</div>
                                 <div className="tab-pane" id="tab1">Tab 1 content...</div>
                                 <div className="tab-pane" id="tab2">Tab 2 content...</div>
                                 <div className="tab-pane" id="tab3">Tab 3 content...</div>
                                 <div className="tab-pane" id="tab4">Tab 4 content...</div>
                                 <div className="tab-pane" id="tab5">Tab 5 content...</div>
                                 <div className="tab-pane" id="tab6">Tab 6 content...</div>
                                 <div className="tab-pane" id="tab7">Tab 7 content...</div>
                                 <div className="tab-pane" id="tab8">Tab 8 content...</div>
                             </div>
                           </div>
                        </div>
                 	  </li>

                     <li>
                       <div className="timeline-badge warning"><i className="fa fa-edit"></i></div>
                       <div className="timeline-panel">
                           <div className="timeline-heading">
                             <h2 className="timeline-title">Loading Button</h2>
                             <p><small className="text-muted">Add state to your buttons</small></p>
                           </div>
                           <div className="timeline-body">
                             <h3></h3>
                             <button type="button" id="loadingBtn" data-loading-text="Loading..." className="btn btn-lg btn-primary">
                                 Click Me
                             </button>
                           </div>
                        </div>
                 	  </li>

                 </ul>

            </div>
        );
    }
}

export default Timeline
