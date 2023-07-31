<!-- src/App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./home.svelte";
  import WalletSignIn from "./components/WalletSignIn.svelte";

  export let url = "/";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/wallet-sign-in">Wallet Sign In</Link>
  </nav>
  <div>
    <Route path="/wallet-sign-in" component={WalletSignIn} />
    <Route path="/"><Home /></Route>
  </div>
</Router>

<style>
  /* Add any global styles here */
</style>
