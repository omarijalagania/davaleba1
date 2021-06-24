import React from 'react';
import Tooltip from 'react-tooltip-lite';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Form = () => {
  const emailToolTip = useSelector((state) => state.emailToolTip);
  const userNameReducers = useSelector((state) => state.userNameReducers);
  const surNameReducer = useSelector((state) => state.surNameReducer);
  const ageReducer = useSelector((state) => state.ageReducer);
  const dispatch = useDispatch();
  let min = 3;
  let age = 18;

  //CHeck Valid Email
  const checkEmail = (input) => {
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.trim())) {
      dispatch({
        type: 'VALID_EMAIL',
      });
    } else {
      dispatch({
        type: 'INVALID_EMAIL',
      });
    }
  };

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

  //check input length surname
  const checkLengthSurname = (input, min) => {
    if (input.length < min) {
      dispatch({
        type: 'LONG',
      });
    } else {
      dispatch({
        type: 'SHORT',
      });
    }
  };

  //check Age
  const checkAge = (input, age) => {
    if (input > age) {
      dispatch({
        type: 'GREATER_18',
      });
    } else if (input < age) {
      dispatch({
        type: 'LESS_18',
      });
    }
  };

  return (
    <div className='container'>
      <form className='form' id='form'>
        <h2>ფორმა</h2>
        <div className='form-control'>
          <label htmlFor='username'>სახელი</label>
          <Tooltip
            content={
              !userNameReducers
                ? `უნდა იყოს მინიმუმ ${min} სიმბოლო`
                : ` სიმბოლოების რაოდენობა ვალიდურია `
            }
            useDefaultStyles={true}>
            <input
              type='text'
              id='username'
              placeholder='სახელი'
              onChange={(e) => checkLength(e.target.value, min)}
            />
          </Tooltip>
        </div>
        <div className='form-control'>
          <label htmlFor='surname'>გვარი</label>
          <Tooltip
            content={
              !surNameReducer
                ? `უნდა იყოს მინიმუმ ${min} სიმბოლო`
                : ` სიმბოლოების რაოდენობა ვალიდურია `
            }
            useDefaultStyles={true}>
            <input
              type='text'
              id='surname'
              placeholder='გვარი'
              onChange={(e) => checkLengthSurname(e.target.value, min)}
            />
          </Tooltip>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>ელ ფოსტა</label>
          <Tooltip
            content={emailToolTip ? 'ფოსტა ვალიდურია' : 'ფოსტა არავალიდურია'}
            useDefaultStyles={true}>
            <input
              type='text'
              id='email'
              placeholder='ელ ფოსტა'
              onChange={(e) => checkEmail(e.target.value)}
            />
          </Tooltip>
        </div>
        <div className='form-control'>
          <label htmlFor='age'>ასაკი</label>
          <Tooltip
            content={
              ageReducer ? `ასაკი ვალიდურია` : `ასაკი ნაკლებია ${age}=ზე`
            }
            useDefaultStyles={true}>
            <input
              type='number'
              id='age'
              placeholder='ასაკი'
              onChange={(e) => checkAge(e.target.value, age)}
            />
          </Tooltip>
        </div>
        <div className='form-control'>
          <select id='country' name='country'>
            <option value='Georgia'>საქართველო</option>
            <option value='Afganistan'>Afghanistan</option>
            <option value='Albania'>Albania</option>
            <option value='Algeria'>Algeria</option>
            <option value='American Samoa'>American Samoa</option>
            <option value='Andorra'>Andorra</option>
            <option value='Angola'>Angola</option>
            <option value='Anguilla'>Anguilla</option>
            <option value='Antigua & Barbuda'>Antigua & Barbuda</option>
            <option value='Argentina'>Argentina</option>
            <option value='Armenia'>Armenia</option>
            <option value='Aruba'>Aruba</option>
            <option value='Australia'>Australia</option>
            <option value='Austria'>Austria</option>
            <option value='Azerbaijan'>Azerbaijan</option>
            <option value='Bahamas'>Bahamas</option>
            <option value='Bahrain'>Bahrain</option>
            <option value='Bangladesh'>Bangladesh</option>
            <option value='Barbados'>Barbados</option>
            <option value='Belarus'>Belarus</option>
            <option value='Belgium'>Belgium</option>
            <option value='Belize'>Belize</option>
            <option value='Benin'>Benin</option>
            <option value='Bermuda'>Bermuda</option>
            <option value='Bhutan'>Bhutan</option>
            <option value='Bolivia'>Bolivia</option>
            <option value='Bonaire'>Bonaire</option>
            <option value='Bosnia & Herzegovina'>Bosnia & Herzegovina</option>
            <option value='Botswana'>Botswana</option>
            <option value='Brazil'>Brazil</option>
            <option value='British Indian Ocean Ter'>
              British Indian Ocean Ter
            </option>
            <option value='Brunei'>Brunei</option>
            <option value='Bulgaria'>Bulgaria</option>
            <option value='Burkina Faso'>Burkina Faso</option>
            <option value='Burundi'>Burundi</option>
            <option value='Cambodia'>Cambodia</option>
            <option value='Cameroon'>Cameroon</option>
            <option value='Canada'>Canada</option>
            <option value='Canary Islands'>Canary Islands</option>
            <option value='Cape Verde'>Cape Verde</option>
            <option value='Cayman Islands'>Cayman Islands</option>
            <option value='Central African Republic'>
              Central African Republic
            </option>
            <option value='Chad'>Chad</option>
            <option value='Channel Islands'>Channel Islands</option>
            <option value='Chile'>Chile</option>
            <option value='China'>China</option>
            <option value='Christmas Island'>Christmas Island</option>
            <option value='Cocos Island'>Cocos Island</option>
            <option value='Colombia'>Colombia</option>
            <option value='Comoros'>Comoros</option>
            <option value='Congo'>Congo</option>
            <option value='Cook Islands'>Cook Islands</option>
            <option value='Costa Rica'>Costa Rica</option>
            <option value='Cote DIvoire'>Cote DIvoire</option>
            <option value='Croatia'>Croatia</option>
            <option value='Cuba'>Cuba</option>
            <option value='Curaco'>Curacao</option>
            <option value='Cyprus'>Cyprus</option>
            <option value='Czech Republic'>Czech Republic</option>
            <option value='Denmark'>Denmark</option>
            <option value='Djibouti'>Djibouti</option>
            <option value='Dominica'>Dominica</option>
            <option value='Dominican Republic'>Dominican Republic</option>
            <option value='East Timor'>East Timor</option>
            <option value='Ecuador'>Ecuador</option>
            <option value='Egypt'>Egypt</option>
            <option value='El Salvador'>El Salvador</option>
            <option value='Equatorial Guinea'>Equatorial Guinea</option>
            <option value='Eritrea'>Eritrea</option>
            <option value='Estonia'>Estonia</option>
            <option value='Ethiopia'>Ethiopia</option>
            <option value='Falkland Islands'>Falkland Islands</option>
            <option value='Faroe Islands'>Faroe Islands</option>
            <option value='Fiji'>Fiji</option>
            <option value='Finland'>Finland</option>
            <option value='France'>France</option>
            <option value='French Guiana'>French Guiana</option>
            <option value='French Polynesia'>French Polynesia</option>
            <option value='French Southern Ter'>French Southern Ter</option>
            <option value='Gabon'>Gabon</option>
            <option value='Gambia'>Gambia</option>
            <option value='Germany'>Germany</option>
            <option value='Ghana'>Ghana</option>
            <option value='Gibraltar'>Gibraltar</option>
            <option value='Great Britain'>Great Britain</option>
            <option value='Greece'>Greece</option>
            <option value='Greenland'>Greenland</option>
            <option value='Grenada'>Grenada</option>
            <option value='Guadeloupe'>Guadeloupe</option>
            <option value='Guam'>Guam</option>
            <option value='Guatemala'>Guatemala</option>
            <option value='Guinea'>Guinea</option>
            <option value='Guyana'>Guyana</option>
            <option value='Haiti'>Haiti</option>
            <option value='Hawaii'>Hawaii</option>
            <option value='Honduras'>Honduras</option>
            <option value='Hong Kong'>Hong Kong</option>
            <option value='Hungary'>Hungary</option>
            <option value='Iceland'>Iceland</option>
            <option value='Indonesia'>Indonesia</option>
            <option value='India'>India</option>
            <option value='Iran'>Iran</option>
            <option value='Iraq'>Iraq</option>
            <option value='Ireland'>Ireland</option>
            <option value='Isle of Man'>Isle of Man</option>
          </select>
        </div>
        <div>
          <input type='checkbox' id='male' name='male' defaultChecked />
          <label htmlFor='male'>Male</label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <input type='checkbox' id='female' name='horns' />
          <label htmlFor='female'>Female</label>
        </div>

        <label htmlFor='comment'>დაწერეთ კომენტარი:</label>
        <textarea
          style={{ resize: 'none', marginTop: '20px' }}
          rows='4'
          cols='40'
          maxLength='100'
          name='comment'
          form='form'
          defaultValue='კომენტარი...'></textarea>
        <Link className='next-link' to='/wizard2'>
          შემდეგი
        </Link>
      </form>
    </div>
  );
};

export default Form;
