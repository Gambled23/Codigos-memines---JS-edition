console.log('pablo')
setTimeout(() => console.log('tick'), 2000);


const promesa = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => 
            {resolve(console.log('lo resolvió')),reject(console.log('lo rejecteó'))}, 
            2000
        )
    )


async function main()
{
    
}