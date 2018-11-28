<template>
  <div>
    <h1>Character Viewer</h1>
    <!-- Input Form -->
    <div>
      <div>
        <input v-model="searchInput.characterName" placeholder="Character Name" />
        <!-- <input v-m -->
      </div>
      <div><button @click="searchCharacters">Search</button></div>
      <div><button @click="getAllCharacters">Get All Characters</button></div>
    </div>
    <div v-if="!!characters && characters.length > 0">
      <div v-for="c in characters"
      :key="c.id"
      :id="`character_${c.id}`">
      <h3>{{c.name}}</h3>
      </div>
    </div>
    <div class="footer">
      <span class="marvel-attribution">Data provided by Marvel. {{copyright}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      characters: {
        type: Array,
        default () {
          return [];
        }
      },
      copyright: '© 2014 Marvel',
      searchInput: {
        characterName: ''
      }
    };
  },
  methods: {
    getAllCharacters () {
      return this.$api.characters.getAllCharacters()
        .then((result) => {
          this.copyright = result.data.copyright;
          this.characters = result.data.data.results;
        });
    },
    searchCharacters () {
      return this.$api.characters.getCharacters(this.searchInput)
        .then((result) => {
          this.copyright = result.data.copyright;
          this.characters = result.data.data.results;
        });
    }
  }
};
</script>
