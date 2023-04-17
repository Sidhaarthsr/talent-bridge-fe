<template>
    <body class="u-body u-image u-image-tiles u-xl-mode bg" data-lang="en">
        <div class = "form-wrapper">
            <h1>
                Create New Project
            </h1>
            <form @submit.prevent="submitForm">
                <label>
                    Name:
                    <input type="text" v-model="name" />
                </label>
                <br />
                <label>
                    Description:
                    <textarea v-model="description"></textarea>
                </label>
                <br />
                <label>
                    Skills:
                    <select v-model="selectedSkills" multiple>
                        <option v-for="skill in skills" :key="skill.id" :value="skill.id">{{ skill.name }}</option>
                    </select>
                </label>
                <br />
                <label>
                    Payment Mode:
                    <select v-model="paymentMode">
                        <option value="HOURLY">Hourly</option>
                        <option value="FIXED">Fixed</option>
                    </select>
                </label>
                <br />
                <label>
                    Min Budget:
                    <input type="number" v-model="minBudget" />
                </label>
                <br />
                <label>
                    Max Budget:
                    <input type="number" v-model="maxBudget" />
                </label>
                <br />
                <label>
                    Add-ons:
                    <input type="text" v-model="addOns" />
                </label>
                <br />
                <button type="submit" class="submit-button" @click="submitForm">Submit</button>
            </form>
        </div>
    </body>
</template>
  
<script>
import router from '@/router';

export default {
    data() {
        return {
            id: 6,
            clientId: 2,
            assignee: 0,
            name: '',
            description: '',
            files: [],
            status: 'INITIATED',
            paymentMode: 'HOURLY',
            minBudget: 20000,
            maxBudget: 40000,
            addOns: 'RECRUITER',
            sharedRequests: [],
            bids: [],
            skills: [
                {
                    id: 6,
                    name: 'rdbms'
                },
                {
                    id: 3,
                    name: 'cloud development'
                },
                {
                    id: 1,
                    name: 'skill100'
                },
                {
                    id: 4,
                    name: 'j2ee'
                }
            ],
            selectedSkills: []
        };
    },
    methods: {
        submitForm() {
            const data = {
                id: this.id,
                clientId: this.clientId,
                assignee: this.assignee,
                name: this.name,
                description: this.description,
                files: this.files,
                status: this.status,
                paymentMode: this.paymentMode,
                minBudget: this.minBudget,
                maxBudget: this.maxBudget,
                addOns: this.addOns,
                sharedRequests: this.sharedRequests,
                bids: this.bids,
                skills: this.selectedSkills,
                projectStartTime: null,
                timeLimit: 0
            };
            console.log(data); // or make an API request to post data
            router.push("/")
        }
    }
};
</script>
<style>
.form-wrapper {
    height: 800px;
    /* set a fixed height */
    overflow-y: auto;
    /* enable vertical scrolling */
}

.submit-button {
  margin-left: 100px;
  margin-top: 20px;
  border-radius: 25px;
  background-color: #1b61ac;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  transition-duration: 0.4s;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px #999;
}

.submit-button:hover {
  box-shadow: 0 8px #999;
  transform: translateY(-4px);
}

form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: sans-serif;
    margin: 0 auto;
    max-width: 600px;
}

label {
    margin: 10px 0;
    font-weight: bold;
    display: block;
}

input[type="text"],
textarea,
select,
input[type="number"] {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
}

button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}
</style>