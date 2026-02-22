import { StylesConfig } from 'react-select'

interface OptionType {
  value: string
  label: string
}

export const customSelectStyles: StylesConfig<OptionType> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#FFFFFF',
    borderColor: '1px solid #213F7D',
    // boxShadow: state.isFocused ? '0 0 0 1px #007BFF' : 'none',
    // '&:hover': {
    //   borderColor: '#007BFF',
    // },
    borderRadius: '8px',
    minHeight: '40px',
    color: '#545F7D',
    outline: 'none',

    boxShadow: 'none',
    opacity: '0.5'
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#007BFF'
      : state.isFocused
      ? '#e6f0ff'
      : '#fff',
    color: state.isSelected ? '#fff' : '#333',
    padding: 10,
    cursor: 'pointer'
  }),

  menu: provided => ({
    ...provided,
    borderRadius: '8px',
    marginTop: 0
  }),

  menuList: provided => ({
    ...provided,
    padding: 0
  }),

  placeholder: provided => ({
    ...provided,
    color: '#545F7D',
    // opacity: '0.5',
    fontSize: '14px',
    fontWeight: '400'
  })
}
