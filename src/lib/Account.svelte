<script>
	// account is a prop which can take in data from the parent like this <Account account={account} /> or shorthand <Account {account}/>
	export let account;
</script>

<a class="m-4 inline-block" href="/account/{account.accountNumber}">
	<div class="w-fit rounded-lg bg-blue-600 p-4 text-white">
		<p class="text-xl">
			{account.name}
		</p>
		<p>
			{account.accountNumber}
		</p>
		<p>
			{account.funds} SEK
		</p>
	</div>
</a>

<style>
</style>
