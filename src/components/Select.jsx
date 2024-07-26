import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";

const Select = ({
  isClearable,
  isSearchable,
  isDisabled,
  options,
  Placeholder,
  isMulti,
  onChangeHandler,
  onMenuOpen,
  onSearchHandler,
}) => {
  const [menuShow, setMenuShow] = useState(onMenuOpen);
  const [value, setValue] = useState(isMulti ? [] : null);

  const selectOption = (e) => {
    if (isMulti) {
      setValue((prev) => [...prev, e.target.innerText]);
    } else {
      setValue(e.target.innerText);
    }
    setMenuShow((prev) => !prev);
  };

  const clear = (i) => {
    if (i == null) {
      setValue(isMulti ? [] : "");
    } else {
      setValue((prev) => prev.filter((_, j) => i !== j));
    }
  };

  const searchDiv = () => {
    return (
      (isMulti || !value) && (
        <input
          type="text"
          placeholder={Placeholder}
          className="kzui-input"
          onChange={onChangeHandler}
          onClick={() => setMenuShow(true)}
        />
      )
    );
  };

  return (
    <div className="kzui-dropdown">
      <div className={`kzui-value ${menuShow && "kzui-value-clicked"}`}>
        <div className="kzui-values">
          <div className="kzui-value">
            {isMulti
              ? value.map((option, i) => (
                  <div className="kzui-item" key={i}>
                    <span>{option}</span>
                    {isClearable && (
                      <div className={`kzui-delete`} onClick={() => clear(i)}>
                        <FaDeleteLeft />
                      </div>
                    )}
                  </div>
                ))
              : value && (
                  <div className="kzui-item">
                    <span>{value}</span>
                  </div>
                )}
            {isSearchable && searchDiv()}
          </div>
        </div>
        <div className="kzui-icons">
          {(isClearable || isMulti) && (
            <div className={`kzui-delete`} onClick={() => clear(null)}>
              <TiDelete />
            </div>
          )}
          <div
            className={`kzui-caret ${menuShow && "kzui-caret-rotate"}`}
            onClick={() => setMenuShow((prev) => !prev)}
          ></div>
        </div>
      </div>
      <ul className={`kzui-menu ${menuShow && "kzui-menu-open"}`}>
        {options
          .filter((item) => {
            return onSearchHandler(item);
          })
          .map((option, i) => (
            <li key={i} onClick={selectOption}>
              {option}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Select;
