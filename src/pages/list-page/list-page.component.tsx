import * as React from "react";

import { TablePagination } from 'react-pagination-table';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {Modal, Button, Form} from 'react-bootstrap'
import Pagination from "react-js-pagination"
import { List, arrayMove } from 'react-movable';
import {ListPageProps} from "./list-page.props";
import {AccountModal} from './form-account';
require("bootstrap/scss/bootstrap.scss");

class ListPage extends React.Component<ListPageProps> {
    state = {
        activePage: 1,
        showModal: false,
        initialValue: {
            name: '',
            index: null
        }
    };

    componentDidMount() {
        let {
            getListsInformation,
        } = this.props;

        getListsInformation({});
    };

    handlePageChange(pageNumber) {
        this.setState({activePage: +pageNumber});
    }

    handleClose() {
        this.setState({showModal: false});
    }

    openModal() {
        this.setState({showModal: true});
    }


    changeInformation(info) {
        this.setState({
            showModal: true,
            initialValue: {
                name: info.name,
                index: info.index,
            }
        });
    }

    render() {

        let {
            lists,
            changeOrder,
            addElementNew,
            deleteElement,
        } = this.props;

        let  {
            activePage,
            showModal,
            initialValue,
        } = this.state;

        return <div className="container">
            <Button onClick={() => this.openModal()}>
                Add new info
            </Button>
            {
                lists &&
                    <div>

                      <List
                        values={lists.filter((element, index) => {
                            if(index >= ((activePage -1)  * 10) && index < (activePage * 10) ){
                                return element;
                            }
                        })}
                        onChange={({ oldIndex, newIndex }) => {
                            const changedArrive = arrayMove(lists, oldIndex, newIndex);
                            changeOrder(changedArrive)
                             }
                        }
                        renderList={({ children, props }) => <ul {...props} onClick={() => console.log('click1')}>{children}</ul>}
                        renderItem={({ value, props }) => <li {...props} className='card' >
                            <div>
                                <div>
                                    {value.name}
                                 </div>
                                <Button
                                    onClick={() => {
                                     this.changeInformation(value);
                                    }}
                                >
                                    Show element information
                                </Button>
                            </div>
                        </li>}
                      />
                      <Pagination
                      activePage={activePage}
                      itemsCountPerPage={10}
                      totalItemsCount={lists.length}
                      pageRangeDisplayed={5}
                      innerClass='pagination'
                      itemClass='page-item'
                      linkClass='page-link'
                      onChange={(number) => {
                          this.handlePageChange(number)
                      }}
                    />
                      <Modal show={showModal} onHide={() => this.handleClose()}>
                        <Modal.Header closeButton>
                          <Modal.Title>Управление елементами</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <AccountModal onSubmit={addElementNew} onDelete={deleteElement} handleClose={() => this.handleClose()} initialValue={initialValue}/>
                        </Modal.Body>
                      </Modal>


                    </div>

            }

        </div>




    }

}


export {ListPage};
