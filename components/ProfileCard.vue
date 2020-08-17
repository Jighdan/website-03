<template>
	<section class="profile__card">
		<header class="profile__header">
			<img class="profile__image fluid__image" :src="profile.avatar_url" :alt="`${profile.name}'s picture`">
		</header>

		<main class="profile__body">
			<h1 class="profile__name">{{ profile.name }}</h1>
			<h3 class="profile__user">{{ profile.login }}</h3>

			<article class="profile__location__container">
				<svg class="location__icon svg__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
				<span class="profile__location">{{ profile.location }}</span>
			</article>
		
			<section class="profile__meta">
				<a :href="profile.html_url" class="profile__link" target="_blank"><svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>

				<article class="meta">
					<span class="data">{{ profile.followers }}</span>	
					<span class="data__text">Followers</span>
				</article>
				<article class="meta">
					<span class="data">{{ profile.following }}</span>		
					<span class="data__text">Following</span>
				</article>
			</section>

		</main>
	</section>
</template>

<script>
import axios from "axios";

export default {
	name: "ProfileCard",
	data() {
		return {
			profile: {}
		}
	},
	async created () {
		const response = await axios.get("https://api.github.com/users/Jighdan");
		this.profile = response.data
	}
}
</script>

<style lang="scss" scoped>
$animation-timing: 4.5s;
$card-size: 15rem;
$card-image-size: 10rem;

.profile__card {
	width: $card-size;
	padding: 0.75rem 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	user-select: none;
	
	// Animations
	transition: $animation-timing;
	border-radius: 15px 0 15px 0;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

	&:hover {
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
	}
}

.profile__header {
	padding: 0.50rem 1.25rem 0.50rem 1.25rem;

	.profile__image {
		width: $card-image-size;
		height: auto;
		margin-left: auto;
		margin-right: auto;
		border-radius: 50%;
	}
}

.profile__body {
	width: 100%;
	padding-left: 1.25rem;
	padding-right: 1.25rem;

	.profile__user {
		font-size: 1.2rem;
		font-weight: 400;
		font-style: italic;
	}
}

.profile__location__container {
	display: flex;
	align-items: center;

	.location__icon {
		height: 15px;
		width: auto;
	}

	.profile__location {
		font-size: 0.9rem;
		font-weight: 300;
	}
}

.profile__meta {
	width: 100%;
	margin-top: 0.30rem;
	margin-left: auto;
	margin-right: auto;
	padding: 0.25rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;

	.meta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		.data {
			font-size: 0.65rem;
			font-weight: bold;
		}

		.data__text {
			font-size: 0.55rem;
		}
	}
}

</style>