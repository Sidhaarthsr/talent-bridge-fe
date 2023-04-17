<template>
    <div class="multiselect-dropdown">
      <div class="input-container" @click="toggleDropdown">
        <div class="selected-items">
          <span v-for="(item, index) in selectedItems" :key="index" class="chip">
            {{ item }}
            <span class="close" @click="removeSelected(index)">&times;</span>
          </span>
          <input v-model="searchQuery" ref="searchInput" placeholder="Type to search..." />
        </div>
        <span class="arrow" :class="{ 'arrow-up': isDropdownOpen, 'arrow-down': !isDropdownOpen }"></span>
      </div>
      <div class="dropdown-menu" v-show="isDropdownOpen">
        <ul>
          <li v-for="(option, index) in filteredOptions" :key="index" @click="selectOption(option)">
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MultiselectDropdown',
    props: {
      options: {
        type: Array,
        required: true
      },
      value: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isDropdownOpen: false,
        searchQuery: ''
      }
    },
    computed: {
      selectedItems() {
        return this.value
      },
      filteredOptions() {
        return this.options.filter(option => option.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen
        if (this.isDropdownOpen) {
          this.$nextTick(() => {
            this.$refs.searchInput.focus()
          })
        }
      },
      selectOption(option) {
        if (!this.value.includes(option)) {
          this.$emit('input', [...this.value, option])
        }
        this.searchQuery = ''
      },
      removeSelected(index) {
        const newValue = [...this.value]
        newValue.splice(index, 1)
        this.$emit('input', newValue)
      }
    }
  }
  </script>
  
  <style scoped>
  .multiselect-dropdown {
    display: inline-block;
    position: relative;
  }
  
  .input-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
  }
  
  .selected-items {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    align-items: center;
  }
  
  .chip {
    display: inline-flex;
    align-items: center;
    border-radius: 16px;
    background-color: #f5f5f5;
    padding: 4px 8px;
    margin-right: 4px;
    margin-bottom: 4px;
  }
  
  .chip:hover .close {
    display: inline-block;
  }
  
  .close {
    display: none;
    cursor: pointer;
    margin-left: 8px;
    font-weight: bold;
  }
  
  .arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #666 transparent transparent transparent;
    margin-left: 8px;
  }
  
  .arrow-up {
    transform: rotate(180deg);
  }
  
  .arrow-down {
    transform: rotate(0deg);
  }

 </style>