import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

import React from "react";

async function fetchRepo(name) {
    const response = await fetch(`https://api.github.com/repos/devendra-dantal04/${name}`, {
        next: {
            revalidate: 60
        }
    });
    const repo = await response.json()
    return repo;
}

const Repo = async ({ name }) => {

    const repo = await fetchRepo(name);
    console.log(repo)

    return <>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <div className="card-stat">
            <FaStar /> {repo.stargazers_count}
        </div>
        <div className="card-stat">
            <FaCodeBranch /> {repo.forks_count}
        </div>
        <div className="card-stat">
            <FaEye /> {repo.watchers_count}
        </div>
    </>;
};

export default Repo;
