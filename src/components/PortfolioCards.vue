<template>
    <body class="u-body u-image u-image-tiles u-xl-mode bg" data-lang="en">
        <div class="wrapper">
            <h1>Freelancer Portfolios</h1>
            <button class="create-button" @click="createPortfolio">+ Add Portfolio</button>
            <div class="portfolio-cards">
                <div class="portfolio-card" v-for="portfolio in portfolios" :key="portfolio.id" @mouseover="zoomIn"
                    @mouseleave="zoomOut">
                    <div class="card-header">
                        {{ portfolio.title }}
                        <h4>
                            {{ portfolio.type }}
                        </h4>
                    </div>
                    <div class="card-body">
                        <div class="card-text">{{ portfolio.description }}</div>
                        <div class="card-skills">
                            <span v-for="skill in portfolio.skills" :key="skill.id" class="badge badge-primary">{{
                                skill.name
                            }}</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-secondary btn-sm" @click="editPortfolio(portfolio)">Edit</button>
                        <button class="btn btn-danger btn-sm" @click="deletePortfolio(portfolio)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>
  
<script>
import router from '@/router';

export default {
    props: {
        portfolios: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            zoomedIn: false,
        };
    },
    methods: {
        zoomIn() {
            this.zoomedIn = true;
        },
        zoomOut() {
            this.zoomedIn = false;
        },
        createPortfolio() {
            router.push('/create-portfolio')
        },
        editPortfolio(portfolio) {
            // handle edit button click
            console.log("Editing portfolio:", portfolio);
        },
        deletePortfolio(portfolio) {
            // handle delete button click
            console.log("Deleting portfolio:", portfolio);
        },
    },
};
</script>
  
<style>
.wrapper {
    height: 850px;
    /* set a fixed height */
    overflow-y: auto;
    /* enable vertical scrolling */
}

h1 {
    color: #746f6f;
}

.create-button {
    margin-left: 0px;
    height: 40px;
    margin-bottom: 1px;
    width: 200px;
    border-radius: 25px;
    background-color: #1b61ac;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
    border: none;
}

.create-button:hover {
    box-shadow: 0 8px #999;
    transform: translateY(-4px);
}

h4 {
    color: #d48d39;
}

.portfolio-cards {
    display: flex;
    flex-wrap: wrap;
}

.portfolio-card {
    width: 300px;
    margin: 10px;
    border: 1px solid #cc9696;
    border-radius: 5px;
    transition: transform 0.2s ease-in-out;
    transform: scale(1);
}

.portfolio-card:hover {
    transform: scale(1.05);
}

.card-header {
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
    background-color: #f5f5f5;
}

.card-body {
    padding: 10px;
    background-color: #e7e7e7;
}

.card-text {
    margin-bottom: 10px;
}

.card-skills {
    display: flex;
    flex-wrap: wrap;
}

.badge {
    margin-right: 5px;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ddd;
}
</style>
  