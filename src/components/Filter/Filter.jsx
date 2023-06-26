import { useDispatch, useSelector } from 'react-redux';
import { listSelector } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/slice';
import { InputSt, LabelSt } from './Styled';

export function Filter() {
  const filter = useSelector(listSelector);
  const dispatch = useDispatch();

  function changeFilter(evt) {
    dispatch(setFilter(evt.currentTarget.value));
  }

  return (
    <LabelSt>
      Find contacts by name
      <InputSt
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
      />
    </LabelSt>
  );
}
