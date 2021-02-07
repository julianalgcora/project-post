import React, { PureComponent, Fragment } from 'react'
import { Collapse } from 'react-bootstrap'

export default class PostTable extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            heightTable: window.innerHeight - 369
        }
    }

    render(){
        const { heightTable } = this.state;
        const { update, list } = this.props;

        return ( 
            <div className='table-responsive table-fixed-head' style={{ height: heightTable }}>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th width="70%">Texto</th>
                            <th width="10%">Upvotes</th>
                            <th width="10%">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list !== null && list.length > 0 ? (
                            list.map((post, index) => (
                                <tr key={index}>
                                    <td>{post.text}</td>
                                    <td>{post.upvote}</td>
                                    <td className='posts-table-body posts-table-act-column'>
                                        <button className='btn btn-primary posts-table-btn media-botton' title='Upvote' onClick={() => update(post)}>
                                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ): null}
                    </tbody>
                </table>
            </div>
        )
    }
}
