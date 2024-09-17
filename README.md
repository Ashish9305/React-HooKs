This repository demonstrates the use of React Hooks to manage state, side effects, and more in functional components.

Key Hooks:
useState: Adds state to functional components.
Example: const [count, setCount] = useState(0);

useEffect: Handles side effects like fetching data or updating the DOM.
Example: useEffect(() => { document.title = count; }, [count]);

useContext: Accesses and shares data across components without passing props.
Example: const value = useContext(MyContext);

useReducer: Manages complex state logic, similar to Redux.
Example: const [state, dispatch] = useReducer(reducer, initialState);

useCallback: Memoizes functions to optimize performance.
Example: const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);

useMemo: Memoizes values to avoid unnecessary recalculations.
Example: const memoizedValue = useMemo(() => compute(a, b), [a, b]);

useRef: Persists values across renders and directly interacts with DOM elements.
Example: const inputRef = useRef(null);

useLayoutEffect: Fires synchronously after DOM updates, useful for layout adjustments.
Example: useLayoutEffect(() => { /* Sync layout */ });

useImperativeHandle: Customizes the value exposed to parent components using ref.
Example: useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus() }));

useDebugValue: Displays custom labels in React DevTools for debugging.
Example: useDebugValue(isOnline ? 'Online' : 'Offline');

