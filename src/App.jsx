import React from 'react';
import ComponentDetail from './componentDetail';
import Person from './person';


const App = () => {
    return (
        <div>
            <Person >
                <ComponentDetail
                    author="shima"
                    time="Today at 4:55 AM"
                    comment="Today is very hot"
                />
            </Person>
            <Person >
                <ComponentDetail
                    author="mohammad"
                    time="yesterday at 4:55 AM"
                    comment="i am very good"
                />
            </Person>
            <Person >
                <ComponentDetail
                    author="amirali"
                    time="Tomorrow at 4:55 AM"
                    comment="iran is good"
                />
            </Person>




        </div>

    )
}
export default App;