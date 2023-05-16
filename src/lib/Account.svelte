<script>
	// account is a prop which can take in data from the parent like this <Account account={account} /> or shorthand <Account {account}/>
	export let account;

	const { name, pass, accountNumber, money } = account;
</script>

<div class="m-4 w-[25%] rounded-lg bg-blue-500 p-4 text-slate-100">
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
		{money} SEK
	</p>
</div>

<style>
</style>
