import { Label } from '@radix-ui/react-label';
import React from 'react'

const Commonform = ({registerFormControls}) => {

    function rederInputsByComponentsType(getControlItem){
        let  element = null;
        switch (getControlItem.componenttype) {
            case 'input':
                element = <Input name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.name}
                type={getControlItem.Type}
                />
                break;
        
            default:
                element = <Input name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.name}
                type={getControlItem.Type}
                />
                break;
            case 'select':
                element = <Input name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.name}
                type={getControlItem.Type}
                />
                break;
        
            default:
                element = <Input name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.name}
                type={getControlItem.Type}
                />
                break;
            case 'textarea':
                element = <Input name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.name}
                type={getControlItem.Type}
                />
                break;
        
            default:
                element = <Input name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.name}
                type={getControlItem.Type}
                />
                break;
            
        }
        return element;
    }
  return (
    <form>
        <div className='flex flex-col gap-3'>
            {
                registerFormControls.map(controlItem => <div className=' grid w-full gap-5' key={controlItem}>
                    <Label className='mb-1'>{controlItem.label}</Label>
                    {
                        rederInputsByComponentsType(controlItem)
                    }
                </div>)
            }
        </div>
    </form>
  )
}

export default Commonform;
