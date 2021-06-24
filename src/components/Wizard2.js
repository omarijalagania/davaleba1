import React from 'react';
import Tooltip from 'react-tooltip-lite';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';

const Wizard2 = () => {
  const productReducer = useSelector((state) => state.productReducer);
  const priceReducer = useSelector((state) => state.priceReducer);
  const itemReducer = useSelector((state) => state.itemReducer);
  const allProReducer = useSelector((state) => state.allProReducer.all);
  const userNameReducers = useSelector((state) => state.userNameReducers);
  const dispatch = useDispatch();
  let min = 3;
  //check input length
  const checkLength = (input, min) => {
    if (input.length < min) {
      dispatch({
        type: 'MIN',
      });
    } else {
      dispatch({
        type: 'MAX',
      });
    }
  };
  //remove item

  const removeItem = (e, index) => {
    if (e.target.classList.contains('remove-item')) {
      // allProReducer.filter((item, i) => i !== index);
      dispatch({
        type: 'REMOVE',
        payload: allProReducer.filter((item, i) => i !== index),
      });
    }
  };

  return (
    <div className='container wizard2'>
      <form className='form' id='form'>
        <div className='form-control wizard-table'>
          <label htmlFor='username'>ნივთის დასახელება</label>
          <Tooltip
            content={
              !userNameReducers
                ? `უნდა იყოს მინიმუმ ${min} სიმბოლო`
                : ` სიმბოლოების რაოდენობა ვალიდურია `
            }
            useDefaultStyles={true}>
            <input
              type='text'
              id='price'
              placeholder='ნივთის დასახელება'
              onChange={(e) => {
                checkLength(e.target.value, min);
                dispatch({
                  type: 'ADD_PRODUCT',
                  payload: e.target.value,
                });
              }}
            />
          </Tooltip>
        </div>
        <div className='form-control wizard-table'>
          <label htmlFor='price'>ნივთის ფასი</label>

          <input
            type='number'
            id='username'
            placeholder='ნივთის ფასი'
            onChange={(e) =>
              dispatch({
                type: 'ADD_PRICE',
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className='form-control wizard-table'>
          <label htmlFor='count'>ნივთის რაოდენობა</label>

          <input
            type='number'
            id='count'
            placeholder='ნივთის რაოდენობა'
            onChange={(e) =>
              dispatch({
                type: 'ADD_ITEM',
                payload: e.target.value,
              })
            }
          />
        </div>
      </form>

      <Table style={{ marginBottom: '10px' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>პროდუქტის დასახელება</th>
            <th>პროდუქტის რაოდენობა</th>
            <th>პროდუქტის ფასი</th>
            <th>პროდუქტეს წაშლა</th>
          </tr>
        </thead>
        <tbody>
          {allProReducer.map((item, index) => {
            return (
              <tr key={index + Math.random()}>
                <td>{index + 1}</td>
                <td>{item.product}</td>
                <td>{item.item}</td>
                <td>{item.price}</td>
                <button
                  onClick={(e) => removeItem(e, index)}
                  className='remove-item'>
                  წაშლა
                </button>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <button
        className='add-button'
        onClick={() => {
          if (userNameReducers) {
            dispatch({
              type: 'ALL_PRODUCTS',
              payload: {
                product: productReducer.products,
                item: itemReducer.items,
                price: priceReducer.prices,
              },
            });
          }
        }}>
        დამატება
      </button>
    </div>
  );
};

export default Wizard2;
