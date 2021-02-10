#### 1. What is the difference between Component and PureComponent? give an example where it might break my app.

    When the props or state changes, a PureComponent does a shallow comparison between old props/state and new props/state, and
    doesn't rerender if they haven't changed but it will rerender if they have changed. Whereas, a Component blindly rerenders
    whenever a new state/props are passed even if they have the same value as their previous values.
    Also, when the parent component changes, all of its child components rerender in

    PureComponent gives a certain amount of performance gain because of lesser rerenders and by avoiding unnecessary rerenders.

    An example where it might break is when you do a mutation of array/object, it won't rerender even if the props/state have changed.
    i.e., When a deep comparison is required.

#### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

    Context can be used to pass on props to children components at any level. Whenever there is a change,
    it is propagated to all the children using the context. But if you use shouldComponentUpdate and prevent a rerender, then
    the context propagation can be blocked.

#### 3. Describe 3 ways to pass information from a component to its PARENT.

    1. By passing a callback function from parent to children which handles the passing of information. Whenever the callback
    function is called from the child component, the parent will receive the data.
    2. By using Context API. If the children components are wrapped in a context provider component and the functions to change
    data is passed through it, the children components can call these functions to change the data in context. The parent and all other
    children consuming this context provider will receive the data.
    3. useReducer + context: By using a reducer we can maintain a global state which can be used in all the components. Using the "dispatch" function
    the state can be changed from any component and all components using this state will receive the changed state.

#### 4. Give 2 ways to prevent components from re-rendering.

    1. By using PureComponent. Since it does shallow comparison, it won't rerender when the props/state haven't changed.
    2. By using shouldComponentUpdate lifecycle method, you can add a custom decision to control the rerenders.

#### 5. What is a fragment and why do we need it? Give an example where it might break my app.

    Fragment is used to wrap multiple children components / elements without a need for a wrapper/parent component.
    E.g:
    <Fragment>
        <Component1>
        <Component2>
    </Fragment>

    Since react render expects a single element to be returned, if you're returning multiple elements you can wrap it with
    Fragment and the browser won't even render any DOM element for Fragment. It will be ignored.

    I can't think of an example where using Fragment can break your app. You can't pass any props to Fragment except for "key".
    Also, you can't apply styling to Fragment because you can't pass it a classname and also because it doesn't render any HTML.
    That's all I can think of currently.

#### 6. Give 3 examples of the HOC pattern.

    1. const RestrictedPage = withUser(Page)

    Here withUser is an HOC and Page is a wrapped component. The withUser HOC intercepts the Page component and renders conditionally.
    For example, withUser can check if the user is logged in and render the login page if the user isn't logged in, else render the originally requested
    component by also passing the correct props. Instead of writing this logic of checking if the user is logged-in in each of the component, we can make use
    of the withUser HOC and wrap our components with it.

#### 7. what's the difference in handling exceptions in promises, callbacks and async...await.

    1. Promises: catch can be used to handle exceptions in promises

    asyncCall().then().catch( (err) => // Handle exception here )

    2. In the case of callbacks, the function should handle the exception and pass it down to the callback function as an argument.

    function fn(arg1, callback) {
        if(error) {
            callback(err, data)
        }
    }

    Or you can pass two different callback function to handle success and failure

    function fn(arg, success, failure) {
        ...
    }

    3. With async, await, we can use a try-catch block to handle exceptions.

        const asyncCall = async () => {
            try {
                const data = await apiCall()
            } catch(e) {
                // Handle exception
            }
        }

#### 8. How many arguments does setState take and why is it async.

    It takes 2 arguments. First, the changes in state. Second, callback function which gets called once the state change is applied.
    It's async so that the other functions are not blocked while the state is being changed, since it could be an expensive operation.

#### 9. List the steps needed to migrate a Class to Function Component.

    1. Change the component definition from a class to a function.
    2. No constructor is required in a function. Can be safely removed
    3. The initial state that was being set in the constructor in case of a Class component must
       be migrated to useState hook.
    4. All the setState calls must be replaced by each state's update hook method.

        eg: this.state = { count: 0 } this.setState({ count: 1})
            =====>
            const [ count, setCount ] = useState(0)

            setCount(0)
    5. Most of the lifecycle methods of class component can be replaced with useEffect.
    6. Instead of defining a render method, you can simply return the UI elements in a functional component
    7. Props can be simply passed as the function argument in case of a functional component

#### 10. List a few ways styles can be used with components.

    1. styled components

    import styled from 'styled-components'

    const UI = styled.div`
        ....
    `

    const MyComponent = () => {
        return <UI>
            ...
            ..
            ..
        </UI>
    }

    2. inline styling

    <div style={{ ... }}>
    </div>

    3. Stylesheets

        Pass className as attributes to the elements and import the stylesheet. The appropriate styling will be applied based on the classnames.

        <div className="container"></div>

    4. CSS Modules
        Save your CSS file as styles.module.css
        .container {
            color: red
        }

        import styles from "./styles.css";

        <div style={styles.container}></div>

#### 11. How to render an HTML string coming from the server.

    Using dangerouslySetInnerHTML:

    <div dangerouslySetInnerHTML={{__html: '<h1>some html</h1>'}} />
