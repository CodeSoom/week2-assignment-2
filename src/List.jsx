import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

export default function List({ tasks, onClickDeleteTask }) {
  List.propTypes = {
    tasks: PropTypes.string.isRequired,
    onClickDeleteTask: PropTypes.string.isRequired,
  };

  return (
    <div>
      { tasks.length === 0
        ? <p>할 일이 없어요!</p>
        : (
          <ol>
            { tasks.map((task) => (
              <Item
                key={task.id}
                task={task}
                onClickDeleteTask={onClickDeleteTask}
              />
            ))}
          </ol>
        )}
    </div>

  );
}
