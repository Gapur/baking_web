import React from 'react';
import Select from 'react-select';

function render({ input, label, meta, ...custom }, renderInput) {
  const { help, layout, inputClassName, noLabel, ...props } = custom;

  let inputClass = inputClassName ? inputClassName + ' input' : 'input';
  if (meta.touched && meta.error) inputClass += ' is-danger';
  const id = `${meta.form}_${input.name}`;
  const inputProps = { ...props, ...input, className: inputClass, id: id }

  switch (layout) {
    case "input-only":
      return (
        <div>
          {renderInput(inputProps)}
          {meta.touched && meta.error && <p className="help is-danger">{meta.error}</p>}
          {help && <p className="help">{help}</p>}
        </div>
      );
    case 'vertical':
      return (
        <div className="field">
          {noLabel || <label className="label">{label}</label>}
          {renderInput(inputProps)}
          {meta.touched && meta.error && <p className="help is-danger">{meta.error}</p>}
          {help && <p className="help">{help}</p>}
        </div>
      );
    default:
      return (
        <div className="field is-horizontal">
          {noLabel ||
            <div className="field-label is-normal">
              <label className="label">{label}</label>
            </div>
          }
          <div className="field-body">
            <div className="field">
              {renderInput(inputProps)}
              {meta.touched && meta.error && <p className="help is-danger">{meta.error}</p>}
              {help && <p className="help">{help}</p>}
            </div>
          </div>
        </div>
      );
  }
}

export const renderInput = (props) => render(props, (inputProps) => {
  return (
    <div className="control">
      <input {...inputProps} />
    </div>
  );
});

export const renderPlainInput = ({ input, meta, help, inputClassName, ...props }) => {
  let inputClass = inputClassName ? inputClassName + ' input' : 'input';
  if (meta.touched && meta.error) inputClass += ' is-danger';

  return (
    <div className="control">
      <input className={inputClass} {...input} {...props} />
      {meta.touched && meta.error && <p className="help is-danger">{meta.error}</p>}
      {help && <p className="help">{help}</p>}
    </div>
  );
}

export const renderSlugInput = (props) => {
  return render({ ...props, inputClassName: "has-text-right" }, (inputProps) => (
    <div className="field has-addons">
      <div className="control is-expanded">
        <input {...inputProps} />
      </div>
      <div className="control">
        <a className="button is-static">
          .whohello.com
        </a>
      </div>
    </div>
  ));
}

export const renderSelect = (props) => render(props, ({ id, onChange, onBlur, ...inputProps }) => {
  inputProps = { ...inputProps, className: inputProps.className.replace('input', '') };
  return (
    <div className="control">
      <Select {...inputProps}
        clearable={false}
        inputProps={{ id: id }}
        onChange={(option) => onChange(option && option.value)}
        onBlur={() => onBlur(inputProps.value)}
      />
    </div>
  );
});

export const renderTextarea = (props) => render({ ...props, inputClassName: "textarea" },
  (inputProps) => {
    return (
      <div className="control">
        <textarea {...inputProps} />
      </div>
    );
  });

export const renderPicture = (props) => render(props, (inputProps) => {
  const { picture_url } = inputProps;
  return (
    <div className="control">
      <figure className="image is-128x128">
        <img src={picture_url} />
      </figure>
    </div>
  );
});

export const renderCounter = (props) => {
  const { input: { name, value, onChange }, label } = props;
  const handleChange = (e, value) => {
    e.preventDefault();
    onChange(value);
  }

  let lbl = label;
  if (typeof label === "function") {
    lbl = label(value);
  }

  return (
    <div className="field is-horizontal has-addons input-counter">
      <div className="control">
        <button
          className="button"
          disabled={value <= 1}
          onClick={(e) => handleChange(e, value - 1)}
        >
          <span className="icon is-small">
            <i className="fa fa-minus"></i>
          </span>
        </button>
      </div>

      <div className="control" style={{ width: '70px' }}>
        <input
          className="input has-text-centered"
          name={name}
          value={value}
          readOnly
        />
      </div>

      <div className="control">
        <button className="button" onClick={(e) => handleChange(e, value + 1)}>
          <span className="icon is-small">
            <i className="fa fa-plus"></i>
          </span>
        </button>
      </div>

      {lbl &&
        <div className="field-label is-normal">
          <label className="label">{lbl}</label>
        </div>
      }
    </div>
  );
};

export const renderCheckbox = (props) => render(props, (inputProps) => {
  const { id, name, inputLabel, value, onChange } = inputProps;
  return (
    <div className="field">
      <label className="checkbox">
        <input type="checkbox" id={id} checked={value} name={name} onChange={onChange} />
        <span style={{ marginLeft: 10 }}>{inputLabel}</span>
      </label>
    </div>
  );
});

const renderSingleRadio = (label, value, isInline, checked, { id, onChange, onBlur }) => {
  const style = isInline ? { marginLeft: 0, marginRight: 25 }
    : { display: 'block', margin: 0, marginBottom: 10 };
  return (
    <label key={value} style={style} className="radio column is-5">
      <input
        type="radio"
        id={`${id}_${value}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
      />
      &nbsp;&nbsp;{label}
    </label>
  );
}

export const renderRadioGroup = (props) => render(props, ({ value, options, isInline, ...inputProps }) => {
  const selectedValue = value;
  return (
    <div className="control columns is-multiline is-gapless">
      {options.map(({ label, value }) => renderSingleRadio(label, value, isInline,
        selectedValue == value || (value === 'true') === selectedValue, inputProps))}
    </div>
  );
});

export const renderCheckboxGroup = (props) => render(props, (inputProps) => {
  const { id, name, options, onChange } = inputProps;
  const values = inputProps.value;

  const onCheckboxChange = (value) => (event) => {
    if (event.target.checked) {
      onChange((values || []).concat(value));
    } else {
      onChange((values || []).filter(val => val != value));
    }
  }

  return (
    <div className="control columns is-multiline is-gapless">
      {options.map(({ label, value }) => (
        <label key={value} className="checkbox column is-5">
          <input
            type="checkbox"
            id={`${id}_${value}`}
            name={`${name}_${value}`} 
            onChange={onCheckboxChange(value)}
            checked={values && values.includes(value)}
          />
          &nbsp;&nbsp;{label}
        </label>
      ))}
    </div>
  );
});
