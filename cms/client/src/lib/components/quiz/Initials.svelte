<script>
	export let tagGroup;

	function getInitials(tagGroup) {
		let initials = [];
		initials.push(tagGroup[0].charAt(0));
		initials.push(tagGroup[tagGroup.length - 1].charAt(0));
		return initials;
	}

	let initials = getInitials(tagGroup);

	if (initials) {
		initials = initials[0] + ' - ' + initials[1];
	}
	console.log(initials);
</script>

<div class=" text-xl font-thin text-drexel-light-blue mb-2">
	{#if initials}
		{initials}
	{/if}
</div>
