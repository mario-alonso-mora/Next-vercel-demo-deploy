import {FC, PropsWithChildren} from 'react';


export const DarkLayOut: FC <PropsWithChildren> = ( { children  } ) => {


  return (
    
    <div style={{

        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius:'5px',
        padding:'10px'


    }}>

    <h3>DARK-LAYOUT</h3>

    <div>
    {children}

    </div>

    </div>


  )
}
