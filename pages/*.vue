<script lang="ts">
import { Context } from "@nuxt/types";

export default {
	asyncData({ redirect }: Context) {
		return redirect("/");
	},
};
</script>
