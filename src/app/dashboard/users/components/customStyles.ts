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
    borderRadius: '8px',
    minHeight: '40px',
    color: '#545F7D',
    outline: 'none',
    boxShadow: 'none',
    opacity: '0.5',
    fontWeight: '400',
    fontSize: '14px'
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#39CDCC'
      : state.isFocused
      ? '#e6f0ff'
      : '#fff',
    color: state.isSelected ? '#fff' : '#545F7D',
    padding: 10,
    fontWeight: '400',
    cursor: 'pointer',
    fontFamily: 'Work Sans'
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
