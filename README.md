<h3>React Hooks Overview</h3>

<p>This repository demonstrates the use of <strong>React Hooks</strong> to manage state, side effects, and more in functional components.</p>

<h4>Key Hooks:</h4>

<ul>
  <li><strong><code>useState</code></strong>: Adds state to functional components.<br>
    Example: <code>const [count, setCount] = useState(0);</code>
  </li>
  <li><strong><code>useEffect</code></strong>: Handles side effects like fetching data or updating the DOM.<br>
    Example: <code>useEffect(() => { document.title = count; }, [count]);</code>
  </li>
  <li><strong><code>useContext</code></strong>: Accesses and shares data across components without passing props.<br>
    Example: <code>const value = useContext(MyContext);</code>
  </li>
  <li><strong><code>useReducer</code></strong>: Manages complex state logic, similar to Redux.<br>
    Example: <code>const [state, dispatch] = useReducer(reducer, initialState);</code>
  </li>
  <li><strong><code>useCallback</code></strong>: Memoizes functions to optimize performance.<br>
    Example: <code>const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);</code>
  </li>
  <li><strong><code>useMemo</code></strong>: Memoizes values to avoid unnecessary recalculations.<br>
    Example: <code>const memoizedValue = useMemo(() => compute(a, b), [a, b]);</code>
  </li>
  <li><strong><code>useRef</code></strong>: Persists values across renders and directly interacts with DOM elements.<br>
    Example: <code>const inputRef = useRef(null);</code>
  </li>
  <li><strong><code>useLayoutEffect</code></strong>: Fires synchronously after DOM updates, useful for layout adjustments.<br>
    Example: <code>useLayoutEffect(() => { /* Sync layout */ });</code>
  </li>
  <li><strong><code>useImperativeHandle</code></strong>: Customizes the value exposed to parent components using <code>ref</code>.<br>
    Example: <code>useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus() }));</code>
  </li>
  <li><strong><code>useDebugValue</code></strong>: Displays custom labels in React DevTools for debugging.<br>
    Example: <code>useDebugValue(isOnline ? 'Online' : 'Offline');</code>
  </li>
</ul>
