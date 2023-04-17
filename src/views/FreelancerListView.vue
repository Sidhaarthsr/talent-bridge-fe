<template>
    <div>

        <body class='u-body u-image u-image-tiles u-xl-mode bg'>
            <div class="search-bar">
                <input type="text" v-model="searchTerm">
                <button @click="search">Search</button>
                <label>
                    <input type="checkbox" v-model="recommended"> Recommended
                </label>
            </div>
            <div class="freelancer-list">
                <div v-for="freelancer in filterFreelancers" :key="freelancer.id">
                    <h2>{{ freelancer.name }}</h2>
                    <p>{{ freelancer.description }}</p>
                    <ul>
                        <li v-for="skill in freelancer.skills" :key="skill.id">{{ skill.name }}</li>
                    </ul>
                </div>
            </div>
        </body>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            freelancers: [
                {
                    "id": 1,
                    "clientId": 2,
                    "assignee": 0,
                    "name": "Vue JS Developer",
                    "description": "Well versed in advanced J2EE concepts to handle any server side issues",
                    "files": ["https://via.placeholder.com/150"],
                    "status": "INITIATED",
                    "paymentMode": "HOURLY",
                    "minBudget": 20000,
                    "maxBudget": 40000,
                    "addOns": "RECRUITER",
                    "sharedRequests": [],
                    "bids": [],
                    "skills": [
                        {
                            "id": 3,
                            "name": "cloud development"
                        },
                        {
                            "id": 4,
                            "name": "j2ee"
                        },
                        {
                            "id": 1,
                            "name": "skill100"
                        },
                        {
                            "id": 6,
                            "name": "rdbms"
                        },
                        {
                            "id": 6,
                            "name": "vuejs"
                        }
                    ],
                    "freelancerStartTime": null,
                    "timeLimit": 0,
                    "recommended":true
                },
                {
                    "id": 1,
                    "clientId": 2,
                    "assignee": 0,
                    "name": "Advanced Java freelancer",
                    "description": "Well versed in advanced J2EE concepts to handle any server side issues",
                    "files": ["https://via.placeholder.com/150"],
                    "status": "INITIATED",
                    "paymentMode": "HOURLY",
                    "minBudget": 20000,
                    "maxBudget": 40000,
                    "addOns": "RECRUITER",
                    "sharedRequests": [],
                    "bids": [],
                    "skills": [
                        {
                            "id": 3,
                            "name": "cloud development"
                        },
                        {
                            "id": 4,
                            "name": "j2ee"
                        },
                        {
                            "id": 1,
                            "name": "skill100"
                        },
                        {
                            "id": 6,
                            "name": "rdbms"
                        }
                    ],
                    "freelancerStartTime": null,
                    "timeLimit": 0
                }],
            searchTerm: '',
            recommended: false
        };
    },
    async created() {
    },
    computed: {
        filterFreelancers() {
            let filtered = this.freelancers.filter(freelancer => {
                if (this.recommended && !freelancer.recommended) {
                    return false;
                }
                if (this.searchTerm) {
                    return freelancer.name.toLowerCase().includes(this.searchTerm.toLowerCase());
                }
                return true;
            });
            return filtered;
        }
    },
    methods: {
        async search() {
            const response = await fetch(`https://your-api-url.com/freelancers?q=${this.searchTerm}&recommended=${this.recommended}`);
            const data = await response.json();
            this.freelancers = data;
        }
    }
}
</script>
  
<style>
/* Search bar */
.search-bar {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.search-bar input[type="text"] {
    margin-right: 10px;
    padding: 5px 10px;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s ease-in-out;
}

.search-bar input[type="text"]:focus {
    outline: none;
    border-color: #5e5e5e;
}

.search-bar button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #4CAF50;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.search-bar button:hover {
    background-color: #3e8e41;
}

.search-bar label {
    margin-left: 10px;
    font-size: 14px;
    color: #666;
}

/* freelancer list */
.freelancer-list {
    display: flex;
    flex-wrap: wrap;
}

.freelancer-list>div {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.freelancer-list>div:hover {
    transform: scale(1.05);
}

.freelancer-list h2 {
    margin-top: 0;
    font-size: 24px;
    color: #333;
}

.freelancer-list ul {
    margin: 0;
    padding: 0;
}

.freelancer-list li {
    list-style: none;
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    color: #666;
}

.freelancer-list p {
    margin: 10px 0;
    font-size: 16px;
    color: #333;
}
</style>
  