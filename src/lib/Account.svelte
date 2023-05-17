<script>
	// account is a prop which can take in data from the parent like this <Account account={account} /> or shorthand <Account {account}/>
	export let account;

	const { name, pass, accountNumber, funds } = account;
</script>

<a class="m-4 inline-block" href="/account/{accountNumber}">
	<div class="w-fit rounded-lg bg-blue-600 p-4 text-white">
		<p class="text-xl">
			{name}
		</p>
		<p>
			{pass}
		</p>
		<p>
			{accountNumber}
		</p>
		<p>
			{funds} SEK
		</p>
	</div>
</a>

<style>
</style>
