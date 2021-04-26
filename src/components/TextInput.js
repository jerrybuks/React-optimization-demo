import React from 'react'

 const TextInput = React.memo((props) => {
     const {handleChange, user, itemIndexVal, name, value} = props;
    return (
        <input
         type="text"
          name={name}
          value={value}
          onChange={(e) => handleChange(e,user,itemIndexVal)}
        />
    )
})

  function areEqual(prevProps, nextProps) {
      if(prevProps.value === nextProps.value){
          return true;
      }
      return false;
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
  }
  export default React.memo(TextInput, areEqual);