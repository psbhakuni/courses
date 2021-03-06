import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup,  } from 'reactstrap';

const Menus = () => {
    return (
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/" action='true'>Home</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action='true'>Add Course</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action='true'>View Courses</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action='true'>About</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action='true'>Contact</Link>
            </ListGroup>
        </div>
    );
};

export default Menus;