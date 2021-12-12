import {computed, ref} from "vue";

export default function useSortedPostsSearch(sortedPosts) {
    const searchQuery = ref('')
    const sortedPostsSearch = computed(() => {
        return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value))
    })

    return {
        searchQuery,
        sortedPostsSearch
    }
}