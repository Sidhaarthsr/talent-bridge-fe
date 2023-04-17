<template>
    <div>

        <body class='u-body u-image u-image-tiles u-xl-mode bg'>
            <h1>Projects</h1>
            <div class="search-bar">
                <input type="text" v-model="searchTerm">
                <button @click="search">Search</button>
                <label>
                    <input type="checkbox" v-model="recommended"> Recommended
                </label>
            </div>
            <div class="project-list list-wrapper">
                <div v-for="project in filteredProjects" :key="project.id">
                    <h2>{{ project.name }}</h2>
                    <p>{{ project.description }}</p>
                    <ul>
                        <li v-for="skill in project.skills" :key="skill.id">{{ skill.name }}</li>
                    </ul>
                    <p>Min Budget: {{ project.minBudget }}</p>
                    <p>Max Budget: {{ project.maxBudget }}</p>
                </div>
            </div>
        </body>
    </div>
</template>
  
<script>
import { PROJECTS_API, SEARCH_API } from '@/constants';
import { GET } from '@/constants';
import ApiUtils from '@/utils/ApiUtils';

export default {
    data() {
        return {
            projects: [
                {
                    "id": 1,
                    "clientId": 2,
                    "assignee": 0,
                    "name": "Advanced Java Project",
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
                    "projectStartTime": null,
                    "timeLimit": 0
                }],
            searchTerm: '',
            recommended: false
        };
    },
    mounted() {
        this.getProjects().then(data => {
            console.log(data)
            this.projects = data;
        });
    },
    computed: {
        filteredProjects() {
            let filtered = this.projects.filter(project => {
                if (this.recommended && !project.recommended) {
                    return false;
                }
                if (this.searchTerm) {
                    return project.name.toLowerCase().includes(this.searchTerm.toLowerCase());
                }
                return true;
            });
            return filtered;
        }
    },
    methods: {
        async search() {
        },
        async getProjects() {
            const apiUtils = new ApiUtils()
            const responseData = await apiUtils.request(GET, PROJECTS_API + SEARCH_API, undefined, { searchTerm: "" })
            const recommendedData = {
                "id": 1,
                "clientId": 2,
                "assignee": 0,
                "name": "Vue JS",
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
                "projectStartTime": null,
                "timeLimit": 0,
                "recommended": true
            };
            responseData.push(recommendedData)
            return responseData
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

.list-wrapper {
    height: 750px;
    /* set a fixed height */
    overflow-y: auto;
    /* enable vertical scrolling */
}

/* Project list */
.project-list {
    display: flex;
    flex-wrap: wrap;
}

.project-list>div {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.project-list>div:hover {
    transform: scale(1.05);
}

.project-list h2 {
    margin-top: 0;
    font-size: 24px;
    color: #333;
}

.project-list ul {
    margin: 0;
    padding: 0;
}

.project-list li {
    list-style: none;
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    color: #666;
}

.project-list p {
    margin: 10px 0;
    font-size: 16px;
    color: #333;
}
</style>
  