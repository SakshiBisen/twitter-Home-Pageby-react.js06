import "./App.css";
 
function App() {
  return (
    <div className="logo-box">
      <img src="./logo.png.png" alt="apple" className="logo" />
      <h2>Sign In to Twitter</h2>
      <button>
        <img src="./download.jpeg" alt="apple" />
        Sign in with Google
      </button>
      <button>
        <img src="./apple.jpeg" alt="apple" />
        Sign in with Google
      </button>
      <hr></hr>
      <span>Or</span>
      <form>
        <input type="text" placeholder="Phone email or username" />
        <button>Next</button>
      </form>
      <button>Forget Password</button>
      <p>
        Don't Have an account<a>Sign up</a>
      </p>
    </div>
  );
}
 
export default App;