
import pkg from '../package.json' assert { type: 'json' };
import readline from "readline"
import chalk from "chalk"
import { stdin as input, stdout as output } from "node:process"
const { name, version } = pkg;

import { execSync } from "node:child_process"
const rl = readline.createInterface({ input, output })

async function main(){
    let newVersion = version.split(".")
    newVersion[2] = parseInt(newVersion[2]) + 1
    newVersion = newVersion.join(".")
    console.log(`Ready to release ${name} new version: v${newVersion}, the old version: v${version}`)
    // request user to change version
    const newVersionInput = await readlineSync(`Please input new version ${chalk.yellow(`(default: ${newVersion})`)}: `)
    if(newVersionInput && newVersion.includes(".")){
        newVersion = newVersionInput
    }
    rl.question(`Are you sure to release v${newVersion}? (y/n) `, async (answer) => {
        if(answer === "y"){
            console.log("Start to release...")
            // install dependencies
            execSync("pnpm install")
            execSync("npm run build")
            execSync("git add .")
            execSync(`git commit -m "release: ${newVersion}"`)
            execSync(`git tag -a v${newVersion} -m "release: v${newVersion}"`)
            execSync("git push")
            execSync("git push --tags")
            // set original registry
            execSync("npm config set registry https://registry.npmjs.org")
            execSync("npm publish")
            // recover registry
            execSync("npm config set registry https://registry.npmmirror.com")
            console.log("Release success!")
        }else{
            console.log("Release canceled!")
        }
        rl.close()
    })
}

function readlineSync(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, answer => {
            resolve(answer)
        })
    })
}

await main()




