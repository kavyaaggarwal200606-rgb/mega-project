// import React from 'react'
// import { useId } from 'react'

// const Select = ({
//     options,
//     classname, 
//     label,
//     ...props
// },ref) =>  {
//      const id = useId()
//   return (
//    <div>
//     {label && <label htmlFor={id}>
//       {label}</label>}
//     <select  ref={ref} id={id} classname={classname} {...props}>
//        {options?.map((option) => {
//         <option key={option} value={option}>
// {option}
//         </option>
//        })}
//     </select>
//     </div>
//   )
// }

// export default React.forwardRef(Select)


import  { useId, forwardRef } from 'react'

// कॉम्पोनेंट को सीधे forwardRef के अंदर ही डिफाइन करें
const Select = forwardRef(({
    options,
    className = "", // classname को className किया और default value दी
    label,
    ...props
}, ref) => {
    const id = useId()
    
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            
            <select ref={ref} id={id} className={className} {...props}>
                {/* map के अंदर से JSX को return करना ज़रूरी है */}
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
})

export default Select // अब इसे आप कहीं भी सामान्य रूप से इम्पोर्ट कर सकते हैं
