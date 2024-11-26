<template>
    <div class="search-container">
        <input
            type="text"
            v-model="searchQuery"
            placeholder="Search recipes..."
            class="search-input"
            @input="onSearch"
        />
    </div>
</template>

<script>
export default {
    name: 'SearchRecipe',
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        onSearch() {
            this.$emit('search', this.searchQuery)
        }
    }
}
</script>

<style scoped>
.search-container {
    margin: 1rem 0;
}

.search-input {
    width: 100%;
    max-width: 400px;
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.search-input:focus {
    outline: none;
    border-color: #666;
}
</style>