const React = require('react');
const useState = require('react').useState;
const InputLabel = require('@material-ui/core/InputLabel').default;
const S = require('string');
const asField = require('informed').asField;

export const Renderer = asField(({fieldState, fieldApi, label, ...props}) => {
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  const [files, setFiles] = useState([]);
  console.log(files)
  return <React.Fragment>
    {label && <InputLabel>{S(label).capitalize().s}</InputLabel>}
    <input {...rest}
      ref={forwardedRef}
      type="file"
      multiple={true}
      onChange={e => handleChange(e, setValue)}
      onBlur={e => {
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
      }}
      style={fieldState.error ? { border: 'solid 1px red' } : null} 
      />
  </React.Fragment>;
});

const handleChange = (e, setValue) => {
  console.log(e.target.files)
  setValue(e.target.files)
}

const fileListToArray = list => {
  const array = [];
  for (let i = 0; i < list.length; i++) {
    array.push(list.item(i));
  }
  return array;
}

export const validator = ({value, required}) => {

};

export const defaultValue = '';