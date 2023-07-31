<!-- src/components/WalletSignIn.svelte -->
<script lang="ts">
    import ArweaveWalletWrapper from './ArweaveWalletWrapper.js';
  </script>
  
  <div class="wallet-sign-in">
    <ArweaveWalletWrapper />
  </div>
  
  <style>
    .wallet-sign-in {
      /* Add styles to center the component on the page */
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  </style>
  