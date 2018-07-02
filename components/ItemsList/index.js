import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem, toggleComplete } from '../../logic/todos';
import './styles.css';

export const ItemsList = ({ items, onRemoveItem, onToggleComplete }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map((item) => 
        <li key={item.id}>
          <a onClick={() => onRemoveItem(item.id)}>x </a>
          {item.content}
          <input type="checkbox"  onClick={() => onToggleComplete(item.id)} />
        </li>)}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return { items: state.todos.items };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    onRemoveItem: (id) => dispatch(removeItem({itemId:id})),
    onToggleComplete: (id) => dispatch(toggleComplete({itemId:id}))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
