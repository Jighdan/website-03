<template>
	<section class="project__container">
		<h3 class="project__title">{{ project.title }}</h3>
		<h4 class="short__description">{{project.shortDescription }}</h4>
		<p class="long__description">{{ project.longDescription }}</p>

		<section class="project__links">
			<a v-if="project.demo" :href="project.demo" class="project__link">Demo</a>
			<a v-if="project.code" :href="project.code" class="project__link">Code</a>
		</section>
	</section>
</template>

<script>
export default {
	name: "Project",
	props: { project: Object },
	functional: true // Faster load time
}
</script>

<style lang="scss" scoped>
	.project__title {
		margin-bottom: 0;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.short__description {
		font-style: italic;
    font-size: 0.95rem;
    font-weight: 500;
	}

	.long__description {
		font-size: 0.90rem;
	}

	.project__links {
		display: flex;
    justify-content: space-evenly;
    align-items: center;

		.project__link {
			padding: 1%;
			border-radius: 5px;
      font-weight: bold;
      background-color: white;
      color: black;
		}
	}
</style>