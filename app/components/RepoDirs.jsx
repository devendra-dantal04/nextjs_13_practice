import Link from "next/link";
import React from "react";

async function fecthRepoContents(name) {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(`https://api.github.com/repos/devendra-dantal04/${name}/contents`, {

        next: {
            revalidate: 60
        }
    });
    const content = await response.json();
    return content;
}

const RepoDirs = async ({ name }) => {

    const contents = await fecthRepoContents(name);
    const dirs = contents.filter((content) => content.type === 'dir');

    return <>
        <h3>Directories</h3>
        <ul>
            {
                dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </>;
};

export default RepoDirs;
