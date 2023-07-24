import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const ColorMultiSelectField = ({
  options,
  onChange,
  name,
  label,
  defaultValue
}) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.values(options)
      : options;

  const handleChange = (value) => {
    onChange({ name: name, value });
  };
  return (
    <div className='mb-4'>
      <label className='form-label'>{label}</label>
      <Select
        isMulti
        styles={{
          option: (baseStyles) => ({
            ...baseStyles,
            color: 'black'
          })
        }}
        closeMenuOnSelect={false}
        defaultValue={defaultValue}
        options={optionsArray}
        className='basic-multi-select'
        classNamePrefix='react-select'
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};
ColorMultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.array
};

export default ColorMultiSelectField;

// import React from 'react';
// import chroma from 'chroma-js';

// import { ColourOption, colourOptions } from '../data';
// import Select, { StylesConfig } from 'react-select';

// const colourStyles: StylesConfig<ColourOption, true> = {
//   control: (styles) => ({ ...styles, backgroundColor: 'white' }),
//   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       backgroundColor: isDisabled
//         ? undefined
//         : isSelected
//         ? data.color
//         : isFocused
//         ? color.alpha(0.1).css()
//         : undefined,
//       color: isDisabled
//         ? '#ccc'
//         : isSelected
//         ? chroma.contrast(color, 'white') > 2
//           ? 'white'
//           : 'black'
//         : data.color,
//       cursor: isDisabled ? 'not-allowed' : 'default',

//       ':active': {
//         ...styles[':active'],
//         backgroundColor: !isDisabled
//           ? isSelected
//             ? data.color
//             : color.alpha(0.3).css()
//           : undefined,
//       },
//     };
//   },
//   multiValue: (styles, { data }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       backgroundColor: color.alpha(0.1).css(),
//     };
//   },
//   multiValueLabel: (styles, { data }) => ({
//     ...styles,
//     color: data.color,
//   }),
//   multiValueRemove: (styles, { data }) => ({
//     ...styles,
//     color: data.color,
//     ':hover': {
//       backgroundColor: data.color,
//       color: 'white',
//     },
//   }),
// };

// export default () => (
//   <Select
//     closeMenuOnSelect={false}
//     defaultValue={[colourOptions[0], colourOptions[1]]}
//     isMulti
//     options={colourOptions}
//     styles={colourStyles}
//   />
// );
