import React from 'react'
import { connect } from 'react-redux'
import Loading from '../../utils/loading/loading'
import { bindActionCreators } from 'redux'
import Main from '../template/Main'
import PostForm from './PostForm'
import PostTable from './PostTable'
import { Collapse } from 'react-bootstrap'
import { handleAllPost, handlePostSubmit, handlePostUpdate } from './postActions'

const headerProps = {
    icon: 'product-hunt',
    title: 'Posts',
}


const INITIAL_VALUE = {
    id: null,
    text: '',
    upvote: 0,
}

class Post extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: INITIAL_VALUE,
            isCollapsed: false
        }

        this.clear = this.clear.bind(this)
        this.save = this.save.bind(this)
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        this.props.handleAllPost();
        this.clear();
    }

    collapse = (loadEvent) => {
        let isCollapsedTemp = this.state.isCollapsed;
        let heightTableTemp = this.state.heightTable;

        if (loadEvent) {
            if (isCollapsedTemp) {
                isCollapsedTemp = !this.state.isCollapsed;

                if (isCollapsedTemp) {
                    heightTableTemp += 171;
                } else {
                    heightTableTemp -= 171;
                }
            }
        } else {
            isCollapsedTemp = !this.state.isCollapsed;

            if (isCollapsedTemp) {
                heightTableTemp += 171;
            } else {
                heightTableTemp -= 171;
            }
        }
        this.setState({ isCollapsed: isCollapsedTemp, heightTable: heightTableTemp })
    }

    clear() {
        this.setState({ formData: INITIAL_VALUE })
    }

    save = (posts) => {
        this.props.handlePostSubmit(posts);
        this.clear();
    }

    update = (posts) => {
        this.props.handlePostUpdate(posts);
    }

    handleChange(event) {
        this.setState({ formData: event.target.value })
    }

    render() {
        const { isCollapsed } = this.state;
        const { postStatusGet, potList } = this.props;

        if (this.props.postStatusGet) {
            this.props.handleAllPost();
        }

        return (
            <div>

                {this.props.loading && <Loading loading={this.props.loading} />}

                <Main {...headerProps}>
                    <div className='row collapse-block'>
                        <div className='col-md-12 col-lg-12'>
                            <h4 className='collapse-header'>Postar mensagens
                            <div className='btn btn-default pull-right collapse-btn' onClick={() => this.collapse(false)}>
                                    {isCollapsed ? (<span className='fa fa-chevron-up'></span>) : <span className='fa fa-chevron-dow'></span>}
                                </div>
                            </h4>
                        </div>
                    </div>

                    <Collapse in={!isCollapsed}>
                        <div className='Collapse-content'>
                            <PostForm data={this.state.formData}
                                clear={this.clear}
                                save={this.save}
                                handleChange={this.handleChange}
                            />
                        </div>
                    </Collapse>

                    <br></br>
                    {
                       <PostTable list={this.props.postList}
                            update={this.update} />
                    }
                </Main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loading.loading,
        postList: state.postReducer.postList,
        postStatusGet: state.postReducer.postStatusGet
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ handleAllPost, handlePostSubmit, handlePostUpdate }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);