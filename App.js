    //object is a place where you give attributes to the element/tag
    const heading = React.createElement('h1', {
        id: 'heading',
        className: 'heading',
        style: { color: 'blue', fontSize: '30px' },
        onClick: () => {
            alert('Hello from React!');
        }
    },'Hello from React!');


    //for nested

    const parent = React.createElement('div', {id:'parent'},
                 [  React.createElement('div', {id:'child'},
                   [   React.createElement('h1', {}, 'Hi i am h1 tag!'),
                       React.createElement('h2', {}, 'Hi i am h2 tag!')
                   ]),
                   React.createElement('div', {id:'child2'},
                    [   React.createElement('h1', {}, 'Hi i am h1 tag!'),
                        React.createElement('h2', {}, 'Hi i am h2 tag!')
                    ])
                ]
    )
    // props hold the id , children and className of the element
    console.log(parent); // React element it will return an object
    const root = ReactDOM.createRoot(document.getElementById('root'));
    //behind the scene react will convert this into a real DOM element
    root.render(parent);